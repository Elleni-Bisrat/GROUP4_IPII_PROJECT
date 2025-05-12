<?php
$conn = new mysqli("localhost", "root", "", "resources");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$rootFolder = __DIR__ . "/Bookscollection/bigBooks/";

$yearMap = [
    "firstyear" => "1",
    "secondyear" => "2",
    "thirdyear" => "3",
    "fourthyear" => "4",
    "fifthyear" => "5",
    "1styear" => "1",
    "2ndyear" => "2",
    "3rdyear" => "3",
    "4thyear" => "4",
    "5thyear" => "5",
    "year1" => "1",
    "year2" => "2",
    "year3" => "3",
    "year4" => "4",
    "year5" => "5"
];


function getAllPDFFiles($dir) {
    $pdfFiles = [];
    $items = scandir($dir);
    
    foreach ($items as $item) {
        if ($item === "." || $item === "..") continue;
        $path = $dir . DIRECTORY_SEPARATOR . $item;
        
        if (is_dir($path)) {
            $pdfFiles = array_merge($pdfFiles, getAllPDFFiles($path));
        } elseif (strtolower(pathinfo($path, PATHINFO_EXTENSION)) === "pdf") {
            $pdfFiles[] = $path;
        }
    }
    return $pdfFiles;
}

$allPDFs = getAllPDFFiles($rootFolder);

// Prepare statement for insertion
$stmt = $conn->prepare("INSERT INTO books_table (file_name, file_path, year, course_name, file_size) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssssd", $file_name, $file_path, $year, $course_name, $file_size_MB);

foreach ($allPDFs as $file_path) {
    $file_name = basename($file_path);
    $file_size_MB = round(filesize($file_path) / (1024 * 1024), 2);
    
    // Normalize and analyze path
    $normalizedPath = str_replace('\\', '/', $file_path);
    $normalizedPath = preg_replace('#/+#', '/', $normalizedPath);
    
    // Remove the root folder from path to analyze structure
    $relativePath = str_replace($rootFolder, '', $normalizedPath);
    $pathParts = explode('/', $relativePath);
    
    // Debug output (you can remove this after testing)
    // echo "Processing: $file_path\n";
    // echo "Path parts: " . print_r($pathParts, true) . "\n";
    
    // Initialize with default values
    $year = null;
    $course_name = null;
    
    // Try to extract year and course from different path positions
    foreach ($pathParts as $i => $part) {
        $lowerPart = strtolower(trim($part));
        
        // Check if this part matches a year
        if (isset($yearMap[$lowerPart])) {
            $year = $yearMap[$lowerPart];
            
            // Assume course is the next directory
            if (isset($pathParts[$i+1])) {
                $course_name = $pathParts[$i+1];
                $course_name = ucwords(str_replace(['_', '-', '%20'], ' ', $course_name));
                $course_name = preg_replace('/[^a-zA-Z0-9\s]/', '', $course_name);
            }
            break;
        }
    }
    
    // If still not found, try alternative patterns
    if ($year === null) {
        // Try to extract year from folder names like "Y1", "Y2", etc.
        foreach ($pathParts as $part) {
            if (preg_match('/y(\d)/i', $part, $matches)) {
                $year = $matches[1];
                break;
            }
        }
    }
    
    // Check for duplicates
    $check = $conn->prepare("SELECT id FROM books_table WHERE file_name = ?");
    $check->bind_param("s", $file_name);
    $check->execute();
    $check->store_result();
    
    if ($check->num_rows > 0) {
        echo "Skipping duplicate: $file_name\n";
        continue;
    }
    
    // Insert into database
    if ($stmt->execute()) {
        echo "Inserted: $file_name (Year: " . ($year ?? 'NULL') . ", Course: " . ($course_name ?? 'NULL') . ")\n";
    } else {
        echo "Error inserting $file_name: " . $stmt->error . "\n";
    }
}

$stmt->close();
$conn->close();
?>

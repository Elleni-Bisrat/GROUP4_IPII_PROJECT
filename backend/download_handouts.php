<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

// Log requests for debugging (optional)
file_put_contents('debug.log', date('Y-m-d H:i:s') . " - " . file_get_contents('php://input') . "\n", FILE_APPEND);

// Database connection setup
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resources";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Decode JSON request
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data || !isset($data['course_name'])) {
    die(json_encode(["error" => "Invalid request data or missing course name"]));
}

$courseName = trim($data['course_name']);
$chapterNumber = isset($data['chapter']) ? (int)$data['chapter'] : null;

// Query to fetch handout
$query = "SELECT file_path, file_name FROM handouts_table 
          WHERE course_name LIKE CONCAT('%', ?, '%') 
          AND (? IS NULL OR chapter = ?)
          ORDER BY chapter LIMIT 1";

$stmt = $conn->prepare($query);
if (!$stmt) {
    die(json_encode(["error" => "Prepare failed: " . $conn->error]));
}

$stmt->bind_param("sii", $courseName, $chapterNumber, $chapterNumber);
if (!$stmt->execute()) {
    die(json_encode(["error" => "Execute failed: " . $stmt->error]));
}

$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    
    $relativePath = $row['file_path']; 
$filePath = $row['file_path'];
$relativePath = str_replace("C:/xampp/htdocs/GROUP4_IPII_PROJECT/backend/", "", $filePath);

    if (file_exists($filePath)) {
        $baseURL = "http://localhost/GROUP4_IPII_PROJECT/backend/";
        $downloadURL = $baseURL . $relativePath;

        $response = [
            "download_url" => $downloadURL,
            "file_name" => $row['file_name']
        ];
        echo json_encode($response);
    } else {
        echo json_encode(["error" => "File not found: " . $filePath]);
    }
} else {
    echo json_encode(["error" => "No matching handout found"]);
}

$stmt->close();
$conn->close();
?>

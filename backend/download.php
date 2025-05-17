<?php
// Enable CORS and error reporting
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Database configuration
$host = 'localhost';
$dbname = 'resources';
$username = 'root';
$password = '';

// Check for required parameter
if (!isset($_GET['file_name'])) {
    http_response_code(400);
    echo json_encode(["error" => "File name parameter is required"]);
    exit;
}

$file_name = urldecode($_GET['file_name']);

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    // Get file info
    $stmt = $conn->prepare("SELECT file_path, file_name FROM books_table WHERE file_name = ?");
    $stmt->execute([$file_name]);
    $file = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$file || !file_exists($file['file_path'])) {
        http_response_code(404);
        echo json_encode(["error" => "File not found"]);
        exit;
    }

    // Set download headers
    header('Content-Description: File Transfer');
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . basename($file['file_name']) . '"');
    header('Content-Length: ' . filesize($file['file_path']));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    
    // Output the file
    readfile($file['file_path']);
    exit;
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
    exit;
}
?>

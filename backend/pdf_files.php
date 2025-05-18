<?php
// Enable CORS and error reporting
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
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

// Create connection
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

// Get the input data
$input = file_get_contents('php://input');

// Check if input is empty
if (empty($input)) {
    http_response_code(400);
    echo json_encode(["error" => "Request body cannot be empty"]);
    exit;
}

// Decode JSON
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON data"]);
    exit;
}

// Validate course name
if (!isset($data['course_name']) || empty(trim($data['course_name']))) {
    http_response_code(400);
    echo json_encode(["error" => "Course name is required"]);
    exit;
}

$course_name = trim($data['course_name']);

try {
    // Search for the course
    $stmt = $conn->prepare("SELECT file_name, file_path FROM books_table WHERE course_name LIKE ? LIMIT 1");
    $search_term = '%' . str_replace(' ', '%', $course_name) . '%';
    $stmt->execute([$search_term]);
    $file = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($file) {
        echo json_encode([
            "success" => true,
            "file_info" => $file,
            "download_url" => "http://localhost/loginphp/download.php?file_name=" . urlencode($file['file_name'])
        ]);
    } else {
        http_response_code(404);
        $courses = $conn->query("SELECT DISTINCT course_name FROM books_table")->fetchAll(PDO::FETCH_COLUMN);
        echo json_encode([
            "error" => "No resources found for: " . $course_name,
            "available_courses" => $courses
        ]);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>
<?php
// CORS and error reporting
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}
//
$host = 'localhost';
$dbname = 'resources';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

//input
$input = file_get_contents('php://input');


if (empty($input)) {
    http_response_code(400);
    echo json_encode(["error" => "Request body cannot be empty"]);
    exit;
}

//  json
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON data"]);
    exit;
}
//
if (!isset($data['course_name']) || empty(trim($data['course_name']))) {
    http_response_code(400);
    echo json_encode(["error" => "Course name is required"]);
    exit;
}

$course_name = trim($data['course_name']);

try {
    // course saercher
    $stmt = $conn->prepare("SELECT file_name, file_path FROM books_table WHERE course_name LIKE ? LIMIT 1");
    $search_term = '%' . str_replace(' ', '%', $course_name) . '%';
    $stmt->bind_param("s", $search_term);
    $stmt->execute();
    $result = $stmt->get_result();
    $file = $result->fetch_assoc();
    
    if ($file) {
        echo json_encode([
            "success" => true,
            "file_info" => $file,
            "download_url" => "http://localhost/loginphp/download.php?file_name=" . urlencode($file['file_name'])
        ]);
    } else {
        http_response_code(404);
        $courses_result = $conn->query("SELECT DISTINCT course_name FROM books_table");
        $courses = [];
        while ($row = $courses_result->fetch_assoc()) {
            $courses[] = $row['course_name'];
        }
        echo json_encode([
            "error" => "No resources found for: " . $course_name,
            "available_courses" => $courses
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}

$conn->close();
?>

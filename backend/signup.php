<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Handle CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Connect to database
$conn = new mysqli("localhost", "root", "", "resources");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["result" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

// Get input data
$json = file_get_contents('php://input');
$data = json_decode($json);

if (!$data) {
    http_response_code(400);
    echo json_encode(["result" => "Invalid input data"]);
    exit();
}

// Validate required fields
if (
    empty($data->user) || 
    empty($data->email) || 
    empty($data->password) || 
    empty($data->confirm_password)
) {
    http_response_code(400);
    echo json_encode(["result" => "All fields are required"]);
    exit();
}

$user = $conn->real_escape_string(trim($data->user));
$email = $conn->real_escape_string(trim($data->email));
$password = $data->password;
$confirm_password = $data->confirm_password;

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["result" => "Invalid email format"]);
    exit();
}

// Validate password match
if ($password !== $confirm_password) {
    http_response_code(400);
    echo json_encode(["result" => "Passwords do not match"]);
    exit();
}

// Check if email exists
$stmt = $conn->prepare("SELECT id FROM login WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    http_response_code(409);
    echo json_encode(["result" => "Email already registered"]);
    $stmt->close();
    exit();
}
$stmt->close();

// Hash password and insert
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$stmt = $conn->prepare("INSERT INTO login (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $user, $email, $hashed_password);

if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode(["result" => "Signup successful"]);
} else {
    http_response_code(500);
    echo json_encode(["result" => "Registration failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
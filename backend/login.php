<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "resources");

if ($conn->connect_error) {
    echo json_encode(["result" => "Database connection failed"]);
    exit();
}

$eData = file_get_contents("php://input");

file_put_contents("log.txt", $eData);

$dData = json_decode($eData, true);

if (!is_array($dData) || !isset($dData['user'], $dData['email'], $dData['password'])) {
    echo json_encode([
        "result" => "Invalid JSON or missing keys",
        "raw" => $eData
    ]);
    exit();
}

$user = $dData['user'];
$email = $dData['email'];
$password = $dData['password'];
$result = "";

if ($user !== "" && $email !== "" && $password !== "") {
    $stmt = $conn->prepare("SELECT * FROM login WHERE username = ?");
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $res = $stmt->get_result();

    if ($res->num_rows > 0) {
        $row = $res->fetch_assoc();

        if ($email !== $row['email']) {
            $result = "Invalid email!";
        } else {
            // Use password_verify to check if the plain password matches the hashed password
            if (!password_verify($password, $row['password'])) {
                $result = "Invalid password!";
            } else {
                $result = "Logged in successfully! Redirecting...";
            }
        }
    } else {
        $result = "Invalid username!";
    }
} else {
    $result = "All fields are required!";
}

echo json_encode(["result" => $result]);
$conn->close();
?>

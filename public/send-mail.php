<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method"
    ]);
    exit;
}

$name = htmlspecialchars(trim($_POST["name"] ?? ""));
$email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($_POST["phone"] ?? ""));
$service = htmlspecialchars(trim($_POST["service"] ?? ""));

if (empty($name) || empty($email) || empty($phone) || empty($service)) {
    echo json_encode([
        "success" => false,
        "message" => "All fields are required"
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid email address"
    ]);
    exit;
}

$to = "info@shrishyamggroup.com";
$subject = "New Service Request from Website";

$message = "
New service request received from website:

Name: $name
Email: $email
Phone: $phone
Selected Service: $service
";

$headers = "From: info@shrishyamggroup.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to send message. PHP mail() is not configured on this server."
    ]);
}
?>
<?php
$host = "sql302.infinityfree.com";
$db = "if0_12345678_HSCKdb";
$user = "if0_12345678";
$pass = "cckcCCKC1024";

$conn = new mysqli($host, $user, $pass, $db);
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    error_log("==!!!Connect Error!!!==\nAccess MyWebSite's InfinityFree MySQL Database Rejected.\n" . $conn->connect_error);
    die("Database connection failed.");
}
echo "Connect MyWebSite's InfinityFree MySQL Database Successfully!";
?>

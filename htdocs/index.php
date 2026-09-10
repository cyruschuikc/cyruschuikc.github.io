<?php
$host = "sql302.infinityfree.com";
$db = "if0_12345678_HSCKdb";
$user = "if0_12345678";
$pass = "cckcCCKC1024";
$charset = "utf8mb4";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => 
      PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => 
      PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connect InfinityFree MySQL Database Successfull！";
} catch (\PDOException $e) {
    die("InfinityFree MySQL Database connect rejected: " . $e->getMessage());
}
?>

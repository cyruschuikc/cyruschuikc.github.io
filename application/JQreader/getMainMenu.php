<?php
// Handle CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Preflight response
    header("Access-Control-Allow-Origin: https://cyruschuikc.github.io");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit(0);
}

// Normal response headers
header("Access-Control-Allow-Origin: https://cyruschuikc.github.io");
header("Content-Type: application/json");

// Build your menu structure
$siteGuide = array(
    "page" => "CCKCs WebSiteBlog GHio",
    "tab" => array(
        array("link" => "cyruschuikc.github.io", "text" => "Home", "query" => "/"),
        array("link" => "cyruschuikc.infinityfree.io", "text" => "🔒", "query" => "/?i=1")
    )
);

// Output JSON
echo json_encode($siteGuide);
?>

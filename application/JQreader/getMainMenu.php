<?php
// Handle CORS
$allowed = [
    "https://cyruschuikc.github.io",
    "https://cyruschuikc.infinityfree.io"
];
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
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

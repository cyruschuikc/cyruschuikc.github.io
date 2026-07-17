<?php
// Handle CORS
header("Access-Control-Allow-Origin: https://cyruschuikc.infinityfree.io");
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

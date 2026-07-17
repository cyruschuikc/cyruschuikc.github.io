<?php
    header("Content-Type:Application/json");
    header("Access-Control-Allow-Origin: https://cyruschuikc.github.io");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    $siteGuide = array(
        "page"=>"CCKCs WebSiteBlog GHio",
        "tab"=>array(
            array("link"=>"cyruschuikc.github.io", "text"=>"Home", "query"=>"/"),
            array("link"=>"cyruschuikc.infinityfree.io", "text"=>"&#128271;", "query"=>"/?i=1")
        )
    );

    echo json_encode($siteGuide);
?>

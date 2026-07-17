<?php
    header("Content-Type:Application/json");
    $siteGuide = array(
        "page"=>"CCKCs WebSiteBlog GHio",
        "tab"=>array(
            array("link"=>"cyruschuikc.github.io", "text"=>"Home", "query"=>"/"),
            array("link"=>"cyruschuikc.infinityfree.io", "text"=>"&#128271;", "query"=>"/?i=1")
        )
    );

    echo json_encode($siteGuide);
?>

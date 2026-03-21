<?php
$lastUpdate = date("Y-m-d H:i:s", filemtime(__FILE__));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">    
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <meta name="author" content="cyruschuikc.github.io" />
    <meta name="generator" content="MS StudioCode 1.111.0 | Windows10(x64)/11" />
    <title>KamiKiCy SEED</title>
    <style>
        #logo {
            text-align: center;
            padding: 10px 0;
            height: 20%;
        }
        #logo img {
            width: 100%;
            filter: drop-shadow(0 0 10px rgba(0,255,200,0.8));
            transform: scale(1);
            transition: 0.2s ease;
            opacity: 0;
            animation: fadeIn 0.6s ease forwards;
            will-change: opacity, transform;
        }
        #logo img:hover { transform: scale(1.03); }
        @keyframes fadeIn { to { opacity: 1; } }
        body {
            font-family: 'Abadi','Aptos Display',Arial,'Arial Narrow','Calibri','Cambria','DangXian',Georgia,
            'Gothic','Malgun Gothic','Meiroy','SimSun',Times,'Universe','Verdana',sans-serif;
            font-size: 100%;
            background-color: #c1fcfc;
            border: 2px dotted transparent;
            margin: 0;
            padding: 0 10px;
        }
        .TopBordCursor, .TopCursor {
            font-family: 'Fairwater Script','STXingkai','Aptos Display',sans-serif;
            padding: 8px 0;
            font-size: 100%;
            text-align: center;
            background: rgba(242,242,242,.5);
        }
        #title { font-size: 2.2rem; display: inline-block; }
        #title:hover { animation: shake 0.3s ease; }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            60% { transform: translateX(-2px); }
            80% { transform: translateX(2px); }
        }
        #slogan { font-size: 1.2rem; }
        #SDLabel { font-size: 1.3rem; }
        .PageFloor, .AppliCode {
            box-shadow: 0 2px 6px rgba(0,0,0,.15);
            padding: 6px;
        }
        #AT, #v, #lupdate {
            font-family: Arial, Georgia, Times, Verdana, sans-serif;
            font-size: 90%;
            text-align: left;
            background: rgba(255, 255, 255, .5);
            color: rgba(0, 0, 0, .5);
            display: block;
            padding: 2px 4px;
        }
        #gener {
            font-family: Arial, Times, sans-serif;
            font-size: 100%;
            text-align: left;
            background-color: rgba(0,123,255,.5);
            color: #fff;
            padding: 4px;
            display: block;
        }
    </style>
</head>
<body>
    <div id="logo"></div>
    <div class="TopBordCursor" name="fceiling">
        <label id="title">KamiKiCy`SEED`</label><br>
        <label id="slogan"><i>'Use Kamisato Kira`s 🪪, 📜🖋 Cyrus`s 🫠 & 🎭📖'</i></label>
    </div>
    <div class="TopCursor" name="lceiling">
        <label id="SDLabel">Kamisato Kira✖️Cyrus—The•👷⚒️🧑‍🔧 & The•🫅🤹🦹‍♂️</label>
    </div>
    <div class="PageFloor" name="pfloor">
        <label id="AT">✏️👤: CHUI KA CHUN [(cyruschuikc)/(Cyrus)/(Kamisato Kira)]</label><br>
        <label id="v">Version: prototype2</label><br>
        <label id="lupdate">Last Updated at: <?= $lastUpdate ?> (HK+08:00)</label>
    </div>
    <footer>
        <div class="AppliCode" name="apicode">
            <label id="gener">MS StudioCode 1.111.0 | Windows10(x64)/11 | KamiKiCy`SEED`</label>
        </div>
    </footer>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            function showLogo() {
                const logo = document.createElement("img");
                logo.src = "https://cyruschuikc.github.io/fav.png";
                logo.alt = "KamiKiCy SEED";
                logo.style.cursor = "pointer";
                logo.style.width = "37.5%";
                logo.style.height = "auto";
                logo.addEventListener("click", () => { handleLogoOnclick(); });
                return logo;
            }
            const logoEL = showLogo();
            document.getElementById("logo").appendChild(logoEL);
            function quickRefresh() { window.location.reload(); }
            function handleLogoOnclick() {
                const option = confirm("Do you want to reload the website?");
                if (option) quickRefresh();
            }
        });
    </script>
</body>
</html>

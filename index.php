<?php
    $author    = "cyruschuikc.github.io";
    $generator = "MS StudioCode 1.111.0 | Windows10(x64)/11";
    $version   = "prototype2";
    $appLabel  = "MS StudioCode 1.111.0 | Windows10(x64)/11 | KamiKiCy`SEED`";
    $lastUpdated = date("Y-m-d H:i:s", filemtime(__FILE__)) . " (HK+08:00)";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <meta name="author" content="<?php echo htmlspecialchars($author); ?>" />
    <meta name="generator" content="<?php echo htmlspecialchars($generator); ?>" />
    <title>KamiKiCy SEED</title>
    <style>
        #logo img {
            max-width: 100%;
            filter: drop-shadow(0 0 10px rgba(0,255,200,0.8));
            transform: scale(1);
            transition: 0.2s ease;
            opacity: 0;
            animation: fadeIn 0.6s ease forwards;
            will-change: opacity, transform;
        }
        #logo img:hover {transform: scale(1.03);}
        @keyframes fadeIn {to { opacity: 1; }}
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
        #title {font-size: 2.2rem; display: inline-block;}
        #title:hover {animation: shake 0.3s ease;}
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            60% { transform: translateX(-2px); }
            80% { transform: translateX(2px); }
        }
        #slogan { font-size: 1.2rem; }
        #SDLabel { font-size: 1.3rem; }
        .PageFloor, .AppliCode {box-shadow: 0 2px 6px rgba(0,0,0,.15); padding: 6px;}
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
        <label id="AT">✏️👤: CHUI KA CHUN [(cyruschuikc)/(Cyrus)/(Kamisato Kira)]</label>
        <label id="v">Version: <?php echo htmlspecialchars($version); ?></label>
        <label id="lupdate">Last Updated at: <?php echo htmlspecialchars($lastUpdated); ?></label>
    </div>
    <footer>
        <div class="AppliCode" name="apicode">
            <label id="gener"><?php echo htmlspecialchars($appLabel); ?></label>
        </div>
    </footer>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            function showLogo() {
                const logo = document.createElement("img");
                logo.src = "https://github.com/cyruschuikc/cyruschuikc.github.io/blob/main/fav.png";
                logo.alt = "KamiKiCy SEED";
                logo.style.cursor = "pointer";
                logo.style.width = "37.5%";
                logo.style.height = "auto";
                logo.addEventListener("click", () => { handleLogoOnclick(); });
                return logo;
            }
            const logoEL = showLogo();
            document.getElementById("logo").appendChild(logoEL);
            function quickRefresh() {window.location.reload();}
            function handleLogoOnclick() {
                console.log(
                    "detected Visitor action: onclick website logo\n" +
                    "===>>>pre-to response: reload the website\n" +
                    "ready to reload!! waiting for Visitor confirmation..."
                );
                const option = confirm("Do you want to reload the website?");
                if (option) quickRefresh();
                else console.log("detected Visitor action: cancel change\ncanceled change!!\ncontinue visiting!!");
            }
        });
    </script>
</body>
</html>

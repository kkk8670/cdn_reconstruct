export default `
<!doctype html>
<html>

<head>
    <html lang='zh-CN'>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'>
    <meta name='apple-mobile-web-app-capable' content='yes'>
    <meta name='apple-mobile-web-app-status-bar-style' content='black'>
    <meta name='format-detection' content='telephone=no'>
    <title>CC check</title>
    <style>
        body {
            margin: auto;
            padding: 0;
            font-family: 'Microsoft Yahei', Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
            background: #f9f9f9
        }

        .main {
            max-width: 460px;
            margin: auto;
            margin-top: 140px
        }

        @media screen and (max-width:560px) {
            .main {
                max-width: 100%
            }
        }

        #second {
            color: red
        }

        .alert {
            text-align: center
        }

        .panel-footer {
            text-align: center
        }

        .txts {
            text-align: center;
            margin-top: 40px
        }

        .bds {
            line-height: 40px;
            border-left: #CCC 1px solid;
            padding-left: 20px
        }

        .panel {
            margin-top: 30px
        }

        .alert-success {
            color: #3c763d;
            background-color: #dff0d8;
            border-color: #d6e9c6
        }

        .alert {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 4px
        }

        .glyphicon {
            position: relative;
            top: 1px;
            display: inline-block;
            font-family: 'Glyphicons Halflings';
            font-style: normal;
            font-weight: 400;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
    </style>
    <!--[if lt IE 9]><style>.row{height:100%;display:table-row}.col-md-3{display:table-cell}.col-md-9{display:table-cell}</style><![endif]-->
</head>

<body>
    <div class='main'>
        <div class='alert alert-success' role='alert'>
            <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>
            <span
                style='font-size: 15px;'>&#x6d4f;&#x89c8;&#x5668;&#x5b89;&#x5168;&#x68c0;&#x67e5;&#x4e2d;&#xff0c;&#x7cfb;&#x7edf;&#x5c06;&#x5728;
                <span id='second' >5</span>
                &#x79d2;&#x540e;&#x8fd4;&#x56de;&#x7f51;&#x7ad9;
            </span>
        </div>
    </div>
    <script>   
        var t=5;
        var interval = setInterval(() => {
            t--;
            document.getElementById("second").innerText=t;
            if (t<1){
                verify_func();
                clearInterval(interval);
                document.location.reload();               
            }
        }, 1000);
         
      </script>
</body>

</html>
`

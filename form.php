<?php
header('Content-Type:text/html;charset=utf-8');//设置页面编码格式为UTF-8
$server = "127.0.0.1";
$db_username = "root";
$db_password = "";
$db_name = "demo";

$db = mysqli_connect($server, $db_username, $db_password, $db_name);
$db->set_charset("utf8");
if($db->connect_error){
    die("连接失败".$db->connect_error);
}



if(!empty($_POST['ques1']) && !empty($_POST['ques2']) && !empty($_POST['ques3']) && !empty($_POST['ques4']) && !empty($_POST['ques5']) && !empty($_POST['ques6']) && !empty($_POST['ques7'])) {
    $sql = "INSERT INTO `form`(`ques1`, `ques2`, `ques3`, `ques4`, `ques5`, `ques6`, `ques7`) VALUES('$_POST[ques1]','$_POST[ques2]','$_POST[ques3]','$_POST[ques4]','$_POST[ques5]','$_POST[ques6]','$_POST[ques7]')";
    
    $result = mysqli_query($db,$sql);
    if (!$result){  
        die('Error: ' . mysqli_connect_error());
    }
}

$sql2 = "SELECT * FROM `form`";
$query = mysqli_query($db, $sql2);
//$infos = array();
//while($info= mysqli_fetch_array($query)){
//    $infos[] =$info;
//}

?>

<html>
    <head>
        <title>问卷信息</title>
    </head>
    <style>
        h1{
            text-align: center;
        }
        table{
            border:1px solid gray;
            margin:0 auto;
            /*border: none;*/
        }
        td {
            width:180px;
            /*border:1px solid black;*/
            text-align: center;
        }
        .tr1{
            height:40px;
            font-size:18px;
            font-weight:bold;
            background-color: #d9d2e9;
        }
        .tr2{
            background-color: #c9daf8;
        }
    </style>
    <body>
        <h1>大学生生问卷调查汇总</h1>
        <table>
            <tr class="tr1">
                <td style="width: 50px;">序号</td>
                <td>生活费用</td>
                <td>生活来源</td>
                <td>性别</td>
                <td>年级</td>
                <td>消费途径</td>               
                <td>操作</td>
            </tr>
            <?php 
                $i = 0;
                while($info= mysqli_fetch_array($query)){
                    $i++;
                echo "
            <tr class='tr2'>
                <td style='width: 50px;'>{$i}</td>
                <td>{$info['ques1']}</td>
                <td>{$info['ques2']}</td>
                <td>{$info['ques5']}</td>
                <td>{$info['ques3']}</td>
                <td>{$info['ques4']}</td>   
                <td><a href='form_info.php?id={$info['id']}'>查看</a></td>
            </tr>";
            }
            ?>
        </table>
    </body>
</html>



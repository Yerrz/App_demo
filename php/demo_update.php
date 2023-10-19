<?php
//连接数据库
include("conn.php");

$action = "";
$uuid = "";

$infos = array();
if(isset($_GET['action']) && isset($_GET['uuid'])){
    $action = $_GET['action'];
    $uuid = $_GET['uuid'];
}
if(isset($_POST['action'])){
    $action = $_POST['action'];
}
if($action == "read"){
    $sql = "select * from `form` where `uuid`='$uuid'";
    $query = mysqli_query($db,$sql);
    
    $info= mysqli_fetch_assoc($query);

    $infos["formdata_up"] = $info;

    echo json_encode($infos);

    
}
elseif($action == "update"){
    if(isset($_POST['uuid']) && isset($_POST['ques1']) && isset($_POST['ques2']) && isset($_POST['ques3']) && isset($_POST['ques4']) && isset($_POST['ques5']) && isset($_POST['ques6']) && isset($_POST['ques7'])){
        $uuid = $_POST['uuid'];
        $ques1 = $_POST['ques1'];
        $ques2 = $_POST['ques2'];
        $ques3 = $_POST['ques3'];
        $ques4 = $_POST['ques4'];
        $ques5 = $_POST['ques5'];
        $ques6 = $_POST['ques6'];
        $ques7 = $_POST['ques7'];

        $sql = "update `form` set `ques1`='$ques1',`ques2`='$ques2',`ques3`='$ques3',`ques4`='$ques4',`ques5`='$ques5',`ques6`='$ques6',`ques7`='$ques7' where `uuid`='$uuid'";
        mysqli_query($db,$sql);  
        
        echo "update ok!";
    }
}
else{
    echo "error";
}
//echo json_encode($infos);

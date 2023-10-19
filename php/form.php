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
    $unique_id = uniqid();
//    echo $unique_id;
//    $infos = array('error'=>false);
//    $u_id = array('uid'=>$unique_id);
    $infos['u_id'] = $unique_id;
    
    $sql = "INSERT INTO `form`(`uuid`,`ques1`, `ques2`, `ques3`, `ques4`, `ques5`, `ques6`, `ques7`) VALUES('$unique_id','$_POST[ques1]','$_POST[ques2]','$_POST[ques3]','$_POST[ques4]','$_POST[ques5]','$_POST[ques6]','$_POST[ques7]')";
    
    $result = mysqli_query($db,$sql);
    if (!$result){  
        die('Error: ' . mysqli_connect_error());
    }
}
echo json_encode($infos);

//$sql2 = "SELECT * FROM `form`";
//$query = mysqli_query($db, $sql2);
//$infos = array();
//while($info= mysqli_fetch_array($query)){
//    $infos[] =$info;
//}
//header("Loaction:ques_form.php");
?>




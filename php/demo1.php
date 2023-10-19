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
//else{
//    $sql = "SELECT * FROM `user`";
//    $query = mysqli_query($db, $sql);
//    $info=array();
//    while($info= mysqli_fetch_assoc($query)){
//        $infos[] = $info;
////        print_r($info);
////        var_dump($info);
//        
//    }
//    echo json_encode($infos);
//}
//
//新建一个变量，用来获取网络请求转过来的参数
$action = "read";
//新建一个变量用来返回查询到的数据
$infos = array('error'=>false);

//获取网络请求转过来的参数并复制给$action
if(isset($_GET['action'])){
    $action = $_GET['action'];
}


//$appid = "wx3c9cf501751dfeef";
//$secret = "91377c2ede6f1e33a585e14522cde9ab";
//$url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx3c9cf501751dfeef&secret=91377c2ede6f1e33a585e14522cde9ab';
//
////yourAppid为开发者appid.appSecret为开发者的appsecret,都可以从微信公众平台获取；
//
//$info = file_get_contents($url);//发送HTTPs请求并获取返回的数据，推荐使用curl
//
//$json = json_decode($info);//对json数据解码

//$arr = get_object_vars($json);
//
//$openid = $arr['openid'];
//
//$session_key = $arr['session_key'];


//判断传过来的参数，并执行对应的数据库操作
if($action == "read"){
    $sql = "SELECT * FROM `user`";
    $query = mysqli_query($db, $sql);
    $users=array();
    while($info= mysqli_fetch_assoc($query)){
        array_push($users,$info);
//        $infos['users'] = $info;
//        print_r($info);
//        var_dump($info);
        
    }
    $infos['uesrs'] = $users;
//    echo json_encode($infos);
}
if($action == "testapp"){
    $sql = "SELECT * FROM `user` where `id`=1";
    $query = mysqli_query($db, $sql);
    $users=array();
    while($info= mysqli_fetch_assoc($query)){
        array_push($users,$info);
        
//        $infos['users'] = $info;
//        print_r($info);
//        var_dump($info);
        
    }
    //将数据放在$res变量里面
    $infos['uesrs'] = $users;
//    echo json_encode($infos);
}
echo json_encode($infos);

//if(isset($name) && isset($name)){
//    $name = $_GET['name'];
//    $age = $_GET['age'];
//    echo $name,$age;
//}
//else{
//    echo "no";
//}

//$name = $_GET['name'];
////$age = $_GET['age'];
//echo json_decode($name);



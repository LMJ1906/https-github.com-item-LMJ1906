<?php
$id = $_REQUEST['id'];//商品id
$title = $_REQUEST['title'];//商品name
$img = $_REQUEST['img'];//商品img
$deploy=$_REQUEST['deploy'];
$price = $_REQUEST['price'];//商品price

$conn=mysqli_connect("localhost","root","root","music");

$sql = "SELECT * FROM `cart` WHERE `phone_id`='$id'";

$res = mysqli_query($conn,$sql);

$row =mysqli_fetch_assoc($res);
if($row){

    $arr = array('code'=>1);
}else{
    $sql = "INSERT INTO `cart` (`phone_id`,`phone_img`,`phone_title`,`phone_deploy`,`phone_price`) VALUES ('$id','$img','$title','$deploy','$price')";
    $result = mysqli_query($conn,$sql);
    if($result){
        $arr=array('code'=>1);
    }
}
echo json_encode($arr);
mysqli_close($conn);

?>
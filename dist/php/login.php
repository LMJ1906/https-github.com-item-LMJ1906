<?php
$username=$_POST['username'];
$password=$_POST['password'];

$conn=mysqli_connect("localhost","root","root","music");

$sql="SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";

$res = mysqli_query($conn,$sql);

$row =mysqli_fetch_assoc($res);
if($row){
    $arr = array('code'=>1,'data'=>array('username'=>$username));
}else{
    $arr = array('code'=>0,'msg'=>'用户名或密码错误');
}
echo json_encode($arr);
mysqli_close($conn);

?>
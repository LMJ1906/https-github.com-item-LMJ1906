<?php
$username=$_POST['username'];
$password=$_POST['password'];

$conn=mysqli_connect("localhost","root","root","music");
// 先查询是否存在相同的用户名
$sql1="SELECT * FROM `user` WHERE `username`='$username'";
$res = mysqli_query($conn,$sql1);
$row = mysqli_fetch_assoc($res);
// 不存在即可注册成功，存在即提示用户用户名已使用
if($row){
    $arr=array('code'=>0,'msg'=>'用户名已注册');
}else{
    $sql="INSERT INTO `user` (`username`,`password`) VALUES ('$username','$password')";
    $add=mysqli_query($conn,$sql);
    if($add){
        $arr=array('code'=>1,'data'=>array('username'=>$username),'msg'=>'注册成功');
    }else{
        $arr=array('code'=>0,'msg'=>'后端出错了');
    }
}
echo json_encode($arr);
mysqli_close($conn);








?>
<?php

$conn=mysqli_connect("localhost","root","root","music");

$sql = "SELECT * FROM `cart`";

$result = mysqli_query($conn,$sql);

$arr = mysqli_fetch_all($result,MYSQL_ASSOC);

if($arr){	
	echo json_encode(array("code"=>1,"data"=>$arr));
}else{	
	echo json_encode(array("code"=>0));
}
mysqli_close($conn);

?>
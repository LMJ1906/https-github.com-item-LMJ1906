<?php
$id = $_REQUEST['id'];

$conn=mysqli_connect("localhost","root","root","music");

$sql = "DELETE FROM `cart` WHERE `phone_id`=$id";

$result = mysqli_query($conn,$sql);


if($result){	
    echo 1;
    
}else{	
	echo 0;
}
mysqli_close($conn);

?>
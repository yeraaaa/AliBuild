<?php
	// servername => localhost
		// username => root
		// password => empty
		// database name => mobolaji
		$conn = mysqli_connect("localhost", "root", "", "alibuild");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 5 values from the form data(input)
		$CustomerName = $_REQUEST['CustomerName'];
		$CustomerSName = $_REQUEST['CustomerSName'];
		$CustomerPNumber = $_REQUEST['CustomerPNumber'];
        $CustomerLogin = $_REQUEST['CustomerLogin'];
		$CustomerPassword = $_REQUEST['CustomerPassword'];
		
		
		// Performing insert query execution
		// here our table name is college
		$sql = "INSERT INTO customers VALUES ('', '$CustomerName',
			'$CustomerSName','$CustomerPNumber', '$CustomerLogin','$CustomerPassword')";
		
		if(mysqli_query($conn, $sql)){
			echo "<h3>Thanks for contacting us!, our Team will respond to 
			you as soon as possible";

						} else{
			echo "ERROR: Hush! Sorry $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
?>
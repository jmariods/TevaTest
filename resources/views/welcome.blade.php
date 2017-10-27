<?php
/*
$serverName = "65.52.243.47";
$connectionOptions = array(
 "Database" => "DBWebCirculacion2",
 "Uid" => "usrwcirculacion",
 "PWD" => "/#)PwD52?_"
);
*/
//Establece la conexion
//$conn = sqlsrv_connect($serverName, $connectionOptions);
//Select Query
$db_ext = \DB::connection('sqlsrv');
$tsql= "SELECT @@Version as SQL_VERSION";
//Ejecuta Query
$getResults= sqlsrv_query($db_ext, $tsql);
//Manejo de Error
if ($getResults == FALSE)
 die(FormatErrors(sqlsrv_errors()));
?>
<h1> Results : </h1>
<?php
while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC)) {
 echo ($row['SQL_VERSION']);
 echo ("<br/>");
}
sqlsrv_free_stmt($getResults);
function FormatErrors( $errors )
{
 /* Muestra error */
 echo "Error information: <br/>";
 foreach ( $errors as $error )
 {
 echo "SQLSTATE: ".$error['SQLSTATE']."<br/>";
 echo "Code: ".$error['code']."<br/>";
 echo "Message: ".$error['message']."<br/>";
 }
}
?>
//Hola pokemon go 
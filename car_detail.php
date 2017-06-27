<link rel="stylesheet" href="style.css">
<?php
header("Access-Control-Allow-Origin: http://www.78696.ict-lab.nl/InhaalOpdrachtWeb4Mobile/");
require('config.php');
$id = $_GET['car_id'];
mysqli_real_escape_string($mysqli,$id = $_GET['car_id']);
$sql = "SELECT * FROM MWFM2_Herkansing WHERE id =".$id;
$result = mysqli_query($mysqli,$sql);
if(!isset ($id) || strlen($id) == 0)
{
echo "U heeft geen auto geselecteerd, u word doorgestuurd naar de home-pagina";
echo "</br>";
  echo"Klik <a href='index.html'>Hier!</a> om naar de Index-Pagina te gaan";
    exit;
}
elseif (mysqli_num_rows($result) < 1){
    echo "De auto die u probeert te zoeken bestaat niet meer, u heeft hier de mogelijkheid om  naar de home-pagina te gaan";
    echo "</br>";
    echo"Klik <a href='index.html'>Hier!</a> om naar de Home-Pagina te gaan";
    exit;
}
else
{
    $sql = "SELECT * FROM MWFM2_Herkansing WHERE id =".$id;
    $result = mysqli_query($mysqli,$sql);
    while($data = mysqli_fetch_array($result))
    {
    echo "<img src='".$data['Image']."' width='400' height='200'>";
    echo "</br>";
    echo "Merk: ".$data['Merk'];
    echo "</br>";
    echo "Type: ".$data['Type'];
    echo "</br>";
    echo "Kleur: ".$data['Kleur'];
    echo "</br>";
    echo "Bouwjaar: ".$data['Bouwjaar'];
    echo "</br>";
    echo "Brandstof: ".$data['Brandstof'];
    echo "</br>";
    echo "Prijs: ".$data['Prijs'];
    echo "</br>";
    }
}

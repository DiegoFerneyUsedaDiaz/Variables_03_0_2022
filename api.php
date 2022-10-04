<?php

header(Access-Control-Allow-Origin: *);

$nombreCompleto = "Diego Ferney Useda Diaz";
$edad = 36;
$altura = 1.75;
$soyAlumno = true;
$pasaTiempo = ["Dibujar" ,"Hacer Ejercicio" , "Video Juegos" , "Investigar"]
$direccion = new stdClass();
$direccion ->principal = "Calle 105";
$direccion ->secundaria = "Finca el Porvenir";

echo ($nombreCompleto);
echo ("<br>");
echo ($edad);
echo ("<br>");
echo ($altura);
echo ("<br>");
echo ($soyAlumno);
echo ($pasaTiempo);
echo ($direccion);
echo "<br>Soy el Servidor " .$_SERVER["HTTP_HOST"]


?>
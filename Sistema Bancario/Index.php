<?php
require_once("Objetos/Persona.php");
require_once("Objetos/Banco.php");
require_once("Objetos/CuentaBancaria.php");

$persona1 = new Persona("Román","Coletti",21,43632750,26062011);
$persona2 = new Persona("Pavlo","Pablovich",19,45741185,12313312);

$banco1 = new Banco("Banco BBVA","Urquiza 850");


$cuenta1 = new CuentaBanco($persona1->numeroCuenta,$persona1,500);
$banco1->agregarCuenta($cuenta1);

$cuenta2 = new CuentaBanco($persona2->numeroCuenta,$persona2,2000);
$banco1->agregarCuenta($cuenta2);

$cuentaBancaria1 = new CuentaBanco($persona1->numeroCuenta,$persona1->nombre,500);
$cuentaBancaria2 = new CuentaBanco($persona2->numeroCuenta,$persona2->nombre,2000);

echo($cuentaBancaria1->depocitar(100));
echo($cuentaBancaria1->depocitar(200));

echo($cuentaBancaria1->depocitar(1600));
echo($cuentaBancaria1->depocitar(2500));

echo($cuentaBancaria1->retirar(100));
echo($cuentaBancaria1->retirar(200));
echo($cuentaBancaria1->retirar(400));
echo($cuentaBancaria1->retirar(1000));
echo($cuentaBancaria1->retirar(2500));
echo($cuentaBancaria1->retirar(4000));

print_r($banco1->buscarCuenta("Román","Coletti"));
?>
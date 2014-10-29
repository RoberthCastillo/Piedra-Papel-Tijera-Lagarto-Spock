function numAleatorio (Minimo, Maximo){
	var numero = Math.floor(Math.random() * (Maximo - Minimo + 1) + Minimo)
	return numero;
};

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opcion = ["Piedra","Papel","Tijera","Lagarto","Spock"];

var opcionUsuario;
var opcionMaquina = numAleatorio(0,5);

opcionUsuario = prompt("Escoge una opción: \n Piedra = 0 \n Papel = 1 \n Tijera = 2 \n Lagarto = 3 \n Spock = 4",0);

alert("Escogiste " + opcion[opcionUsuario]);

if(opcionUsuario == piedra){
	if(opcionMaquina == piedra){
		alert("Empate!!!");
	}
	else if(opcionMaquina == papel){
		alert("Perdiste ;(");
	}
	else if(opcionMaquina == tijera){
		alert("Ganaste!!!");
	}
	else if(opcionMaquina == lagarto){
		alert("Aplastaste al Lagarto!!!");
	}
	else if(opcionMaquina == spock){
		alert("Spock te vaporizó!!!");
	}
	else{
		alert("Juega otra vez!!!");
	}
}
else if(opcionUsuario == papel){
	if(opcionMaquina == piedra){
		alert("Ganaste!!!");
	}
	else if(opcionMaquina == papel){
		alert("Empate!!!");
	}
	else if(opcionMaquina == tijera){
		alert("Perdiste ;(");
	}
	else if(opcionMaquina == lagarto){
		alert("El Lagarto te comió!!!");
	}
	else if(opcionMaquina == spock){
		alert("Refutaste a Spock!!!");
	}
	else{
		alert("Juega otra vez!!!");
	}
}
else if(opcionUsuario == tijera){
	if(opcionMaquina == piedra){
		alert("Perdiste ;(");
	}
	else if(opcionMaquina == papel){
		alert("Ganaste!!!");
	}
	else if(opcionMaquina == tijera){
		alert("Empate!!!");
	}
	else if(opcionMaquina == lagarto){
		alert("Decapitaste al Lagarto!!!");
	}
	else if(opcionMaquina == spock){
		alert("Spock te destrozó!!!");
	}
	else{
		alert("Juega otra vez!!!");
	}
}
else if(opcionUsuario == lagarto){
	if(opcionMaquina == piedra){
		alert("La Piedra te Aplasto!!!");
	}
	else if(opcionMaquina == papel){
		alert("Te comiste el Papel!!!");
	}
	else if(opcionMaquina == tijera){
		alert("Te decapito las Tijeras!!!");
	}
	else if(opcionMaquina == lagarto){
		alert("Empate!!!");
	}
	else if(opcionMaquina == spock){
		alert("Envenenaste a Spock!!!");
	}
	else{
		alert("Juega otra vez!!!");
	}
}
else if(opcionUsuario == spock){
	if(opcionMaquina == piedra){
		alert("Vaporizaste la Piedra!!!");
	}
	else if(opcionMaquina == papel){
		alert("Te refutó el Papel!!!");
	}
	else if(opcionMaquina == tijera){
		alert("Destrozaste las Tijeras");
	}
	else if(opcionMaquina == lagarto){
		alert("Te enveneno el Lagarto!!!");
	}
	else if(opcionMaquina == spock){
		alert("Empate!!!");
	}
	else{
		alert("Juega otra vez!!!");
	}
}
else{
	alert("Intentelo nuevamente!!!");
}

/****************************************************************************************************
 * Programa: Cálculo de verificação de ponto pertencente ao raio de uma circunferência ou à mesma.	*
 * Data: 02/11/2018.																				*
 * Autor: Daniel Attias.																			*
 * Versão: 1.0																						*
 * Última modificação: 02/11/2018.																	*
 ****************************************************************************************************/
function Ponto() {
	var x, y;
}

var P, C, Q;
/* P - Ponto da Circunferência
 * C - Centro da Circunferência
 * Q - Ponto para verificar se está na circunferência ou no raio da mesma. */

P = new Ponto();
C = new Ponto();
Q = new Ponto();

//Entradas fixas para testes:
P.x = P.y = 5; //P(5,5)
C.x = C.y = 0; //C(0,0)
Q.x = Q.y = 6; //Q(6,6)

function distanciaEntreDoisPontos(A, B)
{
	return Math.sqrt(Math.pow( (A.x - B.x),2) + Math.pow( (A.y - B.y),2) );
}

var raio = distanciaEntreDoisPontos(C, P);

//Exibe na tela:
console.log("P(" + P.x + "," + P.y + ")");
console.log("C(" + C.x + "," +C.y + ")");
console.log("Q(" + Q.x + "," + Q.y + ")");

console.log("\nCP = raio = " + raio);

console.log("CQ = " + distanciaEntreDoisPontos(C, Q));

if(distanciaEntreDoisPontos(C, Q) <= raio)
	console.log("\nQ está no raio ou faz parte da circunferência.");
else
	console.log("\nQ não está no raio e nem faz parte da circunferência.");

//Pastebin - Título:
//VerificacaoPontoEmRaioDeCircunferenciaOuNaMesma - NodeJS
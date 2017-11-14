
function calcula(){

	function calculaX1 () {
		var LL = document.getElementById("LL").value;
			LL = LL.toString().replace('.','');
			LL = LL.toString().replace('.','');
			LL = LL.toString().replace('.','');
			LL = LL.replace(',','.');

		var PL = document.getElementById("PL").value;
			PL = PL.toString().replace('.','');
			PL = PL.toString().replace('.','');
			PL = PL.toString().replace('.','');
			PL = PL.replace(',','.');

		var xx1 = LL/PL;
		var x1 = xx1*0.05;

		return x1;

	}

	function calculaX2 (){
		var AC = document.getElementById("AC").value;
			AC = AC.toString().replace('.','');
			AC = AC.toString().replace('.','');
			AC = AC.toString().replace('.','');
			AC = AC.replace(',','.');

		var RLP = document.getElementById("RLP").value;
			RLP = RLP.toString().replace('.','');
			RLP = RLP.toString().replace('.','');
			RLP = RLP.toString().replace('.','');
			RLP = RLP.replace(',','.');			

		var PC = document.getElementById("PC").value;
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.replace(',','.');

		var PNC = document.getElementById("PNC").value;
			PNC = PNC.toString().replace('.','');
			PNC = PNC.toString().replace('.','');
			PNC = PNC.toString().replace('.','');
			PNC = PNC.replace(',','.');					

		var xx2 = parseInt(AC) + parseInt(RLP);
		var PE =  parseInt(PC) + parseInt(PNC);
		var x2 = ((xx2/PE)*1.65);
		//console.log(x2);

		return x2;
	}

	function calculaX3 () {
		var AC = document.getElementById("AC").value;
			AC = AC.toString().replace('.','');
			AC = AC.toString().replace('.','');
			AC = AC.toString().replace('.','');
			AC = AC.replace(',','.');


		var ESTOQUE = document.getElementById("ESTOQUE").value;
			ESTOQUE = ESTOQUE.toString().replace('.','');
			ESTOQUE = ESTOQUE.toString().replace('.','');
			ESTOQUE = ESTOQUE.toString().replace('.','');
			ESTOQUE = ESTOQUE.replace(',','.');

		var PC = document.getElementById("PC").value;
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.replace(',','.');

		var xx3 = AC-ESTOQUE;
		var	x3 = ((xx3/PC)*3.55);
		//console.log(x3);

		return x3;
	}

	function calculaX4 () {
		var AC = document.getElementById("AC").value;
			AC = AC.toString().replace('.','');
			AC = AC.toString().replace('.','');
			AC = AC.toString().replace('.','');
			AC = AC.replace(',','.');

		var PC = document.getElementById("PC").value;
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.replace(',','.');

		var x4 = ((AC/PC)*1.06);

		//console.log(x4);
		return x4;
	}

	function calculaX5 () {
		var PNC = document.getElementById("PNC").value;
			PNC = PNC.toString().replace('.','');
			PNC = PNC.toString().replace('.','');
			PNC = PNC.toString().replace('.','');
			PNC = PNC.replace(',','.');

		var PL = document.getElementById("PL").value;
			PL = PL.toString().replace('.','');
			PL = PL.toString().replace('.','');
			PL = PL.toString().replace('.','');
			PL = PL.replace(',','.');

		var PC = document.getElementById("PC").value;
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.toString().replace('.','');
			PC = PC.replace(',','.');

		var PNC = document.getElementById("PNC").value;
			PNC = PNC.toString().replace('.','');
			PNC = PNC.toString().replace('.','');
			PNC = PNC.toString().replace('.','');
			PNC = PNC.replace(',','.');	


		var ET =  parseInt(PC) + parseInt(PNC);
		var x5 = ((ET/PL)*0.33); 

		//console.log(x5);
		return x5;

	}

	KNT = calculaX1()+calculaX2()+calculaX3()
	KNT = KNT - calculaX4();
	KNT = KNT - calculaX5();
	
console.log(KNT);

}

/*
KNT = 0,05*1 + 1,65*2 + 3,55*3 - 1,06*4 - 0,33*5

X1 = LL/PL

X2 = (AC+RLP)/PC

X3 = (AC-Estoque)/PNC

X4 = AC/PNC

X5 = ET(PNC)/PL


PNC+PÑC = PC = dividas
PNC = ET = PE =  Dividas


Escala de kanitz
Solvente > 0
Indefinida = 0 até (-3)
Insolvente <  3 
*/
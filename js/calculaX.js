
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

		var x1 = LL/PL;
		console.log(x1);
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

		var PE = document.getElementById("PE").value;
			PE = PE.toString().replace('.','');
			PE = PE.toString().replace('.','');
			PE = PE.toString().replace('.','');
			PE = PE.replace(',','.');				

		var x2 = AC + RLP;
			x2 = x2/PE;
		console.log(x2);
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

		var x3 = AC-ESTOQUE;
			x3 = x3/PC;
		console.log(x3);

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

		var x4 = AC/PC;

		console.log(x4);
	}

	function calculaX5 () {
		
	}

calculaX1();
calculaX2();
calculaX3();
calculaX4();

}

/*
KNT = 0,05*1 + 1,65*2 + 3,55*3 - 1,06*4 - 0,33*5

X1 = LL/PL

X2 = (AC+RLP)/PE

X3 = (AC-Estoque)/PC

X4 = AC/PC

X5 = ET/PL


Escala de kanitz
Solvente > 0
Indefinida = 0 até (-3)
Insolvente <  3 
*/
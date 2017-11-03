
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

	}

calculaX1();

}
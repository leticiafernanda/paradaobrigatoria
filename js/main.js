/*Aqui é onde que funciona a parte do back do sistema, ou seja, vai pega o formulário do sisteminha*/
document.getElementById('formulario').addEventListener('submit', cadastrar);

function cadastrar(e){
	
	var modelo = document.getElementById('modelo').value;
	var placa = document.getElementById('placa').value;
	var responsavel = document.getElementById('responsavel').value;
	var horaEntrada = new Date();
	if(!modelo && !placa){ /*fazendo a verificação*/
		
		alert("Por favor, preencha todos os campos!");
		return false;
	} 
//atributos
	var veiculo = {
		modelo: modelo,
		placa: placa,
		responsavel: responsavel,
		hora: horaEntrada.getHours(),
		minutos: horaEntrada.getMinutes()
	};

	if(localStorage.getItem('estacionamento2') === null){
		var veiculos = [];
		veiculos.push(veiculo);
		localStorage.setItem('estacionamento2', JSON.stringify(veiculos));
	} else {
		var veiculos = JSON.parse(localStorage.getItem('estacionamento2'));
		veiculos.push(veiculo);
		localStorage.setItem('estacionamento2', JSON.stringify(veiculos));
	}

	document.getElementById('formulario').reset();

	mostra();

	e.preventDefault();
}

function remove(placa){
	var estacionamento = JSON.parse(localStorage.getItem('estacionamento2'));
	console.log(estacionamento);

	 for(var i = 0 ; i < estacionamento.length; i++){
		if(estacionamento[i].placa == placa){
			estacionamento.splice(i, 1);
		}
	}

	localStorage.setItem('estacionamento', JSON.stringify(estacionamento));

	mostra();
}

function mostra(){
	var veiculos = JSON.parse(localStorage.getItem('estacionamento2'));
	var Resultado = document.getElementById('resultados');

	Resultado.innerHTML = '';

	for(var i = 0; i < veiculos.length; i++){
		var modelo = veiculos[i].modelo;
		var placa = veiculos[i].placa;
		var responsavel = veiculos[i].responsavel;
		var hora = veiculos[i].hora;
		var minutos = veiculos[i].minutos;
		 Resultado.innerHTML += '<tr><td>'+ modelo + '</td>'+
											'<td>'+ placa + '</td>' +
											'<td>'+ responsavel + '</td>' +
		 							 	  '<td>'+ hora + ':' + minutos + '</td>' +
		 							 	  '<td><button onclick="remove(\''+ placa +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}


														/*CÓDIGO PERTENCENTE A LETICIA FERNANDA*/
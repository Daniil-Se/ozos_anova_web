
$(document).ready(function() {

	$('#send-values-from-calc').submit(function(e) {
		e.preventDefault()
		let jsonObj = $(this).serializeArray()
		// console.log(jsonObj)
		$.ajax({
			type: "PUT",
			url: "/get_inputs_values",
			data: jsonObj,
			success: function (responce) {
				console.log(responce)
			},	
			error: function (responce) {
				console.log(responce)
			} 
		})
	})
	createInputs()
})


function createInputs() {
	let sizeConc = $('#sizeConc').val()
	let sizeQC = $('#sizeQC').val()
	let sizeN = $('#sizeN').val()

	$('#sizeConcVal').html(sizeConc)
	$('#sizeQCVal').html(sizeQC)
	$('#sizeNVal').html(sizeN)

	createConc(sizeConc)
	createQC(sizeQC)
	createN(sizeN)
}


function createConc(size) {
	let inputConc = ''
	for (let i=0;i<size;i++) { // цикл отрисует столько блоков сколько значений size
		inputConc += `<div class="conc-column">
					      <label>CONC<br><input type="text" name="ConcVal_${i+1}"></label>
					      <div class="qc-column"></div>
					  </div>`
	}
	$('.all-inputs').html(inputConc)	
}

function createQC(size) {
	let inputQC = ''
	for (let i=0;i<size;i++) { // цикл отрисует столько блоков сколько значений size
		inputQC += `<div class="qc">
					    <label>qc<br><input type="text" name="QCVal_${i+1}"></label>
					    <div class="n-column"></div>
					</div>`
	}
	$('.qc-column').html(inputQC) 
}

function createN(size) {
	let createN = ''
	for (let i=0;i<size;i++) { // цикл отрисует столько блоков сколько значений size
		createN += `<label>${i+1}<input type="text" name="nVal_${i+1}"></label>`
	}
	$('.n-column').html(createN)	
}
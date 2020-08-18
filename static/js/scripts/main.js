
$(document).ready(function() {

	$('#send-values-from-calc').submit(function(e) {
		e.preventDefault()
		// let jsonObj = $(this).serializeArray()
		let jsonObj = $(this).serializeArray()
		console.log(jsonObj)
		$.ajax({
			type: "POST",
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

	createConc(sizeConc, sizeQC, sizeN)
}


function createConc(sizeConc, sizeQC, sizeN) {
	/* функция отрисовывает поля для ввода CONC */
	let inputConc = ''
	for (let concNumCol=0;concNumCol<sizeConc;concNumCol++) { 
		let inputQC = createQC(sizeQC, sizeN, concNumCol)
		inputConc += `<div class="conc-column">
					      <label>CONC<br><input type="text" name="ConcVal_${concNumCol+1}"></label>
					      <div class="qc-column">${inputQC+1}</div>
					  </div>`
	}
	$('.all-inputs').html(inputConc)	
}

function createQC(sizeQC, sizeN, concNumCol) {
	/* функция отрисовывает поля для ввода QC */
	let inputQC = ''
	for (let QCNumCol=0;QCNumCol<sizeQC;QCNumCol++) { 
		let inputN = createN(sizeN, concNumCol, QCNumCol)
		inputQC += `<div class="qc">
					    <label>qc<br><input type="text" name="QCVal_${concNumCol+1}_${QCNumCol+1}"></label>
					    <div class="n-column">${inputN}</div>
					</div>`
	}
	return inputQC
}

function createN(sizeN, concNumCol, QCNumCol) {
	/* функция отрисовывает поля для ввода n */
	let createN = ''
	for (let n=0;n<sizeN;n++) { 
		createN += `<label>${n+1}<input type="text" name="nVal_${concNumCol+1}_${QCNumCol+1}_${n+1}"></label>`
	}
	return createN
}
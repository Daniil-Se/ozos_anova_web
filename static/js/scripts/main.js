
$(document).ready(function() {

	$('#send-values-from-calc').submit(function(e) {
		e.preventDefault()
		alert('submit')
	})

})

function sizeConc() {
	let size = $('#sizeConc').val()
	$('#sizeConcVal').html(size)
	createConc(size)
}

function sizeQC() {
	let size = $('#sizeQC').val()
	$('#sizeQCVal').html(size)
}

function sizeN() {
	let size = $('#sizeN').val()
	$('#sizeNVal').html(size)
}

function createConc(size) {
	let inputConc = ''
	for (let i=0;i<size;i++) {
		inputConc += `<div class="conc-column">
					      <label>CONC</label>
					      <input type="text" name="ConcVal">
					  </div>`
	}
	$('#send-values-from-calc').html(inputConc)
	$('.conc-column').css('width', `calc((100% / ${size}) - 100px`)
	// $('.conc-column label input').css('width', `calc(100% / ${size})`)
}


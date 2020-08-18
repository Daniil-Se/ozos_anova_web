from flask import Flask
from flask import render_template, request


app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/get_inputs_values', methods=['POST', 'PUT'])
def get_inputs_values():
	if request.method == "POST":
		print('Я получил POST')
	elif request.method == "PUT":
		print('Я получил PUT')	
	return {'status': 'success'}


if __name__ == "__main__":
	app.run(debug=True)    

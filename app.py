from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', page='home')

@app.route('/figures')
def figures():
    return render_template('index.html', page='figures')

@app.route('/gaming')
def gaming():
    return render_template('index.html', page='gaming')

@app.route('/about')
def about():
    return render_template('index.html', page='about')

if __name__ == '__main__':
    app.run(debug=True, port=8080)  # Changed to port 8080
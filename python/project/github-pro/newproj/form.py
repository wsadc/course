from flask import Flask, render_template, request, make_response
app = Flask(__name__)
@app.route('/')
def student():
    return render_template('login.html')


@app.route('/result', methods=['POST', 'GET'])
def result():
    if request.method == 'POST':
        result = request.form
        return render_template("result.html", result=result)


@app.route('/setcookie', methods=['POST', 'GET'])
def setcookie():
    if request.method == 'POST':
        user = request.form['nm']
        resp = make_response(render_template('readcookie.html'))
        resp.set_cookie('userID', user)

        return resp


@app.route('/getcookie')
def getcookie():
    name = request.cookies.get('userID')
    return '<h1>welcome +' + name + '+</h1>'


if __name__ == '__main__':
    app.run(debug=True)

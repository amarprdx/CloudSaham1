from bottle import *
import bottle
import os

application = default_app()

@route("/")
def home():
	return template("index.html")

@route("/BuyScanner")
def BuyScanner():
	return template("BuyScanner.html")

@route("/SellScanner")
def SellScanner():
	return template("SellScanner.html")

@route("/Subscribe")
def Subscribe():
	return template("Subscribe.html")

@route("/Login")
def Login():
	return template("Login.html")

@route('/favicon.ico')
def get_favicon():
	return server_static('/static/cloud.ico')

#specifying the path for the file
@route('/<filepath:path>')
@route('/BuyScanner/<filepath:path>')
@route('/SellScanner/<filepath:path>')
@route('/Subscribe/<filepath:path>')
@route('/Login/<filepath:path>')
def server_static(filepath):
	return static_file(filepath, root='./static/')

if __name__=='__main__':
	application.run(reloader=True, host="0.0.0.0", port=int(os.environ.get("PORT", 9541)))
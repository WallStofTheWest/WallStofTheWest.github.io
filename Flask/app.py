from flask import Flask, render_template, redirect,url_for, jsonify
import yony_sector_data


app = Flask(__name__)

@app.route("/")
def index():

    return render_template("index.html")


@app.route("/index.html")
def index_file():

    return render_template("index.html")
    
        
@app.route("/about.html")
def about():

    return render_template("about.html")

@app.route("/stocks.html")
def stocks():

    return render_template("stocks.html")


@app.route("/sector.html")
def sector():

    return render_template("sector.html")

@app.route("/services.html")
def services():

    return render_template("services.html")

@app.route("/yoy_route")
def yoy_routervices():
    to_return = yony_sector_data.yoy_method()
    # print(to_return)
    return jsonify(to_return)


if __name__ == "__main__":
    app.run(debug=True)

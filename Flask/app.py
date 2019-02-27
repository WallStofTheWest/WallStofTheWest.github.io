from flask import Flask, render_template, redirect,url_for, jsonify
import yony_sector_data
import sector_ranking


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


@app.route("/disclaimer.html")
def disclaimer():

    return render_template("disclaimer.html")
    

@app.route("/services.html")
def services():

    return render_template("services.html")

@app.route("/sector_yony_df_all")
def yoy_route():
    to_return = yony_sector_data.sector_yony_df_all()
    # print(to_return)
    return jsonify(to_return)


@app.route("/sector_yoy_top4")
def sector_ranking_top4():
    to_return = yony_sector_data.sector_yony_df_top4()
    # print(to_return)
    return jsonify(to_return)

@app.route("/sector_yoy_bot4")
def sector_ranking_bot4():
    to_return = yony_sector_data.sector_yony_df_bot4()
    # print(to_return)
    return jsonify(to_return)

@app.route("/sector_rank_all")
def sector_rank_all():
    to_return = sector_ranking.sector_ranking_all()
    # print(to_return)
    return jsonify(to_return)

@app.route("/sector_rank_filter")
def sector_rank_filter():
    to_return = sector_ranking.sector_ranking_filtered()
    # print(to_return)
    return jsonify(to_return)

if __name__ == "__main__":
    app.run(debug=True)

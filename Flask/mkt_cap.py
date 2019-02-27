#Dependencies
import requests
import json
import pandas as pd

# SQL Alchemy
from sqlalchemy import create_engine

# PyMySQL 
import pymysql
pymysql.install_as_MySQLdb()

# --------------------------------------------------------------------
# PURPOSE
# --------------------------------------------------------------------
# this script will be used to add market capitalization to stock database..
# using iex api - https://iextrading.com/developer/docs/

# --------------------------------------------------------------------
# ESTABLISH DATABASE CONNECTION USING VIV'S AWESOME CODE :)
# --------------------------------------------------------------------
host="stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com"

port=3306

dbname="stock_data"

user="ucbx"

password="Welcome123"

conn = pymysql.connect(host, user=user,port=port,

                          passwd=password, db=dbname)

# --------------------------------------------------------------------
# CREATE STOCK TICKER LIST
# --------------------------------------------------------------------

# read stock tickers into dataframe
tickers = pd.read_sql('select symbol\
                          from sandp_stocks;', 
                          con=conn)

# convert tickers df into list that can be used for IEX API call
tickers_list = tickers.values.tolist()

# our tickers_list returns a list of lists ([['MMM'], ['ABT'], ['ABBV']...) 
# so we need to unzip it into just a list of strings [('MMM', 'ABT', 'ABBV'....)
tickers_list = zip(*tickers_list)
tickers_list = list(tickers_list)
tickers_list = tickers_list[0]
print(tickers_list)

# --------------------------------------------------------------------
# IEX API CALL - https://api.iextrading.com/1.0/stock/aapl/stats
# --------------------------------------------------------------------

# --------------------------------------------------------------------
# TEST API RESPONSE
# --------------------------------------------------------------------
url = 'https://api.iextrading.com/1.0/stock/'

test_tick = 'CVX'

response = requests.get(f"{url}{test_tick}/stats").json()
# test to see if api call returns expected data (market capitalization)
print(response['marketcap'])

# tickers test list
#tickers_list_test = (tickers_list[0],tickers_list[1],tickers_list[2])


# create empty dictionary to hold stock ticker and market caps as key value pairs 
mkt_caps = {}

for tick in tickers_list:
    
    try:
           
    # define target url
            target_url = f"{url}{tick}/stats"
    
    # make api call to iex
            response = requests.get(target_url).json()
            mkt_cap = response['marketcap']
       
    # populate dictionary with ticker as key and market cap as value
            mkt_caps[tick] = {'market_cap_2019':mkt_cap}
            
        #    mkt_caps["mkt_cap"] = mkt_cap
    except json.decoder.JSONDecodeError:
            mkt_caps[tick] = {'market_cap_2019':"blank"}

print(mkt_caps)
#mkt_cap_df = pd.DataFrame.from_dict(mkt_caps, orient='index')
mkt_cap_df = pd.DataFrame(mkt_caps).T

mkt_cap_df

mkt_cap_df.to_csv('market_cap.csv')

















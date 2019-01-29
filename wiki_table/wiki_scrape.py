from splinter import Browser
import pandas as pd
from sqlalchemy import create_engine

rds_connection_string = "root:YOUR_MYSQL_PASSWORD_HERE@127.0.0.1/wiki_db"
engine = create_engine(f'mysql://{rds_connection_string}')

executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
browser = Browser("chrome", **executable_path, headless=False)

url = 'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies'
tables = pd.read_html(url, header = 0)
wiki_df = tables[1]
wiki_df.to_sql(name='wiki_db', con=engine, if_exists='append', index=False)
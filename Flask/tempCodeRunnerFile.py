# Import relevant packages
#Import Modules
import pandas as pd
from Config2 import pwd
from sqlalchemy import create_engine
import pymysql
import warnings
warnings.filterwarnings('ignore')

# setup pymysql and connect to local MySQL workbench
pymysql.install_as_MySQLdb() 
string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
engine = create_engine(string)
# Establish a connection to the local DB
conn = engine.connect()

yony_df = pd.read_sql('select * from stock_yony_return;', con=conn)
# group the data by gics_sector
yony_df_grouped = yony_df.groupby('gics_sector', as_index=False).mean()

yony_df_grouped_dict = yony_df_grouped.to_dict(orient='split')
print(yony_df_grouped_dict)

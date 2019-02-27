#Import Modules
import pandas as pd
from sqlalchemy import create_engine
import pymysql
import warnings
from Config import pwd 
warnings.filterwarnings('ignore')

# setup pymysql and connect to local MySQL workbench
pymysql.install_as_MySQLdb() 
string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
engine = create_engine(string)
# Establish a connection to the local DB
conn = engine.connect()

def sector_yony_df_all():
    # setup pymysql and connect to local MySQL workbench
    pymysql.install_as_MySQLdb() 
    string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
    engine = create_engine(string)
    # Establish a connection to the local DB
    conn = engine.connect()
    print("Query starting")
    sector_yony_df_all = pd.read_sql('select * from sector_yony_return;', con=conn)
    # group the data by gics_sector
    print("Query ended")

    sector_yony_df_all_dict = sector_yony_df_all.to_dict(orient='split')
    return sector_yony_df_all_dict

def sector_top_bot_calc ():
    # setup pymysql and connect to local MySQL workbench
    pymysql.install_as_MySQLdb() 
    string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
    engine = create_engine(string)
    # Establish a connection to the local DB
    conn = engine.connect()
    exclude_list =  ['FAANG','Real Estate','S&P']
    sector_yony_df = pd.read_sql('select * FROM sector_yony_return where gics_sector NOT in ' + str(tuple(exclude_list)), con=conn)
    # Ranking of sectors based on most consistent performance over last 20 years
    # get list of years for which rankings are required
    year_s = list(sector_yony_df.columns.values)
    year_s = year_s[1:]
    # define an empty rank dictionary
    rank = {}
    # for each year perform ranking
    for year in year_s:
    # create a filter and sort by descending value of year on year returns
        mylist = ['gics_sector',year]
        temporary_df = sector_yony_df[mylist].sort_values(by=[year],ascending=False).reset_index(drop=True)
    # use rank function to perform ranking of the sorted data
        temporary_df['rank'] = temporary_df[year].rank(ascending=0)
    #print (temporary_df)
    # for each sector in the dataframe, add the ranking info to a dictionary
    for sector in temporary_df['gics_sector']:
        # Create a filter to filter out the dataframe for each sector
        filter1 = (temporary_df['gics_sector'] == sector)
        temporary_df2 = temporary_df.loc[filter1].reset_index(drop=True)
        # if sector is already in dictionary then add the current rank to previous rank
        if sector in rank: 
            rank[sector] = rank[sector] + temporary_df2['rank']
        # if sector is NOT already in dictionary then add the sector to the dictionary along with its current rank
        else:
            rank[sector] = temporary_df2['rank']
    # convert the rank dictionary to a dataframe
    rank_df = pd.DataFrame.from_dict(rank)
    rank_df = rank_df.transpose()
    # sort the dataframe by ascending order of rank
    rank_df = rank_df.sort_values(by=[0],ascending=True)
    rank_df
    # pick the top 4 sectors
    rank_df_top = rank_df.iloc[0:4,:]
    #convert the top 4 sectors to a list
    top4_sectors = rank_df_top.index.tolist()
    rank_df_bottom =  rank_df.iloc[-4:]
    # pick the top 4 sectors
    rank_df_top = rank_df.iloc[0:4,:]
    #convert the top 4 sectors to a list
    top4_sectors = rank_df_top.index.tolist()
    rank_df_bottom =  rank_df.iloc[-4:]
    bottom4_sectors = rank_df_bottom.index.tolist()
    top_bot_list = [top4_sectors,bottom4_sectors]
    return top_bot_list
        

def sector_yony_df_top4():
    # setup pymysql and connect to local MySQL workbench
    pymysql.install_as_MySQLdb() 
    string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
    engine = create_engine(string)
    # Establish a connection to the local DB
    conn = engine.connect()
    top_bot_list  = sector_top_bot_calc()
    top4_sectors = top_bot_list[0]
    sector_yony_df_top4 = pd.read_sql('select * FROM sector_yony_return where gics_sector in ' + str(tuple(top4_sectors)), con=conn)
    sector_yony_df_top4_dict = sector_yony_df_top4.to_dict(orient='split')
    return sector_yony_df_top4_dict

def sector_yony_df_bot4():
        # setup pymysql and connect to local MySQL workbench
    pymysql.install_as_MySQLdb() 
    string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
    engine = create_engine(string)
    # Establish a connection to the local DB
    conn = engine.connect()
    top_bot_list  = sector_top_bot_calc()
    bottom4_sectors = top_bot_list[1]
    sector_yony_df_bot4 = pd.read_sql('select * FROM sector_yony_return where gics_sector in ' + str(tuple(bottom4_sectors)), con=conn)
    sector_yony_df_bot4_dict = sector_yony_df_bot4.to_dict(orient='split')
    return sector_yony_df_bot4_dict
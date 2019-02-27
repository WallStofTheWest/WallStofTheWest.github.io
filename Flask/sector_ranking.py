#Import Modules
import pandas as pd
from sqlalchemy import create_engine
import pymysql
import warnings
from Config import pwd 
warnings.filterwarnings('ignore')

def sector_ranking_all():
    # setup pymysql and connect to local MySQL workbench
    pymysql.install_as_MySQLdb() 
    string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
    engine = create_engine(string)
    # Establish a connection to the local DB
    conn = engine.connect()
    sector_yony_df_all = pd.read_sql('select * FROM sector_yony_return;', con=conn)
    sector_yony_df_all

    rank_all = {}
    # Ranking of sectors based on most consistent performance over last 20 years
    # get list of years for which rankings are required
    year_s = list(sector_yony_df_all.columns.values)
    year_s = year_s[1:]
    rank_one = []
    rank_two = []
    rank_three = []
    rank_four = []
    rank_five = []
    rank_six = []
    rank_seven = []
    rank_eight = []
    rank_nine = []
    rank_ten = []
    rank_eleven = []
    rank_twelve = []
    rank_thirteen = []

    # define an empty rank dictionary
    # for each year perform ranking
    for year in year_s:
        # create a filter and sort by descending value of year on year returns
        mylist = ['gics_sector',year]
        temporary_df = sector_yony_df_all[mylist].sort_values(by=[year],ascending=False).reset_index(drop=True)
        temporary_df.loc[temporary_df['gics_sector'] == 'Energy', 'gics_sector'] = 'ENRS'
        temporary_df.loc[temporary_df['gics_sector'] == 'Materials', 'gics_sector'] = 'MATR'
        temporary_df.loc[temporary_df['gics_sector'] == 'Utilities', 'gics_sector'] = 'UTIL'
        temporary_df.loc[temporary_df['gics_sector'] == 'Information Technology', 'gics_sector'] = 'INFT'
        temporary_df.loc[temporary_df['gics_sector'] == 'Consumer Staples', 'gics_sector'] = 'CONS'
        temporary_df.loc[temporary_df['gics_sector'] == 'Industrials', 'gics_sector'] = 'INDU'
        temporary_df.loc[temporary_df['gics_sector'] == 'Communication Services', 'gics_sector'] = 'TELS'
        temporary_df.loc[temporary_df['gics_sector'] == 'Health Care', 'gics_sector'] = 'HLTH'
        temporary_df.loc[temporary_df['gics_sector'] == 'Consumer Discretionary', 'gics_sector'] = 'COND'
        temporary_df.loc[temporary_df['gics_sector'] == 'Real Estate', 'gics_sector'] = 'REAL'
        temporary_df.loc[temporary_df['gics_sector'] == 'Financials', 'gics_sector'] = 'FINL'
        rank_one.append(temporary_df.iloc[0,0])
        rank_two.append(temporary_df.iloc[1,0])
        rank_three.append(temporary_df.iloc[2,0])
        rank_four.append(temporary_df.iloc[3,0])
        rank_five.append(temporary_df.iloc[4,0])
        rank_six.append(temporary_df.iloc[5,0])
        rank_seven.append(temporary_df.iloc[6,0])
        rank_eight.append(temporary_df.iloc[7,0])
        rank_nine.append(temporary_df.iloc[8,0])
        rank_ten.append(temporary_df.iloc[9,0])
        rank_eleven.append(temporary_df.iloc[10,0])
        rank_twelve.append(temporary_df.iloc[11,0])
        rank_thirteen.append(temporary_df.iloc[12,0])

    rank_all =  {
        1:rank_one,
        2:rank_two,
        3:rank_three,
        4:rank_four,
        5:rank_five,
        6:rank_six,
        7:rank_seven,
        8:rank_eight,
        9:rank_nine,
        10:rank_ten,
        11:rank_eleven,
        12:rank_twelve,
        13:rank_thirteen
    }

    return rank_all
	
def sector_ranking_filtered():
    # setup pymysql and connect to local MySQL workbench
    pymysql.install_as_MySQLdb() 
    string = f"mysql://ucbx:{pwd}@stock-data-analysis.ciuxgx1cjbsw.us-east-2.rds.amazonaws.com/stock_data"
    engine = create_engine(string)
    # Establish a connection to the local DB
    conn = engine.connect()
    rank_filtered = {}
    exclude_list =  ['FAANG','Real Estate']
    sector_df_excl_faang_rea = pd.read_sql('SELECT gics_sector,`2018`,`2017`,`2016`,`2015`,`2014`,`2013`,`2012`,`2011`,`2010`,`2009` FROM sector_yony_return where gics_sector NOT in ' + str(tuple(exclude_list)), con=conn)

    # Ranking of sectors based on most consistent performance over last 20 years
    # get list of years for which rankings are required
    year_s2 = list(sector_df_excl_faang_rea.columns.values)
    year_s2 = year_s2[1:]
    rank_one2 = []
    rank_two2 = []
    rank_three2 = []
    rank_four2 = []
    rank_five2 = []
    rank_six2 = []
    rank_seven2 = []
    rank_eight2 = []
    rank_nine2 = []
    rank_ten2 = []
    rank_eleven2 = []

    # define an empty rank dictionary
    # # for each year perform ranking
    for year in year_s2:
    #     # create a filter and sort by descending value of year on year returns
        mylist = ['gics_sector',year]
        temporary_df2 = sector_df_excl_faang_rea[mylist].sort_values(by=[year],ascending=False).reset_index(drop=True)
        #print(temporary_df)
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Energy', 'gics_sector'] = 'ENRS'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Materials', 'gics_sector'] = 'MATR'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Utilities', 'gics_sector'] = 'UTIL'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Information Technology', 'gics_sector'] = 'INFT'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Consumer Staples', 'gics_sector'] = 'CONS'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Industrials', 'gics_sector'] = 'INDU'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Communication Services', 'gics_sector'] = 'TELS'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Health Care', 'gics_sector'] = 'HLTH'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Consumer Discretionary', 'gics_sector'] = 'COND'
        temporary_df2.loc[temporary_df2['gics_sector'] == 'Financials', 'gics_sector'] = 'FINL'
        #print(temporary_df)
        rank_one2.append(temporary_df2.iloc[0,0])
        rank_two2.append(temporary_df2.iloc[1,0])
        rank_three2.append(temporary_df2.iloc[2,0])
        rank_four2.append(temporary_df2.iloc[3,0])
        rank_five2.append(temporary_df2.iloc[4,0])
        rank_six2.append(temporary_df2.iloc[5,0])
        rank_seven2.append(temporary_df2.iloc[6,0])
        rank_eight2.append(temporary_df2.iloc[7,0])
        rank_nine2.append(temporary_df2.iloc[8,0])
        rank_ten2.append(temporary_df2.iloc[9,0])
        rank_eleven2.append(temporary_df2.iloc[10,0])

        rank_filtered =  {
        1:rank_one2,
        2:rank_two2,
        3:rank_three2,
        4:rank_four2,
        5:rank_five2,
        6:rank_six2,
        7:rank_seven2,
        8:rank_eight2,
        9:rank_nine2,
        10:rank_ten2,
        11:rank_eleven2,
    }
    return rank_filtered
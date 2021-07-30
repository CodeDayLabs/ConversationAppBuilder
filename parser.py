"""
AppName#MyApp
query1#answer1
query2#answer2
query3#answer3
query4#answer1
query5#answer2
query6#answer3
"""

import mysql.connector

db = mysql.connector.connect(user='admin', password='wdzK7vbLU.7umqsp8LNRjFTTiWZ',
                              host='database.cwjfk5qid4yn.us-west-1.rds.amazonaws.com',
                              database='appbuilder')

cur = db.cursor(buffered=True)

flieName = 'data.txt';

my_list = [];

with open(flieName) as f:
    lines = f.readlines() 
    for line in lines:
        line = line.strip() 
        if line: 
            d = {} 
            data = [item.strip() for item in line.split('#')]
            d[data[0]] = data[1];

        my_list.append(d)

print(my_list);

sql1 = "INSERT INTO programs (app_name) VALUES (%s)"
val1 = (my_list[0]["AppName"],)
print(val1)
cur.execute(sql1, val1)
db.commit()

sql4 = "SELECT * FROM programs WHERE app_name = (%s)"
val4 = (my_list[0]["AppName"],)
cur.execute(sql4, val4)
program_id = cur.fetchone()

sql2 = "INSERT INTO user_queries (program_id, query_string) VALUES (%s, %s)"
for d in my_list:
    for key in d:
        if key == "AppName":
            continue
        else:
            val2 = (program_id[0], key)
            cur.execute(sql2, val2)
            db.commit()

sql3 = "INSERT INTO RESPONSE (user_query_ID, response_string) VALUES (%s, %s)"
sql5 = "SELECT * FROM user_queries WHERE query_string = %s"
for d in my_list:
    for key in d:
        if key == "AppName":
            continue
        else:
            val5 = (key,)
            cur.execute(sql5, val5)
            query_id = cur.fetchone()
            val3 = (query_id[0], d[key])
            cur.execute(sql3, val3)
            db.commit()

db.close()

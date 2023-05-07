import sqlite3

# Create a connection to the database
conn = sqlite3.connect('smart-brain.db')

# Create a cursor object
c = conn.cursor()

# Retrieve data from the 'users' table
c.execute("SELECT * FROM users")
users = c.fetchall()

# Print the data from the 'users' table
print("Users:")
for user in users:
    print(user)

# Retrieve data from the 'login' table
c.execute("SELECT * FROM login")
logins = c.fetchall()

# Print the data from the 'login' table
print("Logins:")
for login in logins:
    print(login)
    
# Close the connection
conn.close()
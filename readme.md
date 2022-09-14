This project uses the following

1) node js
2) mysql


1) Common Error with Authentication!!
Use following solution

1596

Execute the following query in MYSQL Workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:

flush privileges;

Try connecting using node after you do so.

If that doesn't work, try it without @'localhost' part.

2) Cannot dind .env

Conclusion #
To solve the error "Cannot find module 'dotenv'", make sure to install the dotenv package by 
opening your terminal in your project's root directory and running the following command: 
npm install dotenv and restart your IDE and development server.
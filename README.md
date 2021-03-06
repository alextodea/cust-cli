A command line interface application that enables users to sign up, log in, as well as performing various REST operations. The application is built using Node.js and MongoDB.

The user can perform the following operations:

- Register: register <username> <password>
- Log in: login <username> <password>
- Log out: logout
- Add new customer: new <name> <email> <phone>
- List all customers: list
- Search for customers: search <string>

Steps for setting up the project:

Open a shell and CD to the project's folder.

1. Add your own .env file with the variable DB_URL = *********************
2. Run "npm install"
3. Run "npm link" so that you can access the app be simply typing cust-cli in the shell. The executable expects a path to a javascript file to execute, and the location changes depending on where everyone stores the project on their file system.
4. Run server typing "npm run devstart" in the shell. 

Example of registring a user: Open GIT console, and type: "cust-cli register john myPasswordQwerty".
  
The CLI application is built using the MVC design pattern and imitates a web application. I have used routes for different API endpoints, and in order to protect routes, a json file containing a proof of token is created on the "client" side (imitating the web flow).

As a database, I have used the remote sandbox MongoDB from mlab.com.

A user can manipulate "customer" REST operations only after he/she is registered and then logged in the system.

The .env file is not commited, and therefore one would have to add their own file, containing their database url.

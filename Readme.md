# Setup the MERN stack on your local machine

1. Download nodejs version 16.16.0 and npm version 8.11.0
   - Copy and paste the above statement to google

2. Download vscode

3. Download git

4. Open repository in vscode
   - On gitlab repo page, click the clone drop down button
   - down under "open in your IDE", click Visual Studio Code. Choose (SSH) or (HTTP), no difference

5. Navigate to fronend directory, and type in the terminal this command line to run the react app "npm start"
   - ctrl-` to open the terminal
   - cd frontend
   - npm install
   - npm start
   - chrome should open to display our react app
   - ctrl-c to stop the app from running

6. Navigate to backend directory, and type in the terminal this command line to run the server and database "npm start"
   - ctrl-` to open the terminal
   - cd backend
   - npm install
   - npm start
   - the console will print "server is listening on port 8080/n DB connected"
   - ctrl-c to stop the app from running

7. Create your own git/gitlab branch
   - in you terminal, make sure you are in the project directory (utradeu)
   - type in the command "git checkout -b nameofyourbranch", this will create the branch and switch to it
   - connect your local branch to gitlab branch by typing this command "git push -u origin nameofyourbranch"

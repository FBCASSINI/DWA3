Dynamic Url Shortener by Flavio Cassini
---------Installation Instructions------------------
1. 1.) download the master copy or clone it in your github.
2.) if using a MacOS install homebrew by running this code into your terminal
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
3.) make new directory in terminal by running:  mkdir ~/.nvm    
4.) if you have homebrew installed. install nodejs by running in terminal: brew install nvm
5.) to see all versions of nvm run in terminal: nvm ls-remote    
6.) current version as of today of nvm is v7.4.0. in terminal run: nvm install v7.4.0   
7.) then cd to your directory where your working on the assignments
8.) to make node modules for the package.json in terminal run: npm init
9.) you will need express so in terminal run: npm install express --save  
10.) I recommend installing nodemon in terminal run: npm install -g nodemon    
11.) you will need body parser so in terminal run: npm install body-parser --save
12:) you will need to install mysql in terminal run: npm i --save mysql  
13.) you will need to install sequelize in terminal run: npm i --save sequelize
14.) you will need to install dotenv so run in terminal: npm install dotenv --save  
15.) make .env folder and place it in the root of Dynamic Url Shortener.    
16.) add this to .env file :
DB_NAME=
DB_USER=root
DB_PASS=
DB_HOST=localhost
DB_SCHEMA=mysql
DB_PORT=3306
17.) fill out database settings with your database settings for mysql.
18.) use postman to post data to database.
{
  "longurl": "google.com"
}

get generated code and launch in browser localhost:3000/launch/###GenCodeGoesHere###

it should bring you to http://www.google.com

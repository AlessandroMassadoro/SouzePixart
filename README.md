Riccardo Andrea Spinosa

Alessandro Massadoro



Hi everyone, you can find how to setup all files that you need for run SouzePixart on this GitHub page.

This project was developed as part of the course of study in Computer Science - University of Naples PARTHENOPE and concerns the creation of a web application aimed at simulate an e-commerce like, with some data taken from webscraping.




For run our project you must install:

- Nodejs, we use Nodejs for the backend of our web application

- Python, we use Python for generate APIs that allow us to take data from others site and show on our


For use our product you must have:

- Oracle Localhost Database, you can easy install it following officile site procedure: https://docs.oracle.com/en/database/oracle/oracle-database/21/xeinw/installation-guide.html#GUID-C3C5B05A-3BEB-4373-96D0-80BBADFBD6A4

Is important create the Database following the document 
- Db.pdf 

You can find it in Main branch here on GitHub

There you can find the Create Table and all the function and procedure that you need for have a working and safe Database.

For our app is really important the correct installation of python and of his library Flask, that's why you need to run a server for get the web scraping data. For this reason you need a local venv, we have already uploaded it on out GitHub, but you need to import all the library for runn the scripts you must run requirements.txt on Python that give you all the library that you need for run python. 

If you have some problem with it you can download the folder of all library from here: https://drive.google.com/drive/folders/1527ESLWQhxiA1uvS6bRaFK_eNLV3RMZh?usp=share_link



Is also important to have all the node_modules. you can find all the modules in this link:
- https://drive.google.com/drive/folders/1RcMuPUY3uMNFhISi5QMyTu8XuY-oFwmd?usp=share_link  


we used the link for more easy way to import it. 



1:

If you're on linux or mac write this command:

extend FLASK_APP=scraping.py

If you're on windows with cmd write this command:

set FLASK_APP=scraping.py

2:

No matter what system you're using now you just need to start flask, run this command:

flask run --host=127.0.0.1 --port=3000


Now you can run the app.js with the command: node app

After that all the site is working you can open localhost on your browser and enjoy our work,remember that this is just a prototipe and that we chose to don't develope some function, but all the project is free and open to use!

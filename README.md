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

For our app is really important the correct installation of python and of his library Flask, that's why you need to run a server for get the web scraping data. That's why we uploaded our venv directory at this link: https://drive.google.com/drive/folders/1-511e28Q9GTugzkz_y5iwMs4E9RJZMrp?usp=share_link
so that is easy to use and install.

If you're not downloading the venv make sure you install on your local python venv the requirement.txt that you can find in the Scripts folder



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

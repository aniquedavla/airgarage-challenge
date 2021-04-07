Setup for Lowest rated parking lots

Prereq
1. NodeJS (https://nodejs.org)
2. .ngrok (https://ngrok.com)
3. Clone master branch of repo https://github.com/aniquedavla/airgarage-challenge.git  

Run backend 
1. Cd airgarage-challenge/backend/
2. npm install 
3. Run node app.js from the terminal
4. Open a new terminal window and create a tunnel to localhost with ngrok
	- Run ./ngrok http 3000 
5. Copy one of the public facing urls that create the tunnel to localhost (Will copy this into frontend codebase later)

Run Frontend
1. Cd airgarage-challenge/parking-lots-frontend
2. npm install 
3. Open parking-lots-frontend/src/MainApp.js
4. Paste copied public tunnel url from step 5 of backend setup on line 26 of MainApp.js
5. Save 
6. Go to localhost or the public tunnel url and test app. 


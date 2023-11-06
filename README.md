# PDF WIZ
## Documentaion
### 1. Clone frontend
```
git clone https://github.com/mishalp/pdf-wiz-forntend.git
cd pdf-wiz-frontend
```
### 2. Create `.env` file with the following field(s)
```
VITE_SERVER = "http://localhost:3000/api"
```
### 3. Install dependencies
```
npm i
```
### 4. Start the dev server
```
npm run dev
```
### 5. Go back and clone the backend
```
cd ..
git clone https://github.com/mishalp/pdf-wiz-backend.git
cd pdf-wiz-backend
```
### 6. Create `.env` file with the following field(s)
```
MONGO = <MONGO_DB_URI>
SERVER = "http://localhost:3000"
SECRET = "hello"
```
### 7. Install dependencies
```
npm i
```
### 8. Start the server
```
npm start
```
App is running at: http://localhost:5173

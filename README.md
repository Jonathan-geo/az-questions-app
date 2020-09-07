# AZURE-QUESTIONS-APP

## Versão 1.0

### Roteiro de Implementação

> npm init
> npm install --save express
> npm install --save password-generator (Utilizado apena para teste)
> npm uninstall -S password-generator
> npm install --save-dev nodemon

#### Config Scripts

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
},

#### Create Index.js

Index.js is a server file, thats run in http://localhost:5000

#### Teste API

API runs in http://localhost:5000/api/passwords



## Versão 2.0

#### React App

> npx create-react-app client

#### Config Proxy

Add "proxy": "http://localhost:5000" in package.json in client directory.
This goes in client/package.json, not in the Express app’s package.json

Like this: 

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:5000"
}

```





#### References 
```javaScript
{
    "https://daveceddia.com/deploy-react-express-app-heroku/"
    "https://github.com/dceddia/rando"
}
```
const PROD = "string de conexão prod"
const DEV = "string de conexão dev"

if(process.env.NODE_ENV == "production"){
    /*
        DATA-BASE (PROD)
    */
    module.exports = {mongoURI: PROD}
}else{
    /*
        DATA-BASE (DEV)
    */
    module.exports = {mongoURI: DEV}
}

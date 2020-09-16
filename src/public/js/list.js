function showResponse(res){
    document.querySelector('#mensagem').innerHTML = `
        <pre id="remove">
            ${JSON.stringify(res.data,null,'\t')}
        </pre>
    `
}

function showResponse2(res){
    document.querySelector('#mensagem2').innerHTML = `
        <pre id="remove">
            ${JSON.stringify(res.data,null,'\t')}
        </pre>
    `
}




function get(){
    axios.get("#")
        .then(res =>showResponse(res))
}


function getName(){
    var nome = document.querySelector('#nome').value;

    axios.get("#"+nome)
        .then(res =>showResponse2(res))
        
}



function limpar(){
    document.getElementById("mensagem").outerHTML = "";
    document.getElementById("mensagem2").outerHTML = "";
}
const digitos = document.getElementById("id-input-digitos")
const resposta = document.getElementById("id-input-digitos-resposta")

digitos.addEventListener('keypress', function(e) { 
    if(!(e.key == 1 || e.key == 0)){
        e.target.setCustomValidity("Aceita somente 0 ou 1");
        e.preventDefault()
    }else{
        e.target.setCustomValidity("");
    }
});
digitos.addEventListener('keyup', function(e) { 
    resposta.value = convarter_dec(e.target.value)
});
  
digitos.addEventListener('blur',(e)=>{
    resposta.value = convarter_dec(e.target.value)
})


function convarter_dec(num_bin){
    let decimal = 0

    //for(let i=num_bin.length-1;i>=0;i--){ 
    for(let i=0;i<num_bin.length;i++){
        //Math.pow(base, expoente)
        console.log(">:",Math.pow(2,i))
        
        decimal += Number(num_bin[i])*Math.pow(2,i)
    }

    //let soma = num_bin.split('').reduce((x,ac,ind)=>{
    //    console.log('i',ind)
    //    return Number(x) + Number(ac)
    //})

    return decimal
}
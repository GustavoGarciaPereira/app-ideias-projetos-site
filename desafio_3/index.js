const operacoes = {
    'x':(numero_um,numero_dois)=>{
        document.querySelector(".input").value += ` = ${numero_um*numero_dois}`
    },
    '+':(numero_um,numero_dois)=>{
        document.querySelector(".input").value += ` = ${numero_um+numero_dois}`
    }
}

document.addEventListener('click',(e)=>{
    //caractere mais na regex
    var regex = /x/;
    //console.log("gustavo clikou",e.target.id)

    if (e.target.innerText === '='){
        
        var t = document.querySelector(".input").value
        console.log("sss",t)
        var y = t.split(regex)
        console.log(regex.exec(document.querySelector(".input").value))
        var r = operacoes[`${regex.exec(document.querySelector(".input").value)[0]}`]
        console.log(r(y[0],y[1]))
        

    }else{
        document.querySelector(".input").value +=e.target.innerText;
    }

})


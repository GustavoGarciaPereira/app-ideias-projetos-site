const articleImgs = document.querySelectorAll('.input');
articleImgs.forEach((x)=>{
    x.addEventListener('blur',(e)=>{
        console.log(formatar_texto(e.target.id))
        document.getElementById("rcorners1").style.borderRadius=formatar_texto(e.target.id)
    })
})

function formatar_texto(c){

resultado = `
    ${c.id == 'id-input-digitos1' ? c.value : document.getElementById('id-input-digitos1').value}px
    ${c.id == 'id-input-digitos2' ? c.value : document.getElementById('id-input-digitos2').value}px
    ${c.id == 'id-input-digitos4' ? c.value : document.getElementById('id-input-digitos4').value}px
    ${c.id == 'id-input-digitos3' ? c.value : document.getElementById('id-input-digitos3').value}px
    `

    document.getElementById('id-input-resultado').value = resultado
    return resultado
}


function funcaoCopiar() {
    /* Get the text field */
    var copyText = document.getElementById("id-input-resultado");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Testo copiado: " + copyText.value);
  } 
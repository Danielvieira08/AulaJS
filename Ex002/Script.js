function  carregar() {
var msg = window.document.getElementById ('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours ()
msg.innerHTML = `Agora são ${hora} horas!`
if ( hora >= 0 && hora < 12) {
    //bom dia
   img.src = "foto.manha.jpg"
   document.body.style.background = '#DBB520'
}else if (hora >= 12 && hora <= 18 ) {
    //boa tarde
    img.src = "foto.tarde.jpg"
    document.body.style.background = '#5C311C'
}else {
   img.src = "foto.noite.jpg"
   document.body.style.background = '#5C5954'
}
}

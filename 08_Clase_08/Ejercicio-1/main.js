function gps100km() {
    document.querySelector("#id-100km").style = "visibility: visible";
    document.querySelector("#id-50km").style.display = "none";
    document.querySelector("#id-15km").style.display = "none";
    document.querySelector("#id-0km").style.display = "none";
}
function gps50km() {
    document.querySelector("#id-50km").style = "visibility: visible";
    document.querySelector("#id-100km").style.display = "none";
    document.querySelector("#id-15km").style.display = "none";
    document.querySelector("#id-0km").style.display = "none";
}
function gps15km() {
    document.querySelector("#id-15km").style = "visibility: visible";
    document.querySelector("#id-50km").style.display = "none";
    document.querySelector("#id-100km").style.display = "none";
    document.querySelector("#id-0km").style.display = "none";
}
function gps0km() {
    document.querySelector("#id-0km").style = "visibility: visible";
    document.querySelector("#id-50km").style.display = "none";
    document.querySelector("#id-15km").style.display = "none";
    document.querySelector("#id-100km").style.display = "none";
}
function botonCerrar() {
    document.querySelector("#div-body").style.display = "none";
    document.querySelector("#div-llegada").style = "display: flex";
    document.body.style = "background-image: url(/JavaScript/08_Clase_08/Ejercicio-1/Img/tarragona-fondo.jpg); background-repeat: no-repeat; background-size: cover;";
}

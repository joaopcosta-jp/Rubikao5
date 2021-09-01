//alert('Este é um projeto em desenvolvimento')
function calcular() {
    var tempo1 = document.getElementById('tempo1')
    var tempo2 = document.getElementById('tempo2')
    var tempo3 = document.getElementById('tempo3')
    var tempo4 = document.getElementById('tempo4')
    var tempo5 = document.getElementById('tempo5')
    var res = document.getElementById('res')
    var n1 = Number(tempo1.value)
    var n2 = Number(tempo2.value)
    var n3 = Number(tempo3.value)
    var n4 = Number(tempo4.value)
    var n5 = Number(tempo5.value)
    var s = (n1 + n2 + n3 + n4 + n5) / 5
    res.innerHTML = `A sua media foi:${s}`
}
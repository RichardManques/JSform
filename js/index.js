var bt = document.getElementById("bt");
var bt2 = document.getElementById("btsum");
var bt3 = document.getElementById("bt3");
var tbody = document.getElementById("tbody");




bt.addEventListener("click",function(){//o ("click",()=>{})
    var txt = document.getElementById("txt");
    var res = document.getElementById("res");
    if(txt.value==""){
        alert("Enter your name");
        txt.focus();//sirve para limpiar el campo de texto y volver a escribir sin tener que borrar lo escrito anteriormente
    }else{
        //alert("Hi "+txt.value);
        txt.style.color="red";
        res.innerHTML+="Hi "+txt.value+"<br>";//escribir directamente en el parrafo y en la pagina
        txt.value="";
        txt.focus();
    }
});

bt2.addEventListener("click",function(){
    var txt1 = document.getElementById("n1");
    var txt2 = document.getElementById("n2");
    var res2 = document.getElementById("res2");

    var suma = parseInt(txt1.value) + parseInt(txt2.value);
    
    if(isNaN(suma)){
        alert("Error");
        res.innerHTML="Hubo un problema con los valores :(";
    }else{
        res2.innerHTML = "Suma :" + suma;
    }
});

bt3.addEventListener("click",function(){
    //llamar a la funcion
    tbody.innerHTML="";//limpiando el tbody y que no sea llamado mas de una vez
    loadPaises();
});
function loadPaises(){
    var paises = ['Chile','Argentina','Peru','Colombia','Ecuador']

    paises.forEach((item) => {
        var fila = tbody.insertRow();
        var celda = fila.insertCell();
        celda.innerHTML = item;
        tbody.append(fila);
    });
}


window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    //Circulo...
    context.fillStyle = "white";
    context.beginPath();
    context.arc(300, 250, 200, 0, Math.PI * 2);
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "black";

   

    context.beginPath();
    context.fillStyle = "green";
    context.moveTo(460, 370);
    context.lineTo(350, 250);//cuadrante 3
    context.lineTo(300, 50);// punta superior
    context.lineTo(250, 250);// punta derecha
    context.lineTo(300, 185);
    context.lineTo(140, 370);//punta inf izquierda
    context.lineTo(300, 300);
    context.lineWidth = 2;
    context.fill();


  
    //Fin de las líneas Guía...

    //Crear el símbolo de Mercedes-Benz,
    //haciendo uso de lineTo();
    //Para establecer el relleno de la figura se hace uso de context.fill(),
    //Para cambiar el color de relleno se ha ce uso de context.fillStyle = "black";
    //Para dar color a una línea se hace uso de context.strokeStyle = color;
    //Para mostrar la línea se hace uso de context.stroke(), si no se establece, no se moestrará línea...

    context.font = "65px times new roman";
    context.fillText("Mercedes-Benz", 100, 530);
};

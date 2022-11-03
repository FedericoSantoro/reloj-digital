(function () {

    var actualizarHora = function () {
        var fecha = new Date(),
            dia = fecha.getDate(),
            diaSemana = fecha.getDay(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear(),
            hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            ampm;

        var pHoras = document.getElementById("horas"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pAMPM = document.getElementById("ampm"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        var semana = ["Domingo", "Lunes", "martes", "Miercoles", "Jueves","Viernes", "Sabado", "Domingo"],
            meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pYear.textContent = year;
        if ( hora >12 ) {
            hora = hora-12;
            ampm = "PM";
        }
        else {
            ampm = "AM";
        }
        if ( hora == 0 ) {
            hora = 12;
        }
        if ( minutos <10 ) {
            minutos = "0" + minutos;
        }
        if ( segundos <10 ) {
            segundos = "0" + segundos;
        }
        pHoras.textContent = hora;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        pAMPM.textContent = ampm;
    }
    var intervalo = setInterval(actualizarHora, 1000);
}())
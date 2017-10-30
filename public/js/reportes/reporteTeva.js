window.onload=function() {

    var Titulos = ["SELL IN", "SELL OUT", "STOCK FIN DE MES", "DOH FIN DE MES"];
    var valoresExcel = [
                        [300, 305, 340, 350, 325, 330, 400],
                        [200, 300, 250, 300, 270, 310, 345],
                        [250, 255, 345, 395, 450, 470, 525],
                        [34, 35, 40, 42, 39, 42, 40]
    ]
    var xAxisTitulos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];

    crearTabla(Titulos, valoresExcel,xAxisTitulos);

    generarGrafico(Titulos[0], valoresExcel[0], document.getElementById("chart-area1"),xAxisTitulos,"Meses");
    generarGrafico(Titulos[1], valoresExcel[1], document.getElementById("chart-area2"),xAxisTitulos,"Meses");
    generarGrafico(Titulos[2], valoresExcel[2], document.getElementById("chart-area3"),xAxisTitulos,"Meses");
    generarGrafico(Titulos[3], valoresExcel[3], document.getElementById("chart-area4"),xAxisTitulos,"Meses");
    generarGraficoMultipleDatasets(Titulos, valoresExcel, document.getElementById("chart-area0"),xAxisTitulos,"Meses");


}
document.getElementById("btnDaily").onclick=function(){

  var Titulos = ["SELL IN", "SELL OUT", "STOCK DIARIO", "DOH DIARIO"];
  var valoresExcel = [
                      [30, 20, 22, 30, 35, 18, 25],
                      [22, 10, 28, 33, 35, 20, 38],
                      [20, 15, 15, 25, 10, 12, 8],
                      [10, 20, 5, 10, 15, 8, 20]
  ]
  var xAxisTitulos = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

  crearTabla(Titulos, valoresExcel,xAxisTitulos);

  generarGrafico(Titulos[0], valoresExcel[0], document.getElementById("chart-area1"),xAxisTitulos,"Dias");
  generarGrafico(Titulos[1], valoresExcel[1], document.getElementById("chart-area2"),xAxisTitulos,"Dias");
  generarGrafico(Titulos[2], valoresExcel[2], document.getElementById("chart-area3"),xAxisTitulos,"Dias");
  generarGrafico(Titulos[3], valoresExcel[3], document.getElementById("chart-area4"),xAxisTitulos,"Dias");
  generarGraficoMultipleDatasets(Titulos, valoresExcel, document.getElementById("chart-area0"),xAxisTitulos,"Dias");


}
document.getElementById("btnMonthly").onclick=function(){
  var Titulos = ["SELL IN", "SELL OUT", "STOCK FIN DE MES", "DOH FIN DE MES"];
  var valoresExcel = [
                      [300, 305, 340, 350, 325, 330, 400],
                      [200, 300, 250, 300, 270, 310, 345],
                      [250, 255, 345, 395, 450, 470, 525],
                      [34, 35, 40, 42, 39, 42, 40]
  ]
  var xAxisTitulos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];

  crearTabla(Titulos, valoresExcel,xAxisTitulos);

  generarGrafico(Titulos[0], valoresExcel[0], document.getElementById("chart-area1"),xAxisTitulos,"Meses");
  generarGrafico(Titulos[1], valoresExcel[1], document.getElementById("chart-area2"),xAxisTitulos,"Meses");
  generarGrafico(Titulos[2], valoresExcel[2], document.getElementById("chart-area3"),xAxisTitulos,"Meses");
  generarGrafico(Titulos[3], valoresExcel[3], document.getElementById("chart-area4"),xAxisTitulos,"Meses");
  generarGraficoMultipleDatasets(Titulos, valoresExcel, document.getElementById("chart-area0"),xAxisTitulos,"Meses");

}
document.getElementById("btnYearly").onclick=function(){
  var Titulos = ["SELL IN", "SELL OUT", "STOCK ANUAL", "DOH ANUAL"];
  var valoresExcel = [
                      [3400, 3500, 4000, 4200, 3900, 4200, 4000],
                      [2500, 2550, 3450, 3950, 4500, 4700, 5250],
                      [2000, 3000, 2500, 3000, 2700, 3100, 3450],
                      [300, 305, 340, 350, 325, 330, 400]

  ]
  var xAxisTitulos = ["2011", "2012", "2013", "2014", "2015", "2016", "2017"];

  crearTabla(Titulos, valoresExcel,xAxisTitulos);

  generarGrafico(Titulos[0], valoresExcel[0], document.getElementById("chart-area1"),xAxisTitulos,"Años");
  generarGrafico(Titulos[1], valoresExcel[1], document.getElementById("chart-area2"),xAxisTitulos,"Años");
  generarGrafico(Titulos[2], valoresExcel[2], document.getElementById("chart-area3"),xAxisTitulos,"Años");
  generarGrafico(Titulos[3], valoresExcel[3], document.getElementById("chart-area4"),xAxisTitulos,"Años");
  generarGraficoMultipleDatasets(Titulos, valoresExcel, document.getElementById("chart-area0"),xAxisTitulos,"Años");


}



function generarGrafico(titulo,valores,canvas,xAxisTitulos,xAxisDisplay) {


    var Meses = xAxisTitulos;
    var config = {
        type: 'line',
        data: {
            labels: Meses,
            datasets: [{
                label: titulo,
                backgroundColor: "blue",
                borderColor: "blue",
                data: valores,
                fill: false,
                lineTension: 0
            }]
        },
        options: {
            scaleOverride: true,
            scaleSteps: 100,
            scaleStepWidth: 5,
            scaleStartValue: 0,
            responsive: true,
            title: {
                display: true,
                text: titulo
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: xAxisDisplay
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valores'
                    }
                }]
            }
        }
    };

    var ctx = canvas.getContext("2d");
    window.myLine = new Chart(ctx, config);
}

function generarGraficoMultipleDatasets(titulo, valores, canvas,xAxisTitulos,xAxisDisplay) {
    var iCantidad = titulo.length, r, g, b, c,dataset=[];
    for (var i = 0; i < iCantidad; i++) {
        r = Math.floor(Math.random() * 200);
        g = Math.floor(Math.random() * 200);
        b = Math.floor(Math.random() * 200);
        c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        dataset.push({
            label: titulo[i],
            backgroundColor: c,
            borderColor: c,
            data: valores[i],
            fill: false,
            lineTension: 0
        });
    }

    var Meses = xAxisTitulos;
    var config = {
        type: 'line',
        data: {
            labels: Meses,
            datasets: dataset
        },
        options: {
            scaleOverride: true,
            scaleSteps: 100,
            scaleStepWidth: 5,
            scaleStartValue: 0,
            responsive: true,
            title: {
                display: true,
                text: titulo
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: xAxisDisplay
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valores'
                    }
                }]
            }
        }
    };

    var ctx = canvas.getContext("2d");
    window.myLine = new Chart(ctx, config);

}

function crearTabla(titulos, valoresExcel,xAxisTitulos) {
    var Meses = xAxisTitulos;
    var xContenido = "", iCantidad = Meses.length;

    xContenido += "<table class='pure-table'>";
    xContenido += "<thead>";
    xContenido += "<tr>";
    xContenido += "<th class='center col-3'>Unidades</th>";
    for (var i = 0; i < iCantidad; i++) {
        xContenido += "<th class='center col-3'>";
        xContenido += Meses[i];
        xContenido += "</th>";
    }
    xContenido += "</tr>";
    xContenido += "</thead>";
    xContenido += "<tbody>";
    iCantidad = titulos.length;
    for (var i = 0; i < iCantidad; i++) {
        xContenido += "<tr><td class='center col-3'>";
        xContenido += titulos[i];
        xContenido += "</td>";
        for (var j = 0, iCantData = Meses.length; j < iCantData; j++) {
            xContenido += "<td class='center col-3'>";
            xContenido += valoresExcel[i][j];
            xContenido += "</td>";
        }
        xContenido += "</tr>";
    }
    console.log(valoresExcel);
    xContenido += "</tbody>";
    xContenido += "</table>";
    document.getElementById("divRegistros").innerHTML = xContenido;
}

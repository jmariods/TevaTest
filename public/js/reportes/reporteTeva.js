window.onload = function () { 

    var Titulos = ["SELL IN", "SELL OUT", "STOCK FIN DE MES", "DOH FIN DE MES"];
    var valoresExcel = [
                        [300, 305, 340, 350, 325, 330, 400],
                        [200, 300, 250, 300, 270, 310, 345],
                        [250, 255, 345, 395, 450, 470, 525],
                        [34, 35, 40, 42, 39, 42, 40]
    ]

    crearTabla(Titulos, valoresExcel);

    generarGrafico(Titulos[0], valoresExcel[0], document.getElementById("chart-area1"));
    generarGrafico(Titulos[1], valoresExcel[1], document.getElementById("chart-area2"));
    generarGrafico(Titulos[2], valoresExcel[2], document.getElementById("chart-area3"));
    generarGrafico(Titulos[3], valoresExcel[3], document.getElementById("chart-area4"));
    generarGraficoMultipleDatasets(Titulos, valoresExcel, document.getElementById("chart-area0"));


}

function generarGrafico(titulo, valores, canvas) {


    var Meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];
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
                        labelString: 'Meses'
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

function generarGraficoMultipleDatasets(titulo, valores, canvas) {
    var iCantidad = titulo.length, r, g, b, c, dataset = [];
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

    var Meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];
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
                        labelString: 'Meses'
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

function crearTabla(titulos, valoresExcel) {
    var Meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];
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

let compareChartCTX = document.getElementById('compareChart').getContext('2d');

let coronaCasesData = JSON.parse('{"labels":["January","February","March","April","May","June","July"],"totalCases":[11950,86606,862714,3257170,6241654,10568939,13119239],"death":[259,2977,44226,235280,374516,508203,580339],"recovered":[0,42330,165443,1054140,2881252,5825254,7841591]}');

Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 14;

// get labels
let labelsData = coronaCasesData.labels;
// get totalCases
let totalCases = coronaCasesData.totalCases;
// get death
let death = coronaCasesData.death;
// get recovered
let recovered = coronaCasesData.recovered;

let totalCasesObject = {
    label: 'Total Cases',
    data: totalCases,
    borderColor: 'blue',
    fill: false
}
let deathObject = {
    label: 'Death',
    data: death,
    borderColor: 'red',
    fill: false
}
let recoveredObject = {
    label: 'Recovered',
    data: recovered,
    borderColor: 'green',
    fill: false
}

let compareChart = new Chart(compareChartCTX, {
    // type of chart
    type: 'line',
    data: {
        labels: labelsData,
        datasets:[
            totalCasesObject,
            deathObject,
            recoveredObject
        ]
    }
})
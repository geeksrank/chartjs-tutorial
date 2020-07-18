let worldWideCTX = document.getElementById('worldWideChart').getContext('2d');
let worldWideChart = new Chart(worldWideCTX, {
    // type of chart to be created
    type: 'bar',
    data: {
        labels: [
            'United States of America',
            'Brazil',
            'India',
            'Russian Federation',
            'Peru'
        ],
        datasets: [
            {
                label: 'Coronavirus Cases in Top 5 Country',
                data: [
                    3344783,
                    1884967,
                    936181,
                    746369,
                    330123
                ],
                backgroundColor: 'red',
                borderColor: 'yellow',
                fill: false
            }
        ],
        options: {}
    }
})
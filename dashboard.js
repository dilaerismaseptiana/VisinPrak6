google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = '1kh865J7uGpI_FglAOGmOFKGGZatCn6Cc5oi-0l_0vgE';
    var range = 'TS!A17:C20';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    var data = response.getDataTable();
    drawCharts(data);
}

function drawCharts(data) {
    var options = {
        title: 'Judul Grafik',
        width: 400,
        height: 300
    };

    var options1 = {
        title: 'Judul Grafik',
        width: 400,
        height: 300
    };

    var options2 = {
        title: 'Judul Grafik',
        width: 400,
        height: 300
    };

    var options3 = {
        title: 'Judul Grafik',
        width: 400,
        height: 300
    };

    var chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.AreaChart(document.getElementById('chart2'));
    chart2.draw(data, options1);

    var chart3 = new google.visualization.LineChart(document.getElementById('chart3'));
    chart3.draw(data, options2);

    var chart4 = new google.visualization.BarChart(document.getElementById('chart4'));
    chart4.draw(data, options3);

    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}

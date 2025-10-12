document.addEventListener('DOMContentLoaded', () => {
    const chartArea = document.getElementById('chart');
    const xAxis = document.getElementById('x-axis');
    const chartData = [42,85,53,0,85,73,53,100,42,66,42,53,85,73,88,53,0,42,53,46,85,92,92,53,42,53,33,0,53,85,73,66,53,33];
    const colors = ['var(--accent-primary)', 'var(--accent-green)', 'var(--accent-yellow)'];

    chartData.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value}%`;
        bar.style.backgroundColor = colors[index % 3];
        chartArea.appendChild(bar);

        const label = document.createElement('div');
        label.className = 'x-axis-label';
        label.textContent = index + 1;
        xAxis.appendChild(label);
    });

    const tableBody = document.querySelector('#results-table tbody');
    const tableData = [
        { name: 'Менеджмент. Тест номер 1: введение', scores: [95, 95, 95, 95, 95, 95, 95, 95, 95, 67], total: 40 },
        { name: 'Тест номер 1: введение в SMM и общие положения', scores: [100, 92, 100, 93, 67, 90, 86, 100, 100, 82], total: 40 },
        { name: 'Тест номер 1: введение в SMM и общие положения', scores: [67, 67, 67, 67, 100, 67, 67, 67, 67, 43], total: 59 },
        { name: 'Менеджмент. часть 1: введение', scores: [100, 100, 100, 100, 43, 100, 100, 91, 100, 100], total: 100 },
        { name: 'Тест номер 1: введение в SMM и общие положения', scores: [43, 43, 43, 43, 100, 45, 43, 43, 43, 65], total: 280 },
        { name: 'Тест номер 1: введение в SMM и общие положения', scores: [65, 65, 65, 65, 65, 65, 60, 65, 65, 95], total: 300 },
    ];

    function getScoreClass(score) {
        if (score >= 90) return 'score-green';
        if (score >= 60) return 'score-yellow';
        return 'score-pink';
    }

    tableData.forEach(rowData => {
        const row = document.createElement('tr');
        let cells = `<td>${rowData.name}</td>`;
        rowData.scores.forEach(score => {
            cells += `<td class="score-cell"><span class="score-box ${getScoreClass(score)}">${score}</span></td>`;
        });
        for (let i = rowData.scores.length; i < 11; i++) {
            cells += `<td></td>`;
        }
        cells += `<td class="score-cell"><strong>${rowData.total}</strong></td>`;
        row.innerHTML = cells;
        tableBody.appendChild(row);
    });
});

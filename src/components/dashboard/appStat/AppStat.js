import './style.scss'
import BarChart from '../../charts/BarChart'
import LineChart from '../../charts/LineChart'

function AppStat() {
    const barChartData = {
        labels: ['Chlef', 'Bel-3abas', 'Oran', 'Rilizane', 'Blida', 'Telemsan'],
        datasets: [
            {
                label: 'active users',
                data: [54, 79, 59, 63, 39, 67],
                backgroundColor: ['#9634', '#3844', '#4684', '#7474', '#9894', '#d734'],
                borderColor: ['#9639', '#3849', '#4689', '#7479', '#9849', '#d739'],
                borderWidth: 3,
                borderRadius: 3
            },
            {
                label: 'total users',
                data: [80, 92, 69, 73, 60, 85],
                backgroundColor: ['#9654', '#3864', '#46d4', '#7764', '#98f4', '#d754'],
                borderColor: ['#9659', '#3869', '#46d9', '#7769', '#98f9', '#d759'],
                borderWidth: 3,
                borderRadius: 3
            }
        ]
    }

    const lineChartData = {
        labels: [
            'Januray',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'Septemebr'
        ],
        datasets: [
            {
                label: 'Hours spent on the app',
                data: [34, 59, 39, 43, 19, 47, 23, 41, 29],
                borderColor: '#0974',
                backgroundColor: '#4f72',
                hoverBorderColor: '#5d75',
                fill: true,
                radius: 8,
                pointRadius: 6,
                pointHoverRadius: 10
            }
        ]
    }

    return (
        <div className="app-stat">
            <BarChart chartData={barChartData} />
            <LineChart chartData={lineChartData} />
        </div>
    )
}

export default AppStat

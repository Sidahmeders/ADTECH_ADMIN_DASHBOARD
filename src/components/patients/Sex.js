import DoughChart from '../charts/DoughChart'
import Title from './Title'

export default function Sex({ sex }) {
    const sexData = {
        labels: ['male', 'female'],
        datasets: [
            {
                backgroundColor: ['blue', 'pink'],
                data: [sex.male, sex.female]
            }
        ]
    }

    return (
        <div>
            <Title label="total patients" total={sex.female + sex.male} />
            <DoughChart chartData={sexData} />
        </div>
    )
}

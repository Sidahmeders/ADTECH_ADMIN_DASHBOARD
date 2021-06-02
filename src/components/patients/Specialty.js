import PieChart from '../charts/PieChart'
import Title from './Title'

const getSpecialtyData = (data) => {
    const labels = []
    const totals = []
    for (let entry in data) {
        labels.push(entry)
        totals.push(data[entry].total)
    }
    return {
        labels,
        totals
    }
}

export default function Specialties({ patients }) {
    const total = patients.total
    const specialties = patients.specialty

    const labels = getSpecialtyData(specialties).labels
    const data = getSpecialtyData(specialties).totals

    const specialtyData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: ['skyblue', 'blue', 'red', 'green', 'orange'],
                data: [...data]
            }
        ]
    }

    return (
        <div>
            <Title label="total records" total={total} />
            <PieChart chartData={specialtyData} />
        </div>
    )
}

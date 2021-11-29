import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function MotifDeConsultation({ motifConsultation }) {
    motifConsultation = {
        fonctionnele: 4,
        esthetique: 7,
        douleure: 16,
        autre: 12
    }

    const { labels, chartData, colors, total } = simpleHandler(motifConsultation)

    const motifDeConsultationData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="motif de consultation" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <DoughChart chartData={motifDeConsultationData} />
        </div>
    )
}

import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
// import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function ClassLimda({ calssificationLimda }) {
    // const { mandibule, maxillaire } = calssificationLimda
    let mandibule = { class1: 11, class2: 1, class3: 12, class4: 7, class5: 3, class6: 19 }
    let maxillaire = { class1: 16, class2: 11, class3: 2, class4: 7, class5: 8, class6: 11 }

    const mandibuleData = simpleHandler(mandibule)
    const maxillaireData = simpleHandler(maxillaire)

    let mand = mandibuleData.labels.map((label) => label + '_mand')
    let maxi = maxillaireData.labels.map((lable) => lable + '_maxi')

    const colors = [...mandibuleData.colors, ...maxillaireData.colors]
    const lables = [...mand, ...maxi]
    const MandFiller = [0, 0, 0]
    const MaxiFiller = [0, 0, 0, 0]

    const classLimdaData = {
        labels: lables,
        datasets: [
            {
                label: 'mandibule',
                backgroundColor: colors,
                data: [...mandibuleData.chartData, ...MandFiller]
            },
            {
                label: 'maxillaire',
                backgroundColor: colors,
                data: [...MaxiFiller, ...maxillaireData.chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="class limda" total={mandibuleData.total + maxillaireData.total} />
            {/* <Percentage labels={lables} data={data} colors={colors} /> */}
            <DoughChart chartData={classLimdaData} />
        </div>
    )
}

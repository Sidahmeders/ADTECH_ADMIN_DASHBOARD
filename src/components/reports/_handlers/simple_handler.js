export default function simpleHandler(object) {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0

    for (let entry in object) {
        let objectTotal = object[entry]
        chartData.push(objectTotal)
        total += objectTotal
        labels.push(entry)
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }

    return {
        labels,
        chartData,
        colors,
        total
    }
}

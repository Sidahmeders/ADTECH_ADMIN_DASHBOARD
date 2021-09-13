const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export default function getMonth(birthDate) {
    birthDate = birthDate ? birthDate.split('T')[0] : []
    const dateList = birthDate.split('-')
    const monthNumber = parseInt(dateList[1]) - 1

    const transformedDate = `${dateList[2]} ${months[monthNumber]} ${dateList[0]}`
    return transformedDate
}

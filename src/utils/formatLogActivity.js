import transformDate from './transformDate'

export default function getLogActivity(activityLogs) {
    const logLength = activityLogs.length
    let lastActivity = '####'

    if (logLength) {
        const lastActivityDate = activityLogs[logLength - 1]
        const lastLogday = transformDate(lastActivityDate)
        const lastLogHour = transformClockTime(lastActivityDate)
        lastActivity = `${lastLogHour} ${lastLogday}`
    }

    return lastActivity
}

function transformClockTime(time) {
    time = time.split('T')[1]
    let hour = time.split(':')[0]
    let minute = time.split(':')[1]
    let timeRange = hour > 0 && hour < 12 ? 'AM' : 'PM'

    return `${hour}:${minute}/${timeRange}`
}

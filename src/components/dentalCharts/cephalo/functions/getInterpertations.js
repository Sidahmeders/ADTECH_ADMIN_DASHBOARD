export default function getInterpertations(angleValue, targetAngle) {
    if (!angleValue || !targetAngle) {
        return '<-------------------------->'
    } else if (angleValue >= targetAngle.min && angleValue <= targetAngle.max) {
        return targetAngle.average
    } else if (angleValue >= targetAngle.max) {
        return targetAngle.high
    } else if (angleValue <= targetAngle.min) {
        return targetAngle.low
    }
}

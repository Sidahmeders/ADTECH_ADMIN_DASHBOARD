export default function getDifferenceBetweenTwoAngles(angleA, angleB) {
    let x = angleA - angleB
    x = ((x + 180) % 360) - 180
    return x
}

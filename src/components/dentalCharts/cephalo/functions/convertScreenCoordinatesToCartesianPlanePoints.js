export default function convertScreenCoordinatesToCartesianPlanePoints(
    originX,
    originY,
    x1,
    y1,
    x2,
    y2
) {
    const vectorA = [originX - x1, originY - y1]
    const vectorB = [originX - x2, originY - y2]

    return [...vectorA, ...vectorB]
}

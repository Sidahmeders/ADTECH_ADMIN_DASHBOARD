export default function getIntersectionOfTwoVectors(A_x, A_y, B_x, B_y, C_x, C_y, D_x, D_y) {
    const d = {
        Z: { x: B_x - A_x, y: B_y - A_y },
        X: { x: D_x - C_x, y: D_y - C_y }
    }

    const Z_len = Math.sqrt(d.Z.x ** 2 + d.Z.y ** 2)
    const X_len = Math.sqrt(d.X.x ** 2 + d.X.y ** 2)

    const d_Z = [d.Z.x / Z_len, d.Z.y / Z_len]
    const d_X = [d.X.x / X_len, d.X.y / Z_len]

    return [...d_Z, ...d_X]
}

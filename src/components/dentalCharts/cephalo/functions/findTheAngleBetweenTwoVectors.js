export default function findTheAngleBetweenTwoVectors(Ux, Uy, Vx, Vy) {
    const UV_dot_Product = Ux * Vx + Uy * Vy
    const U_magnitude = Math.sqrt(Ux ** 2 + Uy ** 2)
    const V_magnitude = Math.sqrt(Vx ** 2 + Vy ** 2)

    const cos_theta = Math.acos(UV_dot_Product / (U_magnitude * V_magnitude))
    const theta = cos_theta * (180 / Math.PI)

    return theta
}

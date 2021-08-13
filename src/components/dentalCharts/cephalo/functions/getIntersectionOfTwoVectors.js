export default function getIntersectionOfTwoVectors(S_x, S_y, Gn_x, Gn_y, Po_x, Po_y, Or_x, Or_y) {
    const d = {
        SGn: { x: Gn_x - S_x, y: Gn_y - S_y },
        PoOr: { x: Or_x - Po_x, y: Or_y - Po_y }
    }

    const SGn_len = Math.sqrt(d.SGn.x ** 2 + d.SGn.y ** 2)
    const PoOr_Len = Math.sqrt(d.PoOr.x ** 2 + d.PoOr.y ** 2)

    const d_SGn = [d.SGn.x / SGn_len, d.SGn.y / SGn_len]
    const d_PoOr = [d.PoOr.x / PoOr_Len, d.PoOr.y / SGn_len]

    return [...d_SGn, ...d_PoOr]
}

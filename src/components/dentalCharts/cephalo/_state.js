// the cephalo-metric calc-points
const cephaloPoints = {
    S: false,
    A: false,
    B: false,
    N: false,
    Pog: false,
    Me: false,
    Gn: false,
    ENA: false,
    ENP: false,
    Xi: false,
    Go: false,
    Ba: false,
    Po: false,
    Or: false,
    Pt: false,
    Pm: false,
    Co: false,
    U1: false,
    L1: false,
    U1ap: false,
    L1ap: false,
    PN: false,
    CG: false,
    R1: false,
    R2: false,
    R3: false,
    R4: false
}

const chartState = {
    isPointSelected: undefined, // check is the user selected a point
    entryPoint: undefined, // set the the entry-point for our Object
    mousePosition: undefined, // track mouse position on mousemove
    isMouseDown: undefined // track state of mousedown and up
}

export { cephaloPoints, chartState }

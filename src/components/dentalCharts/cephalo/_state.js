// the cephalo-metric calc-points
const cephaloPoints = [
    { S: false },
    { A: false },
    { B: false },
    { N: false }, //4
    { Na: false },
    { Pog: false },
    { Me: false },
    { Gn: false }, //8
    { ENA: false },
    { ENP: false },
    { Xi: false },
    { Go: false }, //12
    { Ba: false },
    { Po: false },
    { Or: false },
    { Pt: false }, //16
    { Ar: false },
    { D: false },
    { Pm: false },
    { Co: false }, //20
    { U1: false },
    { L1: false },
    { U1ap: false },
    { L1ap: false }, //24
    { OLp: false },
    { OLa: false },
    { PN: false },
    { DC: false }, //28
    { R1: false },
    { R2: false },
    { R3: false },
    { R4: false } //32
]

const chartState = {
    isPointSelected: undefined, // check is the user selected a point
    entryPoint: undefined, // set the the entry-point for our Object
    mousePosition: undefined, // track mouse position on mousemove
    isMouseDown: undefined // track state of mousedown and up
}

export { cephaloPoints, chartState }

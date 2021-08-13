import { cephaloPoints } from './_state'
import getIntersectionOfTwoVectors from './functions/getIntersectionOfTwoVectors'
import convertScreenCoordinatesToCartesianPlanePoints from './functions/convertScreenCoordinatesToCartesianPlanePoints'
import findAngleBetweenTwoVectors from './functions/findAngleBetweenTwoVectors'
import findDistanceBetweenTwoPoints from './functions/findDistanceBetweenTwoPoints'
import getDifferenceBetweenPoAndGo from './functions/getDifferenceBetweenPoAndGo'

export default function calculateTheDistanceAndAngle() {
    const coordinates = {
        SNA: {
            // angle between S-N-A
            S: cephaloPoints[0].S,
            N: cephaloPoints[3].N,
            A: cephaloPoints[1].A
        },
        SNB: {
            // angle between S-N-B
            S: cephaloPoints[0].S,
            N: cephaloPoints[3].N,
            B: cephaloPoints[2].B
        },
        ANB: {
            // angle between A-N-B
            A: cephaloPoints[1].A,
            N: cephaloPoints[3].N,
            B: cephaloPoints[2].B
        },
        // angle between lines (PFr-MA) = FMA
        PFr: {
            // line Po-Or
            Po: cephaloPoints[13].Po,
            Or: cephaloPoints[14].Or
        },
        MA: {
            // line Go-Me
            Go: cephaloPoints[11].Go,
            Me: cephaloPoints[6].Me
        },
        // angle between lines (PFr-SGn) = axe_y_de_Brodie
        SGn: {
            // line S-Gn
            S: cephaloPoints[0].S,
            Gn: cephaloPoints[7].Gn
        },
        // angle between BaNa && PtGn = axe_facial_de_Rickette FIXME:
        BaNa: {
            // line Ba-Na
            Ba: cephaloPoints[12].Ba,
            Na: cephaloPoints[4].Na
        },
        PtGn: {
            // line Pt-Gn
            Pt: cephaloPoints[15].Pt,
            Gn: cephaloPoints[7].Gn
        },
        // angle between PFr && U1U1ap = I/F TODO:
        U1U1ap: {
            // line U1-U1ap
            U1: cephaloPoints[20].U1,
            U1ap: cephaloPoints[22].U1ap
        },
        // angle between MA && L1L1ap = I/M TODO:
        L1L1ap: {
            // line L1-L1ap
            L1: cephaloPoints[21].L1,
            L1ap: cephaloPoints[23].L1ap
        },
        // distnce bewteen A && NaPog = convenxite FIXME:
        NaPog: {
            Na: cephaloPoints[4].Na,
            Pog: cephaloPoints[5].Pog
        },
        // distance between (Pt vertical onto PFr) and (ENA vertical onto PFr) TODO:
        // distance between (Pt vertical onto ENAENP) and A TODO:
        ENAENP: {
            ENA: cephaloPoints[8].ENA,
            ENP: cephaloPoints[9].ENP
        }
    }

    const FMA_Diff = getDifferenceBetweenPoAndGo(
        coordinates.PFr.Po[0],
        coordinates.PFr.Po[1],
        coordinates.MA.Go[0],
        coordinates.MA.Go[1]
    )

    const axeYDeBrodieIntersection = getIntersectionOfTwoVectors(
        coordinates.SGn.S[0],
        coordinates.SGn.S[1],
        coordinates.SGn.Gn[0],
        coordinates.SGn.Gn[1],
        coordinates.PFr.Po[0],
        coordinates.PFr.Po[1],
        coordinates.PFr.Or[0],
        coordinates.PFr.Or[1]
    )

    const axeFacialDeRicketteIntersection = getIntersectionOfTwoVectors(
        coordinates.PtGn.Pt[0],
        coordinates.PtGn.Pt[1],
        coordinates.PtGn.Gn[0],
        coordinates.PtGn.Gn[1],
        coordinates.BaNa.Na[0],
        coordinates.BaNa.Na[1],
        coordinates.BaNa.Ba[0],
        coordinates.BaNa.Ba[1]
    )

    const screenToCartesianCoordinates = {
        SNA: convertScreenCoordinatesToCartesianPlanePoints(
            coordinates.SNA.N[0],
            coordinates.SNA.N[1], // Origin (x,y)_axes
            coordinates.SNA.S[0],
            coordinates.SNA.S[1], // Vector-A (x,y)_axes
            coordinates.SNA.A[0],
            coordinates.SNA.A[1] // Vector-B (x,y)_axes
        ),
        SNB: convertScreenCoordinatesToCartesianPlanePoints(
            coordinates.SNB.N[0],
            coordinates.SNB.N[1], // Origin (x,y)_axes
            coordinates.SNB.S[0],
            coordinates.SNB.S[1], // Vector-A (x,y)_axes
            coordinates.SNB.B[0],
            coordinates.SNB.B[1] // Vector-B (x,y)_axes
        ),
        ANB: convertScreenCoordinatesToCartesianPlanePoints(
            coordinates.ANB.N[0],
            coordinates.ANB.N[1], // Origin (x,y)_axes
            coordinates.ANB.B[0],
            coordinates.ANB.B[1], // Vector-A (x,y)_axes
            coordinates.ANB.A[0],
            coordinates.ANB.A[1] // Vector-B (x,y)_axes
        ),
        FMA: convertScreenCoordinatesToCartesianPlanePoints(
            coordinates.PFr.Po[0],
            coordinates.PFr.Po[1], // Origin (x,y)_axes
            coordinates.PFr.Or[0],
            coordinates.PFr.Or[1], // Vector-A (x,y)_axes
            coordinates.MA.Me[0] - FMA_Diff[0],
            coordinates.MA.Me[1] - FMA_Diff[1] // Vector-B (x,y)_axes
        )
    }

    const angles = {
        SNA: findAngleBetweenTwoVectors(...screenToCartesianCoordinates.SNA).toFixed(2),
        SNB: findAngleBetweenTwoVectors(...screenToCartesianCoordinates.SNB).toFixed(2),
        ANB: findAngleBetweenTwoVectors(...screenToCartesianCoordinates.ANB).toFixed(2),
        FMA: findAngleBetweenTwoVectors(...screenToCartesianCoordinates.FMA).toFixed(2),
        axe_Brodie: findAngleBetweenTwoVectors(...axeYDeBrodieIntersection).toFixed(2),
        axe_Rickette: findAngleBetweenTwoVectors(...axeFacialDeRicketteIntersection).toFixed(2)
    }

    const distances = {
        convenxite_A_Na: findDistanceBetweenTwoPoints(
            cephaloPoints[1].A[0],
            cephaloPoints[1].A[1], // Point-A (x,y)_axes
            cephaloPoints[4].Na[0],
            cephaloPoints[4].Na[1] // Point-B (x,y)_axes
        ).toFixed(2),
        convenxite_A_Pog: findDistanceBetweenTwoPoints(
            cephaloPoints[1].A[0],
            cephaloPoints[1].A[1], // Point-A (x,y)_axes
            cephaloPoints[5].Pog[0],
            cephaloPoints[5].Pog[1] // Point-B (x,y)_axes
        ).toFixed(2)
    }

    // console.log("coordinates", coordinates.PFr, coordinates.U1U1ap)
    console.log('angle', angles)
    console.log('distance', distances)
}

import { cephaloPoints } from './_state'
import getIntersectionOfTwoVectors from './functions/getIntersectionOfTwoVectors'
import convertScreenCoordinatesToCartesianPlanePoints from './functions/convertScreenCoordinatesToCartesianPlanePoints'
import findAngleBetweenTwoVectors from './functions/findAngleBetweenTwoVectors'
import findDistanceBetweenTwoPoints from './functions/findDistanceBetweenTwoPoints'
import getDifferenceBetweenPoAndGo from './functions/getDifferenceBetweenPoAndGo'

export default function calculateTheDistanceAndAngle() {
    const coordinates = {
        // angle between lines (PFr-MA) = FMA
        PFr: {
            // line Po-Or
            Po: cephaloPoints.Po,
            Or: cephaloPoints.Or
        },
        MA: {
            // line Go-Me
            Go: cephaloPoints.Go,
            Me: cephaloPoints.Me
        },
        // angle between lines (PFr-SGn) = axe_y_de_Brodie
        SGn: {
            // line S-Gn
            S: cephaloPoints.S,
            Gn: cephaloPoints.Gn
        },
        // angle between BaNa && PtGn = axe_facial_de_Rickette FIXME:
        BaNa: {
            // line Ba-Na
            Ba: cephaloPoints.Ba,
            Na: cephaloPoints.Na
        },
        PtGn: {
            // line Pt-Gn
            Pt: cephaloPoints.Pt,
            Gn: cephaloPoints.Gn
        },
        // angle between PFr && U1U1ap = I/F TODO:
        U1U1ap: {
            // line U1-U1ap
            U1: cephaloPoints.U1,
            U1ap: cephaloPoints.U1ap
        },
        // angle between MA && L1L1ap = I/M TODO:
        L1L1ap: {
            // line L1-L1ap
            L1: cephaloPoints.L1,
            L1ap: cephaloPoints.L1ap
        },
        // distnce bewteen A && NaPog = convenxite FIXME:
        NaPog: {
            Na: cephaloPoints.Na,
            Pog: cephaloPoints.Pog
        },
        // distance between (Pt vertical onto PFr) and (ENA vertical onto PFr) TODO:
        // distance between (Pt vertical onto ENAENP) and A TODO:
        ENAENP: {
            ENA: cephaloPoints.ENA,
            ENP: cephaloPoints.ENP
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
            cephaloPoints.N[0],
            cephaloPoints.N[1], // Origin (x,y)_axes
            cephaloPoints.S[0],
            cephaloPoints.S[1], // Vector-A (x,y)_axes
            cephaloPoints.A[0],
            cephaloPoints.A[1] // Vector-B (x,y)_axes
        ),
        SNB: convertScreenCoordinatesToCartesianPlanePoints(
            cephaloPoints.N[0],
            cephaloPoints.N[1], // Origin (x,y)_axes
            cephaloPoints.S[0],
            cephaloPoints.S[1], // Vector-A (x,y)_axes
            cephaloPoints.B[0],
            cephaloPoints.B[1] // Vector-B (x,y)_axes
        ),
        ANB: convertScreenCoordinatesToCartesianPlanePoints(
            cephaloPoints.N[0],
            cephaloPoints.N[1], // Origin (x,y)_axes
            cephaloPoints.B[0],
            cephaloPoints.B[1], // Vector-A (x,y)_axes
            cephaloPoints.A[0],
            cephaloPoints.A[1] // Vector-B (x,y)_axes
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
            cephaloPoints.A[0],
            cephaloPoints.A[1], // Point-A (x,y)_axes
            cephaloPoints.Na[0],
            cephaloPoints.Na[1] // Point-B (x,y)_axes
        ).toFixed(2),
        convenxite_A_Pog: findDistanceBetweenTwoPoints(
            cephaloPoints.A[0],
            cephaloPoints.A[1], // Point-A (x,y)_axes
            cephaloPoints.Pog[0],
            cephaloPoints.Pog[1] // Point-B (x,y)_axes
        ).toFixed(2)
    }

    return { angles, distances }
}

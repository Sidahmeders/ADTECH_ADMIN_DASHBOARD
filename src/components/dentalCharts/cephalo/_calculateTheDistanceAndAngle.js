import { cephaloPoints } from './_state'
import getIntersectionOfTwoVectors from './functions/getIntersectionOfTwoVectors'
import convertScreenCoordinatesToCartesianPlanePoints from './functions/convertScreenCoordinatesToCartesianPlanePoints'
import findAngleBetweenTwoVectors from './functions/findAngleBetweenTwoVectors'
import findDistanceBetweenTwoPoints from './functions/findDistanceBetweenTwoPoints'
import getDifferenceBetweenPoAndGo from './functions/getDifferenceBetweenPoAndGo'
import getDifferenceBetweenTwoAngles from './functions/getDifferenceBetweenTwoAngles'

export default function calculateTheDistanceAndAngle() {
    const FMA_Difference = getDifferenceBetweenPoAndGo(
        cephaloPoints.Po[0],
        cephaloPoints.Po[1],
        cephaloPoints.Go[0],
        cephaloPoints.Go[1]
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
            cephaloPoints.Po[0],
            cephaloPoints.Po[1], // Origin (x,y)_axes
            cephaloPoints.Or[0],
            cephaloPoints.Or[1], // Vector-A (x,y)_axes
            cephaloPoints.Me[0] - FMA_Difference[0],
            cephaloPoints.Me[1] - FMA_Difference[1] // Vector-B (x,y)_axes
        )
    }

    const intersectionOfTwoVectors = {
        axeYBrodi: getIntersectionOfTwoVectors(
            cephaloPoints.S[0],
            cephaloPoints.S[1],
            cephaloPoints.Gn[0],
            cephaloPoints.Gn[1],
            cephaloPoints.Po[0],
            cephaloPoints.Po[1],
            cephaloPoints.Or[0],
            cephaloPoints.Or[1]
        ),
        axeFacial: getIntersectionOfTwoVectors(
            cephaloPoints.Pt[0],
            cephaloPoints.Pt[1],
            cephaloPoints.Gn[0],
            cephaloPoints.Gn[1],
            cephaloPoints.N[0],
            cephaloPoints.N[1],
            cephaloPoints.Ba[0],
            cephaloPoints.Ba[1]
        ),
        i_M: getIntersectionOfTwoVectors(
            cephaloPoints.L1ap[0],
            cephaloPoints.L1ap[1],
            cephaloPoints.L1[0],
            cephaloPoints.L1[1],
            cephaloPoints.Go[0],
            cephaloPoints.Go[1],
            cephaloPoints.Me[0],
            cephaloPoints.Me[1]
        ),
        I_F: getIntersectionOfTwoVectors(
            cephaloPoints.U1ap[0],
            cephaloPoints.U1ap[1],
            cephaloPoints.U1[0],
            cephaloPoints.U1[1],
            cephaloPoints.Or[0],
            cephaloPoints.Or[1],
            cephaloPoints.Po[0],
            cephaloPoints.Po[1]
        ),
        i_A_pog: getIntersectionOfTwoVectors(
            cephaloPoints.A[0],
            cephaloPoints.A[1],
            cephaloPoints.Pog[0],
            cephaloPoints.Pog[1],
            cephaloPoints.L1[0],
            cephaloPoints.L1[1],
            cephaloPoints.L1ap[0],
            cephaloPoints.L1ap[1]
        ),
        I_A_pog: getIntersectionOfTwoVectors(
            cephaloPoints.U1[0],
            cephaloPoints.U1[1],
            cephaloPoints.U1ap[0],
            cephaloPoints.U1ap[1],
            cephaloPoints.A[0],
            cephaloPoints.A[1],
            cephaloPoints.Pog[0],
            cephaloPoints.Pog[1]
        ),
        I_i: getIntersectionOfTwoVectors(
            cephaloPoints.L1[0],
            cephaloPoints.L1[1],
            cephaloPoints.L1ap[0],
            cephaloPoints.L1ap[1],
            cephaloPoints.U1[0],
            cephaloPoints.U1[1],
            cephaloPoints.U1ap[0],
            cephaloPoints.U1ap[1]
        )
    }

    let _SNA_ = findAngleBetweenTwoVectors(...screenToCartesianCoordinates.SNA).toFixed(2)
    let _SNB_ = findAngleBetweenTwoVectors(...screenToCartesianCoordinates.SNB).toFixed(2)

    const angles = {
        SNA: _SNA_,
        SNB: _SNB_,
        ANB: getDifferenceBetweenTwoAngles(_SNA_, _SNB_).toFixed(2),
        FMA_de_Tweed: findAngleBetweenTwoVectors(...screenToCartesianCoordinates.FMA).toFixed(2),
        axe_Y_Brodie: findAngleBetweenTwoVectors(...intersectionOfTwoVectors.axeYBrodi).toFixed(2),
        axe_Facial: findAngleBetweenTwoVectors(...intersectionOfTwoVectors.axeFacial).toFixed(2),
        i_M: findAngleBetweenTwoVectors(...intersectionOfTwoVectors.i_M).toFixed(2),
        i_F: findAngleBetweenTwoVectors(...intersectionOfTwoVectors.I_F).toFixed(2),
        i_A_pog: findAngleBetweenTwoVectors(...intersectionOfTwoVectors.i_A_pog).toFixed(2),
        I_A_pog: findAngleBetweenTwoVectors(...intersectionOfTwoVectors.I_A_pog).toFixed(2),
        I_i: findAngleBetweenTwoVectors(...intersectionOfTwoVectors.I_i).toFixed(1),
        ENA_Xi_Pm: findAngleBetweenTwoVectors(undefined)
    }

    const distances = {
        S_CG: findDistanceBetweenTwoPoints(undefined),
        S_FMP: findDistanceBetweenTwoPoints(undefined),
        S_E: findDistanceBetweenTwoPoints(undefined),
        S_L: findDistanceBetweenTwoPoints(undefined),
        Convexite: findDistanceBetweenTwoPoints(undefined),
        FMA_ENA: findDistanceBetweenTwoPoints(undefined),
        AT_de_chateau: findDistanceBetweenTwoPoints(undefined),
        Longeur_mandibule: findDistanceBetweenTwoPoints(undefined),
        Xi_Pm: findDistanceBetweenTwoPoints(undefined),
        Hauteur_letage_sup: findDistanceBetweenTwoPoints(undefined),
        Hauteur_letage_inf: findDistanceBetweenTwoPoints(undefined),
        Hauteur_ramale: findDistanceBetweenTwoPoints(undefined),
        convenxite_A_Na: findDistanceBetweenTwoPoints(
            cephaloPoints.A[0],
            cephaloPoints.A[1], // Point-A (x,y)_axes
            cephaloPoints.N[0],
            cephaloPoints.N[1] // Point-B (x,y)_axes
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

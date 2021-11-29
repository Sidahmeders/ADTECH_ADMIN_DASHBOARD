import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import DignosticEtiologique from './DignosticEtiologique'

export default function ParoStat() {
    const _isMounted = useRef(true)
    const [paroState, setParoState] = useState(false)

    async function getParoStat(setParoState) {
        let response = await Fetch.GET('admin/statistics/patients/paro', localStorage.Token)
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    const { paroStat } = data
                    setParoState(() => (paroStat ? paroStat : false))
                }
            }
        }
    }

    useEffect(() => {
        getParoStat(setParoState)
        return () => {
            _isMounted.current = false
        }
    }, [])

    // const {
    //     decisionTherapeutique,
    //     diagnosticPositive,
    //     diagnosticEtiologiqueDirecteDeclenchant,
    //     diagnosticEtiologiqueDirecteFavorisant,
    //     diagnosticEtiologiqueIndirecte
    // } = paroState

    let diagnosticEtiologiqueDirecteDeclenchant = {
        plaque_dentaire: 11,
        non: 3
    }

    let diagnosticEtiologiqueDirecteFavorisant = {
        prothese_mal_adapte: 2,
        traitement_odf: 7,
        respiration_buccale: 7,
        obturation_debordante: 1,
        tartre: 4,
        carie_cervicale: 9,
        dent_abscente: 2,
        diasteme: 0,
        recession: 8,
        mastication_unilaterale: 12,
        autre: 9
    }

    let diagnosticEtiologiqueIndirecte = {
        prematurite: 7,
        interfirence: 2,
        trauma_occlusale_primaire: 3,
        trauma_occlusale_secondaire: 0,
        traitement_odf: 7,
        prothese_mal_adapte: 1,
        bruxisme: 2,
        crispation: 0,
        succion_de_pouce: 1,
        onychophagie: 9,
        mastication_unilaterale: 4,
        obturation_debordante_occlusale: 3,
        autre: 11
    }

    return (
        <>
            {paroState ? (
                <>
                    <DignosticEtiologique
                        dignosticEtiologique={diagnosticEtiologiqueDirecteDeclenchant}
                    />
                    <DignosticEtiologique
                        dignosticEtiologique={diagnosticEtiologiqueDirecteFavorisant}
                    />
                    <DignosticEtiologique dignosticEtiologique={diagnosticEtiologiqueIndirecte} />
                </>
            ) : (
                ''
            )}
        </>
    )
}

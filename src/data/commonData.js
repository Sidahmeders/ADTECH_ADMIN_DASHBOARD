import Fetch from '../utils/fetchData'

export async function getAllPatients(setState) {
    let data = await Fetch.GET('admin/patients/common-stat')
    if (data) {
        setState(() => data.commonStat)
    }
}

export const common = {
    hygiene_buccaux_dentaires: {
        bone: 45,
        moyenne: 76,
        mauvaise: 42
    },
    motif_de_consultation: {
        fonctionnel: 52,
        esthetitque: 25,
        douler: 37,
        autre: 49
    }
}

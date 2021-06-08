import Fetch from '../utils/fetchData'

export async function getAllPatients(setState) {
    let response = await Fetch.GET('admin/patients/common-stat')
    if (response) {
        const { data } = response
        setState(() => data.commonStat)
    }
}

export const common = {
    hygienBuccaul: {
        bone: 45,
        moyenne: 76,
        mauvaise: 42
    },
    motifConsultation: {
        fonctionnel: 52,
        esthetitque: 25,
        douler: 37,
        autre: 49
    }
}

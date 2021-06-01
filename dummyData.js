const common = {
    patients: {
        totalPatients: 90,
        Januray: 12,
        Febuary: 12,
        March: 12,
        April: 12,
        May: 12,
        June: 12,
        July: 12,
        August: 12,
        Septemebr: 12
    },
    sex: {
        male: 22,
        female: 31
    },
    age: {
        noveau_ne: {
            range: '0-2',
            total: 9
        },
        enfant: {
            range: '2-13',
            total: 15
        },
        adolescence: {
            range: '13-18',
            total: 20
        },
        adult: {
            range: '18-50',
            total: 38
        },
        vieux: {
            range: '50-99+',
            total: 28
        }
    },
    hygiene_buccaux_dentaires: {
        bone: 21,
        moyenne: 16,
        mauvaise: 33
    },
    motif_de_consultation: {
        fonctionnel: 25,
        esthetitque: 11,
        douler: 17,
        autre: 13
    }
}

const prothese = {
    calssification_de_limda: {
        mandibule: {
            class1: 8,
            class2: 5,
            class3: 6,
            class4: 9
        },
        maxillaire: {
            class1: 7,
            class2: 8,
            class3: 4
        }
    },
    classification_de_kinedy_aplegate: {
        class1: 12,
        class2: 10,
        class3: 6,
        class4: 3,
        class5: 9,
        class6: 5
    }
}

const OCE = {
    calssification_de_black: {
        class1: 12,
        class2: 10,
        class3: 6,
        class4: 3,
        class5: 9
    },
    sit_sta: {
        class1: 12,
        class2: 10,
        class3: 6
    },
    la_dent_cousale: {
        11: 3,
        12: 2,
        13: 2,
        15: 2,
        16: 2,
        17: 3,
        18: 5,
        21: 3,
        22: 3,
        23: 4,
        24: 3,
        25: 6,
        26: 8,
        27: 4,
        28: 3,
        31: 4,
        32: 5,
        33: 9,
        34: 0,
        35: 7,
        36: 6,
        37: 1,
        38: 2,
        41: 1,
        42: 1,
        43: 2,
        44: 3,
        45: 5,
        46: 3,
        47: 4,
        48: 5
    },
    dignostic_etiologique: {
        carie: 29,
        tromatisme: 19,
        autre: 15
    },
    treatment: {
        dentinogene: 21,
        cementogene: 27,
        osteocementogene: 17
    }
}

const ODF = {
    dignostic_postive: {
        class_squelitique: {
            class1: 12,
            class2: 10,
            class3: 6
        },
        typologie_facial: {
            open_bite: 19,
            normo_bite: 23,
            deep_bite: 12
        }
    },
    direction_de_craoissance: {
        facial: {
            anterieur: 12,
            posterieur: 17,
            moyenne: 9
        }
    }
}

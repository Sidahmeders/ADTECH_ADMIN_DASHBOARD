export const common = {
    patients: {
        total: 163,
        specialty: {
            ODF: {
                total: 29
            },
            OCE: {
                total: 34
            },
            PCB: {
                total: 21
            },
            PARO: {
                total: 36
            },
            PROTH: {
                total: 43
            }
        }
        // Januray: 9,
        // Febuary: 11,
        // March: 14,
        // April: 6,
        // May: 7,
        // June: 4,
        // July: 8,
        // August: 15,
        // Septemebr: 8
    },
    sex: {
        male: 65,
        female: 98
    },
    ages: {
        noveau_ne: {
            range: '0-2',
            total: 9
        },
        enfant: {
            range: '2-13',
            total: 29
        },
        adolescence: {
            range: '13-18',
            total: 44
        },
        adult: {
            range: '18-50',
            total: 53
        },
        vieux: {
            range: '50+',
            total: 28
        }
    },
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

export const prothese = {
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

export const OCE = {
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

export const ODF = {
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

const styles = {
    divstyle: {
        position: 'relative'
    },
    mainStyle: {
        position: 'absolute',
        top: '120px',
        left: '75%',
        background: 'white',
        color: 'black',
        width: 'fit-content',
        padding: '10px 20px',
        fontSize: '14px'
    },
    precentageElementStyle: {
        marginTop: '5px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    labelStyle: {
        color: '#666',
        marginRight: '10px'
    }
}

export default function Percentage({ labels, data, colors }) {
    const totalPrecent = data.length ? data.reduce((a, b) => a + b) : 0

    const calcPercentage = (whole, fraction) => {
        const precent = fraction / whole
        const percentage = (precent * 100).toFixed(2)
        return percentage
    }

    return (
        <div style={styles.divstyle}>
            <main style={styles.mainStyle}>
                {labels.map((label, index) => {
                    const percentage = calcPercentage(totalPrecent, data[index])
                    return (
                        <div style={styles.precentageElementStyle} key={index}>
                            <label style={styles.labelStyle}>{label} </label>
                            <span style={{ color: colors[index] }}>{percentage} %</span>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

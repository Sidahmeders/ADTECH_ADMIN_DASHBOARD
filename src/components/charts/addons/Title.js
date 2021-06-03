const styles = {
    divStyle: {
        position: 'relative'
    },
    smallStyle: {
        position: 'absolute',
        top: 0,
        left: '50%',
        padding: '10px 20px 0 20px',
        borderRadius: '10px',
        color: 'gray',
        background: 'white',
        fontSize: '15px'
    },
    spanStyle: {
        color: '#25d'
    }
}

export default function Title({ label, total }) {
    return (
        <div style={styles.divStyle}>
            <small style={styles.smallStyle}>
                {label} <span style={styles.spanStyle}>{total}</span>
            </small>
        </div>
    )
}

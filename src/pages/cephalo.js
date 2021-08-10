import skull from '../asset/images/radioGraph.bmp'
import '../styles/cephalo.scss'
import Canvas from '../components/chephalo/Canvas'

const Cephalo = () => {
    return (
        <div className="cephalo">
            <Canvas />
            <div className="radio-graph">
                <img src={skull} alt="skull" />
            </div>
        </div>
    )
}

export default Cephalo

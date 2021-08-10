import Canvas from './Canvas'
import skull from '../../../asset/images/radioGraph.bmp'

export default function Cephalo() {
    return (
        <>
            <Canvas />
            <div className="radio-graph">
                <img src={skull} alt="skull" />
            </div>
        </>
    )
}

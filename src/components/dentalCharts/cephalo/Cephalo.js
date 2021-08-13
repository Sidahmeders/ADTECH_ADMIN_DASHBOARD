import Canvas from './canvas/Canvas'
import CalcHead from './calcHead/CalcHead'
import skull from '../../../asset/images/radioGraph.bmp'

export default function Cephalo() {
    return (
        <>
            <Canvas />
            <CalcHead />
            <div className="radio-graph">
                <img src={skull} alt="skull" />
            </div>
        </>
    )
}

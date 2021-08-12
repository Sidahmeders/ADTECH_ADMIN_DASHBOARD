import Canvas from './Canvas'
import CalcHead from './CalcHead'
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

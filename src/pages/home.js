import gif1 from '../asset/images/home/icon1.gif'
import gif2 from '../asset/images/home/icon2.gif'
import gif3 from '../asset/images/home/icon3.gif'
import gif4 from '../asset/images/home/icon4.gif'
import gif5 from '../asset/images/home/icon5.gif'
import gif6 from '../asset/images/home/icon6.gif'

const gifs = [gif1, gif2, gif3, gif4, gif5, gif6]

export default function HomePage() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    minHeight: '90vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <img src={gifs[Math.floor(Math.random() * 6)]} alt="add-users" />
            </div>
        </>
    )
}

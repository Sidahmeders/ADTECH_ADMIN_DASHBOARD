import gif1 from '../asset/images/home/icon1.gif'
import gif2 from '../asset/images/home/icon2.gif'
import gif3 from '../asset/images/home/icon3.gif'
import gif4 from '../asset/images/home/icon4.gif'
const gifs = [gif1, gif2, gif3, gif4]

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
                <img src={gifs[Math.floor(Math.random() * 4)]} alt="add-users" />
            </div>
        </>
    )
}

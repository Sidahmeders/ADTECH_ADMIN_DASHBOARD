import UsersStat from '../components/dashboard/UsersStat'
import AppStat from '../components/dashboard/AppStat'
import TextHeader from '../components/common/TextHeader/index'

export default function DashBoard() {
    return (
        <>
            <TextHeader text="Dashboard" />
            <div className="dashboard">
                <UsersStat />
                <AppStat />
            </div>
        </>
    )
}

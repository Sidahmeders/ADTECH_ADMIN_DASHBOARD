import UsersStat from '../components/dashboard/userStat/UsersStat'
import AppStat from '../components/dashboard/appStat/AppStat'
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

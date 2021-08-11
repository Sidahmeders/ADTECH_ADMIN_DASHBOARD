import SideBar from './sidebar/Sidebar'

export default function Layout({ children }) {
    return (
        <>
            <SideBar />
            <main style={{ marginLeft: '220px' }}>{children}</main>
        </>
    )
}

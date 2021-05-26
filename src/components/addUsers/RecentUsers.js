import '../../styles/addUsers/recentUsers.scss'

function getAge(dateString) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()

    return age > 1 ? age : 1
}

const formatUsersData = (users) => {
    const filteredUsers = []

    users.forEach((user) => {
        let tempUser = {}
        tempUser.name = user.first_name + ' ' + user.last_name
        tempUser.age = getAge(user.birth_date)
        tempUser.faculty = user.faculty
        tempUser.role = user.role
        tempUser.date = user.date_of_creation.split('T')[0]
        filteredUsers.push(tempUser)
    })

    return filteredUsers
}

const RecentUser = ({ user }) => {
    const { name, age, faculty, role, date } = user
    return (
        <div className="row">
            <div className="column">{name ? name : 'name'}</div>
            <div className="column">{age ? age : 'age'}</div>
            <div className="column">{faculty ? faculty : 'faculty'}</div>
            <div className="column">{role ? role : 'role'}</div>
            <div className="column">{date ? date : 'date'}</div>
        </div>
    )
}

export default function RecentUsers({ users }) {
    users = formatUsersData(users)

    return (
        <div>
            <div className="recent-users">
                <h2>recently added users</h2>
                <RecentUser
                    user={{
                        name: 'name',
                        age: 'age',
                        faculty: 'faculty',
                        role: 'role',
                        date: 'date'
                    }}
                    key={'header'}
                />
                {users.map((user, index) => (
                    <RecentUser user={user} key={index} />
                ))}
            </div>
        </div>
    )
}

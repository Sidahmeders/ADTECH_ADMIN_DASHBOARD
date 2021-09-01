import './style.scss'

function getAge(dateString) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()

    return age > 1 ? age : 1
}

const formatUsers = (users) => {
    const filteredUsers = []

    users.forEach((user) => {
        const { first_name, last_name, birth_date, faculty, role, date_of_creation } = user
        let tempUser = {}

        tempUser.name = first_name + ' ' + last_name
        tempUser.age = getAge(birth_date)
        tempUser.faculty = faculty
        tempUser.role = role
        tempUser.date = date_of_creation ? date_of_creation.split('T')[0] : undefined

        filteredUsers.push(tempUser)
    })

    return filteredUsers
}

const RecentUser = ({ user }) => {
    const { name, age, faculty, role, date } = user
    return (
        <div className="row">
            <div className="column">{name}</div>
            <div className="column">{age}</div>
            <div className="column">{faculty}</div>
            <div className="column">{role}</div>
            <div className="column">{date}</div>
        </div>
    )
}

export default function RecentUsers({ users }) {
    users = formatUsers(users)

    return (
        <div>
            <div className="recent-users">
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

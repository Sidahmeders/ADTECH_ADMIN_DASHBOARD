import '../../styles/addUsers/createUsersForm.scss'

import TextInputElement from '../common/form/TextInputElement/index'
import FileInputElement from '../common/form/FileInputElement/index'
import DateInputElement from '../common/form/DateInputElement/index'
import RadioInputElement from '../common/form/RadioInputElement/index'

export default function CreateUserForm() {
    return (
        <div className="create-users-form">
            <form>
                <div className="row text">
                    <TextInputElement label="first_name" />
                    <TextInputElement label="last_name" />
                </div>
                <div className="row text">
                    <DateInputElement label="birth_date" />
                    <TextInputElement label="phone_number" />
                </div>
                <RadioInputElement
                    label="gender"
                    options={['male', 'female', 'gay', 'lasbian', 'transgander', 'bisexual']}
                />
                <div className="row text">
                    <TextInputElement label="faculty" />
                    <TextInputElement label="country" />
                </div>
                <div className="row files">
                    <FileInputElement label="profile_image" />
                    <FileInputElement label="identity_card" />
                </div>
                <RadioInputElement
                    label="specialty"
                    options={['OFD', 'OCE', 'PARO', 'PROTHESE', 'PCB']}
                />
                <TextInputElement label="email" type="email" />
                <TextInputElement label="password" type="password" />
            </form>
        </div>
    )
}

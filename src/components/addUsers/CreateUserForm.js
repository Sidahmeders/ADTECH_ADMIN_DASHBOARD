import '../../styles/addUsers/createUsersForm.scss'

import TextInputElement from '../common/form/TextInputElement/index'
import FileInputElement from '../common/form/FileInputElement/index'
import DateInputElement from '../common/form/DateInputElement/index'
import RadioInputElement from '../common/form/RadioInputElement/index'

export default function CreateUserForm() {
    return (
        <div className="create-users-form">
            <form>
                <TextInputElement label="first_name" />
                <TextInputElement label="last_name" />
                <DateInputElement label="birth_date" />
                <RadioInputElement
                    label="gender"
                    options={[
                        'male',
                        'female',
                        'gay',
                        'lasbian',
                        'transgander',
                        'bisexual',
                        'transexual'
                    ]}
                />
                <TextInputElement label="faculty" />
                <FileInputElement label="profile_image" />
                <FileInputElement label="identity_card" />
                <RadioInputElement
                    label="life balance"
                    options={['top tier', 'undergound', 'athena', 'arcane stage']}
                />
                <TextInputElement label="email" type="email" />
                <TextInputElement label="password" type="password" />
            </form>
        </div>
    )
}

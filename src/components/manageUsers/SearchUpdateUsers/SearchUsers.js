import { useState } from 'react'
import Fetch from '../../../utils/fetchData'
import '../../../styles/manageUsers/searchUpdateUsers.scss'

import SearchInputElement from '../../common/form/SearchInputElement/index'
import RadioInputElement from '../../common/form/RadioInputElement/index'
import ButtonElement from '../../common/form/button/index'
import AlertStatusBar from '../../common/alert/index'

const searchFields = ['first_name', 'last_name', 'email']

const resetSerachInput = () => {
    document.getElementById('searchUpdateForm').reset()
}

const setSerachQueryBasedOnType = (type, value, searchQuery, setSerachQuery) => {
    const validRadios = [...searchFields, 'specialty', 'year_of_study', 'grade']
    if (type === 'radio' && validRadios.includes(value)) {
        resetSerachInput()
        setSerachQuery(() => {
            return {
                queryKey: value,
                queryValue: ''
            }
        })
    } else {
        setSerachQuery(() => {
            return {
                ...searchQuery,
                queryValue: value
            }
        })
    }
}

const handlePendingSearch = (setAlertMessage) => {
    setAlertMessage(() => {
        return {
            pending: 'please wait a moment...',
            success: '',
            error: ''
        }
    })
}

const handleSuccesfulSearch = (setAlertMessage, setUsers, data) => {
    setUsers(() => data.users)
    setAlertMessage(() => {
        return {
            pending: '',
            success: `${data.users.length} user has been found`,
            error: ''
        }
    })
}

const handleFailedSearch = (setAlertMessage, error) => {
    const errorMessage = error
        ? error.message
        : 'something unexpected happend, please check the dev console'
    setAlertMessage(() => {
        return {
            pending: '',
            success: '',
            error: errorMessage
        }
    })
}

export default function SearchUpdateUsers({ setUsers, alertMessage, setAlertMessage }) {
    const [searchQuery, setSerachQuery] = useState({
        queryKey: '',
        queryValue: ''
    })

    const handleSearchQueryChange = (event) => {
        const type = event.target.type
        const value = event.target.value.split(' ').join('_')

        setSerachQueryBasedOnType(type, value, searchQuery, setSerachQuery)
    }

    const searchUsers = async (event) => {
        event.preventDefault()
        const { queryKey, queryValue } = searchQuery
        const searchQueryParam = JSON.stringify({ [queryKey]: queryValue })

        handlePendingSearch(setAlertMessage)
        const response = await Fetch.Search('admin/users/search', searchQueryParam)
        if (response) {
            const { data, error } = response
            if (data) {
                handleSuccesfulSearch(setAlertMessage, setUsers, data)
            } else if (error) {
                handleFailedSearch(setAlertMessage, error)
            }
        }
    }

    return (
        <div className="search-users">
            <RadioInputElement
                label="select a serach field"
                options={[
                    'first name',
                    'last name',
                    'email',
                    'specialty',
                    'year of study',
                    'grade'
                ]}
                changeHandler={handleSearchQueryChange}
            />
            <form id="searchUpdateForm">
                {searchFields.includes(searchQuery.queryKey) ? (
                    <SearchInputElement
                        label="enter your search query"
                        changeHandler={handleSearchQueryChange}
                    />
                ) : searchQuery.queryKey === 'specialty' ? (
                    <RadioInputElement
                        label="select a specialty"
                        options={['OCE', 'ODF', 'PARO', 'PROTHESE', 'PCB']}
                        changeHandler={handleSearchQueryChange}
                    />
                ) : searchQuery.queryKey === 'year_of_study' ? (
                    <RadioInputElement
                        label="select a year"
                        options={['1-st', '2-nd', '3-rd', '4-th', '5-th', '6-th']}
                        changeHandler={handleSearchQueryChange}
                    />
                ) : searchQuery.queryKey === 'grade' ? (
                    <RadioInputElement
                        label="select a grade"
                        options={[
                            'student',
                            'resident',
                            'assistant',
                            'master_assistant',
                            'professor'
                        ]}
                        changeHandler={handleSearchQueryChange}
                    />
                ) : (
                    ''
                )}
                <AlertStatusBar message={alertMessage} />
                {alertMessage.pending ? (
                    <ButtonElement disable={true} />
                ) : (
                    <ButtonElement label="search now" clickHandler={searchUsers} />
                )}
            </form>
        </div>
    )
}

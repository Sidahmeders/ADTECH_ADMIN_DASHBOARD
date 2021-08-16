import { useState } from 'react'
import Fetch from '../../../../utils/fetchData'
import './style.scss'

import SearchInputElement from '../../../common/form/SearchInputElement/index'
import RadioInputElement from '../../../common/form/RadioInputElement/index'
import ButtonElement from '../../../common/form/button/index'
import AlertStatusBar from '../../../common/alert/index'

const searchFields = ['first_name', 'last_name', 'email']

const resetSerachInput = () => {
    document.getElementById('searchUpdateForm').reset()
    document.querySelectorAll('.sub-radio-element').forEach((item) => (item.checked = false))
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
            success: `${data.users.length} users has been found`,
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
        } else {
            handleFailedSearch(setAlertMessage)
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
                        sub={true}
                    />
                ) : searchQuery.queryKey === 'year_of_study' ? (
                    <RadioInputElement
                        label="select a year"
                        options={['1st', '2nd', '3rd', '4th', '5th', '6th']}
                        changeHandler={handleSearchQueryChange}
                        sub={true}
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
                        sub={true}
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

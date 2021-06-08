import { useState } from 'react'
import Fetch from '../../../utils/fetchData'
import '../../../styles/manageUsers/searchUpdateUsers.scss'

import SearchInputElement from '../../common/form/SearchInputElement/index'
import RadioInputElement from '../../common/form/RadioInputElement/index'
import ButtonElement from '../../common/form/button/index'

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

export default function SearchUpdateUsers({ setUsers }) {
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

        const data = await Fetch.Search('admin/users/search', searchQueryParam)
        if (data) {
            setUsers(() => data)
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
                <ButtonElement label="search now" clickHandler={searchUsers} />
            </form>
        </div>
    )
}

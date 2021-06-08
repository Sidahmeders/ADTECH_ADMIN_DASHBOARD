import { useEffect, useState, useRef } from 'react'
import Fetch from '../../utils/fetchData'
import '../../styles/manageUsers/searchUpdateUsers.scss'

import SearchInputElement from '../common/form/SearchInputElement/index'
import RadioInputElement from '../common/form/RadioInputElement/index'

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
                queryParam: value,
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

export default function SearchUpdateUsers() {
    const _isMounted = useRef(true)

    const [searchQuery, setSerachQuery] = useState({
        queryParam: '',
        queryValue: ''
    })

    const handleSearchQueryChange = (event) => {
        const type = event.target.type
        const value = event.target.value.split(' ').join('_')

        setSerachQueryBasedOnType(type, value, searchQuery, setSerachQuery)
    }

    const [users, setUsers] = useState()

    const searchUsers = async (seacrhQuery) => {
        const searchQueryParam = JSON.stringify({ first_name: 'Jasmin' })
        const data = await Fetch.Search('admin/users/search', searchQueryParam)
        if (_isMounted.current) {
            if (data) {
                setUsers(() => data)
            }
        }
    }

    useEffect(() => {
        searchUsers(searchQuery)
        return () => {
            _isMounted.current = false
        }
    }, [])

    // console.log(users)
    console.log(searchQuery)

    return (
        <div className="search-update-users">
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
                {searchFields.includes(searchQuery.queryParam) ? (
                    <SearchInputElement
                        label="enter your search query"
                        changeHandler={handleSearchQueryChange}
                    />
                ) : searchQuery.queryParam === 'specialty' ? (
                    <RadioInputElement
                        label="select a specialty"
                        options={['OCE', 'ODF', 'PARO', 'PROTH', 'PCB']}
                        changeHandler={handleSearchQueryChange}
                    />
                ) : searchQuery.queryParam === 'year_of_study' ? (
                    <RadioInputElement
                        label="select a year"
                        options={['1-th', '2-nd', '3-rd', '4-th', '5-th', '6-th']}
                        changeHandler={handleSearchQueryChange}
                    />
                ) : searchQuery.queryParam === 'grade' ? (
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
            </form>
        </div>
    )
}

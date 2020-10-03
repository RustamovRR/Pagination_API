import React from 'react'

export const Context = React.createContext()

export function Provider({ children }) {

    const [companies, setCompanies] = React.useState([])

    function loadCompanies() {
        fetch('https://api-v2.intrinio.com/companies?page_size=100&next_page=MTE=&api_key=OjY3ZmVhMzQ4MjA3MGE4MTA0NjNmNzcwNGVkODMzOTkz')
            .then(res => res.json())
            .then(res => {
                setCompanies(res.companies)
            })
            .catch(err => console.log(err))
    }

    const state = {
        companies,
        loadCompanies
    }

    return (
        <Context.Provider value={{ state }}>
            {children}
        </Context.Provider>
    )
}

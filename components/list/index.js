import React from 'react'
import MUList from '@material-ui/core/List'
import { ListItems } from './../list-item/index';
import { Pagination } from './../pagination/index';
import { useListStyles } from './style';
import { Context } from '../../Context';

export function Lists() {
    const classes = useListStyles()
    const { companies, loadCompanies, nextPage } = React.useContext(Context)

    // React.useEffect(() => {
    //     loadCompanies()
    // }, [])

    return (
        <div >
            <Pagination />
            <MUList >
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
            </MUList>
        </div>
    )
}
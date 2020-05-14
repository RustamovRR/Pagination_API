import React from 'react'
import { CircularProgress } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css'

export function Posts({ data }) {
    return (
        <ul className='list-group'>
            {data.length
                ? data.map((item) => (
                    <li className='list-group-item' key={item.email}>
                        {item.cell} <b>{item.name.title} {item.name.first} {item.name.last}</b> </li>

                ))
                : <CircularProgress />
            }
        </ul>
    )
}

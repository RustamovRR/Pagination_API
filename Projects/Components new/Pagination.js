import React from 'react'


export function Pagination({totalData,dataPerPage}) {
   const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalData/dataPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='pagination mt-3'>
           {
               pageNumbers.map((item)=>(
                   <li key={item} className='page-item'>
                    <a href='#' className='page-link'>{item}</a>
                   </li>
               ))
           } 
        </div>
    )
}
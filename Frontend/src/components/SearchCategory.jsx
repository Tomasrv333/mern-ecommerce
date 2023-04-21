import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const SearchElement = (props) => {
  return (
    <div className='search-element'>
        <span>{props.category}</span>
        <FaTimesCircle/>
    </div>
  )
}

export default SearchElement
import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

import DropDown from './DropDown'

const Search = ({ filterByRegion, filterBySearch }) => {

  return (
    
    <div className=' d-md-flex px-5 py-3 bg-main-color custom-text-white align-items-md-center justify-content-md-between'>
        <form action="" className='position-relative'>
          <BiSearchAlt2 className='fs-1 position-absolute search-icon ms-5'/>
        <input 
         onChange={(event) =>{
          // console.log(event.target.value);
          filterBySearch(event.target.value.trim().toLowerCase())
         }}
        className='w-100 bg-elements custom-text-white border-0 py-3 rounded-2' type="text" placeholder='Search for a Country...' />
        </form>

        <DropDown filterByRegion={filterByRegion}/>

    </div>
  )
}

export default Search
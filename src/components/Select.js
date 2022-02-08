import React from 'react'
import data from './data.json';

function Select() {
    return (
        <div>
            <select >
                <option selected disabled="true" >--select country-- 
                
                </option>
                {
                    data.Countrynames.map((result) => ( <option title= {"country Id : " + result.Id} > { result.Cname }</option>))
 
                }
            </select>
        </div>
    )
}

export default Select

import React, { useState } from 'react';
import SearchResult from './SeacrchResult'
const Search = () => {
    const [img, setimg] = useState('');
    const searchEvent = (e) => {
        const data = e.target.value;
        setimg(data)
    }
    return (<>
        <div className='searchbar'>
            <input type='text' placeholder='Search anything' onChange={searchEvent} value={img} />
            {img===""?null:<SearchResult name={img}/> }
        </div>
        
    </>)
}
export default Search;
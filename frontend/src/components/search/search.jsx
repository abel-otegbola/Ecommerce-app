import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./search.css"

const Search = ({search, setSearch}) => {
    return (
        <div className={`search-bar ${search}`}>
            <div className='search-bar--box'>
                <FontAwesomeIcon icon={faTimes} onClick={() => setSearch("")}/>
                    <input placeholder='Search...' />
                    <FontAwesomeIcon icon={faSearch} className="search-bar__input--icon" />
            </div>
        </div>
    )
}

export default Search;
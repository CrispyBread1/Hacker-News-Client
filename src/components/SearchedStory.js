import React from "react";


const SearchedStory = ({settingSearch}) => {

    const handleChange =function(event) {
        settingSearch(event.target.value)
    }

    return (
        <form>
            <input label="Search" type="text"  placeholder="Search" onInput={handleChange}/>
        </form>
    )
}

export default SearchedStory
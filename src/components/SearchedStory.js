import React from "react";


const SearchedStory = ({settingSearch, foundStory}) => {

    const handleChange =function(event) {
        settingSearch(event.target.value)
    }
    console.log(foundStory)

    return (
        <form>
            <input label="Search" type="text"  placeholder="Search" onChange={handleChange}/>
        </form>
    )
}

export default SearchedStory
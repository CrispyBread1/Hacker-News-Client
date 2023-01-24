import React from "react";
import StoryItem from "./StoryItem";

const StoryList = ({stories}) => {

    const storyItems = stories.map((story , index) => {
        return <StoryItem story={story} key={index}/>
    })


    return (
        <>
            <h2>Story List</h2>
            <ul>
                {storyItems}
            </ul>
        </>
    )
}




export default StoryList
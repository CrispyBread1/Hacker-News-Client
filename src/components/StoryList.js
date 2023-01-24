import React from "react";
import StoryItem from "./StoryItem";

const StoryList = ({stories, foundStory}) => {

    
    const storyItems = stories.map((story , index) => {
        return <StoryItem story={story} key={index}/>
    })

    console.log(foundStory)



    return (
        <>
            <h2>Story List</h2>
            <ul>
                {storyItems}
            </ul>
            <h4>{foundStory.title}</h4>
        </>
    )
}




export default StoryList
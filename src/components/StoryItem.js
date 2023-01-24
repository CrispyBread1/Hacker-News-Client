import React from "react";

const StoryItem = ({story, index}) => {
    return (
        <li>
            {story.title}
        </li>
    )
}

export default StoryItem
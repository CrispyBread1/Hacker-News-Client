import React , {useState, useEffect} from "react";
import StoryList from "../components/StoryList";
import SearchedStory from "../components/SearchedStory";

const StoryContainer = () => {


    const [stories, setStories] = useState([])
    const [foundStory, setFoundStory] = useState([])
    const [searchText, setSearchText] = useState("")
    // const [storyListIds, setStoryListIds] = useState([])
    

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => data.slice(0, 20))
        .then(ids => storyPromises(ids))
        }, [])

    const storyPromises = (ids) => { 
        
        const storyPromise =  ids.map(id => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then (res => res.json())})
        Promise.all(storyPromise)
        .then(data => setStories(data))
    }

    const settingSearch = (search) => {
        setSearchText(search)
        setFoundStory(stories.filter((story) => story.title.includes(searchText)))
    }




    return (
        <>
            <h1>Story Container</h1>
            <SearchedStory settingSearch={settingSearch} foundStory={foundStory}/>
            <StoryList stories={stories} foundStory={foundStory}/>
            
        </>
    )
}
export default StoryContainer
import React from "react";
import VideoListItem from "./videolist_item";
const VideoList= (props)=> {
    const video_items= props.videos.map( (video)=> {
        return <VideoListItem key={video.etag} video ={video}/>
    })

    return(
    <ul className = "col-md-4 list-group">
        {video_items}
    </ul>
    )
}

export default VideoList;
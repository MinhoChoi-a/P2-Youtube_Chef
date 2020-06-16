import React from 'react';

import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <GridList cellHeight={140}>
            <GridListTile cols={2} style={{marginBottom:2}}>
                <img style={{cursor: 'pointer'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} onClick={()=> onVideoSelect(video)}/>        
                <GridListTileBar style={{fontFamily: 'Fredoka One'}}
                    title= {video.snippet.title}/>
            </GridListTile>
        </GridList>
        
    )
}

export default VideoItem
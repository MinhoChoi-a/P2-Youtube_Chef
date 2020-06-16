import React from 'react';

import { Grid, Paper} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    
    if(listOfVideos.length>0){
     
    return (
            <Paper style={{maxHeight: 640, width:'100%', padding:0}}>
                <Grid container direction="column" justify="center" alignItems="center" style={{marginLeft:0, marginRight:0}}>
                    <ArrowDropDownIcon style={{fontSize: 40}}>icon</ArrowDropDownIcon>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" style={{maxHeight: 600, overflow:'auto', marginLeft:0, marginRight:0}}>
                    {listOfVideos}
                </Grid>
            </Paper>
        );
    }

    else
    {
        return (
            <Paper style={{maxHeight: 640, padding:0}}>
                <Grid container direction="column" justify="center" alignItems="center">
                    {listOfVideos}
                </Grid>
            </Paper>
        );
    }


    }

export default VideoList;
import React from 'react';

import { Grid, Container } from '@material-ui/core';

import { VideoDetail, VideoList, Icons } from './components';
//import VideoDetail from './components/VideoDetail';
//import { VideoList } from './components/VideoList';

import youtube from './api/youtube';

class App extends React.Component {
  
  state = {
    videos: [],
    selectedVideo: null,
    term: null,
    size: 12,
  }
  
  onVideoSelect = (video) => {
    this.setState( {selectedVideo: video, term: "video"});
    window.scrollTo({
        top:1,
        left:0,
        behavior: 'smooth'});
  }
  
  handleSubmit = async (searchTerm) => {
    
    const response = await youtube.get('search', {
  
    params: {
      part: 'snippet',
      maxResults: 10,
      key: 'AIzaSyBb7SwJSFqg6mvVHw_py1mll2Lf8asD_RY',
      type: 'video',
      q: searchTerm
  
      }
    });
   
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0], term: searchTerm, size:8 });
    
  }
  
  render () {
    const { selectedVideo, videos, term, size } = this.state;
    
    return(
      <Container fixed>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{maxWidth: 1920, height: '90vh'}}>
          
          <Grid item xs={12}>
            <Icons onFormSubmit={this.handleSubmit}/>
          </Grid>
          
          <Grid item sm={size} xs={12}>
            <VideoDetail video={selectedVideo} term={term} onSubmit={this.handleSubmit}/>
          </Grid>

          <Grid item sm={4} xs={12}>
            <VideoList videos={videos} onVideoSelect= {this.onVideoSelect}/>
          </Grid>
        </Grid>
      </Container>
    )
  }
}


export default App;

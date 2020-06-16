import React  from 'react';

import ReactPlayer from 'react-player';

import { Paper, Grid, Typography, Box, Button } from '@material-ui/core';

import {Table, TableBody, TableCell, TableContainer, TableRow, withStyles } from '@material-ui/core';

import backImage from '../image/back.jpeg';


const StyleTable = withStyles({
  
    root: {
      padding: 0,
      },
    })((props) => <Table {...props} />);

const StyleTableCell = withStyles({

    root: {
        padding: 0,
        margin:0,
        },
    })((props) => <TableCell {...props} />);
    


class VideoDetail extends React.Component {

    state = {
        searchTerm: '',
        topPaper: '30%',
        botPaper: '70%'
        }
    
    handle = async (value) => {
    
    await this.setState({ searchTerm: value});
    
    const { searchTerm } = this.state;
    const { onSubmit } = this.props;
    
    console.log(searchTerm);

    onSubmit(searchTerm);
    
    }
    
        render() {
        
        const {video, term} = this.props;
        
        const {topPaper, botPaper} = this.state;
        

        if(!video) {
            return ( 
                <React.Fragment>
                    <Box display='flex' style={{height:'80vh', maxWidth: 1920}}>
                        <Paper elevation={6} style={{height:'100%', width:'100%', backgroundImage: `url(${backImage})`, backgroundSize: "cover", padding:"20px"}}>
                            
                            <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{width:'100%', marginTop: '20px'}}>
                            <Typography class="first">Welcome to Youtube Chef</Typography></Grid>
                            
                            <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{width:'100%', marginTop: '10px', marginBottom:-20}}>
                            <p className="titleText">Select the country you want</p></Grid>
                            
                            <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{width:'100%', marginTop: '10px'}}>
                            <p className="titleText">Click Youtube video and Try</p></Grid>
                            
                            <Grid container direction="row" justify="center" alignItems="center" style={{width:'100%', maxHeight:'100px', marginTop: '20px'}}>
                                <img className="App-logo" style={{height: '200px'}} alt="logo" src="logo.png"/>
                            </Grid>
                        </Paper>
                    </Box>
                
                    <Box display='flex' style={{position: 'realtive', maxWidth: 1920}}>
                        <Paper elevation={6} 
                            style={{height:'40px', width:'100%', marginTop: '10px'}}>
                                <Grid container style={{height: '40px', backgroundColor: '#C98474', padding: '10px', color:'white'}}>
                            <Typography style={{fontFamily: 'Fredoka One', color: '#3C3C3C'}}>
                                Powered by YOUTUBE + WIKIPEDIA
                            </Typography>
                            </Grid>
                            </Paper>
                    </Box>
                </React.Fragment>
                )
            }
        
        if(term === "KOREA food receipe" || term ==="korea bulgogi receipe" || term ==="korea bibimbap receipe" || term ==="korea Bindaeddeok receipe"
            || term ==="korea dolsotbap receipe" || term ==="korea galbi receipe" || term ==="korea kimbap receipe"
            ) {
            
                return ( 
                    <React.Fragment>
                        <Box display='flex' style={{height:'70%'}}>
                        <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{padding:'20px'}}>
                            
                            <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C'}}>Korean Cuisine</Typography>
                            <p className="text">Korean cuisine is largely based on rice, vegetables, and (at least in the South) meats. 
                                Traditional Korean meals are named for the number of side dishes (반찬; 飯饌; banchan) that accompany steam-cooked short-grain rice. 
                                Kimchi is served at nearly every meal. Commonly used ingredients include sesame oil, doenjang (fermented bean paste), soy sauce, salt, garlic, ginger, gochutgaru (pepper flakes), gochujang (fermented red chili paste) 
                                and napa cabbage.</p>
                            
                            <TableContainer component={Paper} style={{height:'90%', width:'90%'}}>
                                <StyleTable className="kfood" aria-label="kfood">
                                <Grid xs="12" sm="6">
                                    <TableBody>
                                       <TableRow>
                                            <StyleTableCell align="center">
                                                <Button value="korea bulgogi receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/bulgogi.jpg')}/>
                                                </Button>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="korea bibimbap receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/bibimbap.jpg')}/>
                                                </Button>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="korea Bindaeddeok receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/bindae.jpg')}/>
                                                </Button>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="korea dolsotbap receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/dolsot.jpg')}/>
                                                </Button>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="korea galbi receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/galbi.jpg')}/>
                                                </Button>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="korea kimbap receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/kimbap.jpg')}/>
                                                </Button>
                                            </StyleTableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <p className="text">Bulgogi</p>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                            <p className="text">Bibimbap</p>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                            <p className="text">Bindaeddeok</p>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                            <p className="text">Dolsotbap</p>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                            <p className="text">Galbi</p>
                                            </StyleTableCell>
                                            <StyleTableCell align="center">
                                            <p className="text">Kimbap</p>
                                            </StyleTableCell>
                                        </TableRow>
                                    </TableBody>
                                    </Grid>
                                </StyleTable>
                            </TableContainer>
                                
                            
                            
                            
                        </Grid>
                        </Paper>
                        </Box>
                    </React.Fragment>
                    )
                }
            
        else if(term === "CANADA food receipe") {
            
            return ( 
                <React.Fragment>
                    <Box display='flex' style={{height:'70vh'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop:'5%'}}>
                        <Typography variant='subtitle2'>This is Canada</Typography>
                        
                    </Grid>
                    </Paper>
                    </Box>
                </React.Fragment>
                )
            }

        else if(term === "CHINA food receipe") {
    
            return ( 
                <React.Fragment>
                    <Box display='flex' style={{height:'70vh'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop:'5%'}}>
                        <Typography variant='subtitle2'>This is China</Typography>
                        
                    </Grid>
                    </Paper>
                    </Box>
                </React.Fragment>
                )
            }
        
        else if(term === "PHILIPPINES food receipe") {

            return ( 
                <React.Fragment>
                    <Box display='flex' style={{height:'70vh'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop:'5%'}}>
                        <Typography variant='subtitle2'>This is Philippine</Typography>
                        
                    </Grid>
                    </Paper>
                    </Box>
                </React.Fragment>
                )
            }
    
        else if(term === "INDONESIA food receipe") {

            return ( 
                <React.Fragment>
                    <Box display='flex' style={{height:'70vh'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop:'5%'}}>
                        <Typography variant='subtitle2'>This is Indonesia</Typography>
                        
                    </Grid>
                    </Paper>
                    </Box>
                </React.Fragment>
                )
            }
    
        else if(term === "ITALY food receipe") {

            return ( 
                <React.Fragment>
                    <Box display='flex' style={{height:'70vh'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop:'5%'}}>
                        <Typography variant='subtitle2'>This is Italy</Typography>
                        
                    </Grid>
                    </Paper>
                    </Box>
                </React.Fragment>
                )
            }
        else if(term === "FRANCE food receipe") {

            return ( 
                <React.Fragment>
                    <Box display='flex' style={{height:'70vh'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop:'5%'}}>
                        <Typography variant='subtitle2'>This is France</Typography>
                        
                    </Grid>
                    </Paper>
                    </Box>
                </React.Fragment>
                )
            }
        
        
        else if(term === "video") {
            
            const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
            
            return(
                <React.Fragment>
                    <Paper elevation={6} style={{height: '70vh'}}>
                        <Paper style={{height: topPaper, position: 'relative', zIndex:'200', behavior: 'smooth'}}>
                            <Typography variant="h5">{video.snippet.title}</Typography>
                            <Typography variant="subtitle2">{video.snippet.description}</Typography>
                        </Paper>
                        
                        <Paper style={{height: botPaper, position: 'relative', zIndex:'1000', behavior: 'smooth'}}>
                                <ReactPlayer height="100%" width='100%' title="Video Player" onReady= {() => this.setState({topPaper:'30%', botPaper:'70%'})} onStart= {() => this.setState({topPaper: '0%', botPaper:'100%'})} controls={true} url={videoSrc}/>
                            </Paper>
                            
                        </Paper>
                    
                </React.Fragment>
            )
        }

}
}
export default VideoDetail;
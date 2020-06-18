import React  from 'react';

import ReactPlayer from 'react-player';

import { Paper, Grid, Typography, Box, Button } from '@material-ui/core';

import { Table, TableBody, TableCell, TableContainer, TableRow, withStyles } from '@material-ui/core';

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
                            <p className="first">Welcome to Youtube Chef</p></Grid>
                            
                            <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{width:'100%', marginTop: '10px', marginBottom:-20}}>
                            <p className="titleText">Select the country you want<br/>Click Youtube video and Try</p>
                            </Grid>
                            
                            <Grid container direction="row" justify="center" alignItems="center" style={{height: '200px', marginTop: '20px'}}>
                                <img className="App-logo" style={{height: '100%'}} alt="logo" src="logo.png"/>
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
            || term ==="korea dolsotbap receipe" || term ==="korea galbi receipe" || term ==="korea kimbap receipe") 
            
            {
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
                            
                                <TableContainer component={Paper} style={{height:'100%', width:'90%'}}>
                                    <StyleTable className="kfood" aria-label="kfood">
                                        <TableBody>
                                            <TableRow>
                                                <StyleTableCell align="center">
                                                    <Button value="korea bulgogi receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/bulgogi.jpg')}/>
                                                    </Button></StyleTableCell>
                                                <StyleTableCell align="center">
                                                    <Button value="korea bibimbap receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/bibimbap.jpg')}/>
                                                    </Button></StyleTableCell>
                                                <StyleTableCell align="center">
                                                    <Button value="korea Bindaeddeok receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/bindae.jpg')}/>
                                                    </Button></StyleTableCell>
                                                <StyleTableCell align="center">
                                                    <Button value="korea dolsotbap receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/dolsot.jpg')}/>
                                                    </Button></StyleTableCell>
                                                <StyleTableCell align="center">
                                                    <Button value="korea galbi receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/galbi.jpg')}/>
                                                    </Button></StyleTableCell>
                                                <StyleTableCell align="center">
                                                    <Button value="korea kimbap receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                    <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/korea/kimbap.jpg')}/>
                                                    </Button></StyleTableCell>
                                            </TableRow>
                                            <TableRow>
                                                <StyleTableCell align="center">
                                                    <p className="text">Bulgogi</p></StyleTableCell>
                                                <StyleTableCell align="center">
                                                    <p className="text">Bibimbap</p></StyleTableCell>
                                                <StyleTableCell align="center">
                                                    <p className="text">Bindaeddeok</p></StyleTableCell>
                                                <StyleTableCell align="center">
                                                <p className="text">Dolsotbap</p></StyleTableCell>
                                                <StyleTableCell align="center">
                                                <p className="text">Galbi</p></StyleTableCell>
                                                <StyleTableCell align="center">
                                                <p className="text">Kimbap</p></StyleTableCell>
                                            </TableRow>
                                        </TableBody>
                                    </StyleTable>
                                </TableContainer>
                            </Grid>
                        </Paper>
                    </Box>
                </React.Fragment>
            )}
            
        else if(term === "CANADA food receipe" || term ==="canada poutine receipe" || term ==="canada ginger beef receipe" || term ==="canada Montreal style bagels receipe"
        || term ==="canada butter tart receipe" || term ==="canada inuit bannock receipe" || term ==="canada akutaq receipe") 
        
        {
            return ( 
            <React.Fragment>
                <Box display='flex' style={{height:'70%'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{padding:'20px'}}>
                            <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C'}}>Canadian Cuisine</Typography>
                            <p className="text">Canadian cuisine varies widely depending on the regions of the nation. 
                            The four earliest cuisines of Canada have First Nations, English, Scottish and French roots, with the traditional cuisine of English Canada closely related to British cuisine, 
                            while the traditional cuisine of French Canada has evolved from French cuisine and the winter provisions of fur traders. 
                            With subsequent waves of immigration in the 19th and 20th century from Central, Southern, and Eastern Europe, South Asia, East Asia, and the Caribbean, 
                            the regional cuisines were subsequently augmented.</p>
                        
                            <TableContainer component={Paper} style={{height:'100%', width:'90%'}}>
                                <StyleTable className="canadafood" aria-label="canadafood">
                                    <TableBody>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <Button value="canada poutine receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/canada/poutine.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="canada ginger beef receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/canada/beef.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="canada Montreal style bagels receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/canada/mont.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="canada butter tart receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/canada/butter.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="canada inuit bannock receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/canada/inuit.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="canada akutaq receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/canada/akutaq.jpg')}/>
                                                </Button></StyleTableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <p className="text">Poutine</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Ginger Beef</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Montreal-Style Bagels</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Butter-tart</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Inuit Bannock</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Akutaq</p></StyleTableCell>
                                        </TableRow>
                                    </TableBody>
                                </StyleTable>
                            </TableContainer>
                        </Grid>
                    </Paper>
                </Box>
            </React.Fragment>
        )}
        
        else if(term === "CHINA food receipe" || term ==="china lion's head with crab meat receipe" || term ==="china Làzǐ Jī receipe" || term ==="china Stir-fried razor shell receipe"
        || term ==="china Steamed whole perch receipe" || term ==="china Sanbeiji receipe" || term ==="china baozi receipe") 
        
        {
            return ( 
            <React.Fragment>
                <Box display='flex' style={{height:'70%'}}>
                    <Paper elevation={6} style={{height:'100%', width:'100%'}}>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{padding:'20px'}}>
                            <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C'}}>Chinese Cuisine</Typography>
                            <p className="text">Chinese cuisine is an important part of Chinese culture, which includes cuisine originating from the diverse regions of China, as well as from Overseas Chinese who have settled in other parts of the world. Because of the Chinese diaspora and historical power of the country, Chinese cuisine has influenced many other cuisines in Asia, with modifications made to cater to local palates. Chinese food staples such as rice, soy sauce, noodles, tea, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide.</p>
                        
                            <TableContainer component={Paper} style={{height:'100%', width:'90%'}}>
                                <StyleTable className="chinafood" aria-label="chinafood">
                                    <TableBody>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <Button value="china lion's head with crab meat receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/china/lion.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="china Làzǐ Jī receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/china/lazi.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="china baozi receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/china/baozi.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="china Stir-fried razor shell receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/china/stir.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="china Steamed whole perch receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/china/perch.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="china Sanbeiji receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/china/san.jpg')}/>
                                                </Button></StyleTableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <p className="text">Lion's head with crab meat</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Laziji</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Baozi</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Stir-fried razor shell</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Steamed whole perch</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Sanbeiji</p></StyleTableCell>
                                        </TableRow>
                                    </TableBody>
                                </StyleTable>
                            </TableContainer>
                        </Grid>
                    </Paper>
                </Box>
            </React.Fragment>
        )}
        
        
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
                        <Paper style={{height: topPaper, position: 'relative', padding:'20px'}}>
                            <Typography variant="h5">{video.snippet.title}</Typography>
                            <Typography variant="subtitle2">{video.snippet.description}</Typography>
                        </Paper>
                        
                        <Paper style={{height: botPaper, position: 'relative'}}>
                            <ReactPlayer height="100%" width='100%' title="Video Player" onReady= {() => this.setState({topPaper:'30%', botPaper:'70%'})} onStart= {() => this.setState({topPaper: '0%', botPaper:'100%'})} controls={true} url={videoSrc}/>
                        </Paper>
                    </Paper>
                    
                </React.Fragment>
            )
        }

    }
}
export default VideoDetail;
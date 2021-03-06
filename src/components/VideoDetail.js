import React  from 'react';

import ReactPlayer from 'react-player';

import { Paper, Grid, Typography, Box, Button, Container  } from '@material-ui/core';

import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

import {makeStyles, withStyles } from '@material-ui/core';

import styled from 'styled-components';

import propTypes from 'prop-types';

import backImage from '../image/back.jpeg';

const StyleTable = styled.div`
      padding: 0;
      
    `;

    /**
const useStyles = makeStyles({
        root: {
          background: (props) =>
            props.color === 'red'
              ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
              : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: (props) =>
            props.color === 'red'
              ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
              : '0 3px 5px 2px rgba(33, 203, 243, .3)',
          color: 'white',
          height: 40,
          width: 104,
          padding: '0 30px',
          margin: 2,
        },
      });
 */   

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
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{width: '100%', height: '85vh', margin: 0}}>
                    
                        <Paper elevation={6} sm="12"
                        style={{height:'80%', width: '100%', backgroundImage: `url(${backImage})`, backgroundSize: "cover", padding:"20px", textAlign:"center"}}>
                            
                            <p className="first">Welcome to Youtube Chef</p>
                            <p className="titleText">Select the country you want<br/>Click Youtube video and Try</p>
                            <img className="App-logo" alt="logo" src={require('../image/logo.png')}/>
                        
                        </Paper>
                    
                        <Paper elevation={6} 
                        style={{height:'40px', width:'100%', marginTop: '10px'}}>
                            <Grid container style={{height: '40px', backgroundColor: '#C98474', padding: '10px'}}>
                                <Typography style={{fontFamily: 'Fredoka One', color: '#3C3C3C'}}>
                                    Powered by YOUTUBE + WIKIPEDIA
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </React.Fragment>
                )
            }
        
        if(term === "KOREA food receipe" || term ==="korea bulgogi receipe" || term ==="korea bibimbap receipe" || term ==="korea Bindaeddeok receipe"
            || term ==="korea dolsotbap receipe" || term ==="korea galbi receipe" || term ==="korea kimbap receipe") 
            
            {
                return ( 

                <React.Fragment>
                    <Box display='flex'>
                        <Paper className="title" elevation={6}>
                            <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C', paddingLeft: '10px'}}>Korean Cuisine</Typography>
                            <div className='des'>
                                <p className="text">Korean cuisine is largely based on rice, vegetables, and (at least in the South) meats. 
                                Traditional Korean meals are named for the number of side dishes (반찬; 飯饌; banchan) that accompany steam-cooked short-grain rice. 
                                Kimchi is served at nearly every meal. Commonly used ingredients include sesame oil, doenjang (fermented bean paste), soy sauce, salt, garlic, ginger, gochutgaru (pepper flakes), gochujang (fermented red chili paste) 
                                and napa cabbage.</p></div>
                                
                            <TableContainer className="rep-cuisine" component={Paper}>
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
                    
                        </Paper>
                    </Box>
                </React.Fragment>
            )}
            
        else if(term === "CANADA food receipe" || term ==="canada poutine receipe" || term ==="canada ginger beef receipe" || term ==="canada Montreal style bagels receipe"
        || term ==="canada butter tart receipe" || term ==="canada inuit bannock receipe" || term ==="canada akutaq receipe") 
        
        {
            return ( 
            <React.Fragment>
                <Box display='flex'>
                    <Paper className="title" elevation={6}>
                        <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C', paddingLeft: '10px'}}>Canada Cuisine</Typography>
                        <div className='des'>
                            <p className="text">Canadian cuisine varies widely depending on the regions of the nation. 
                            The four earliest cuisines of Canada have First Nations, English, Scottish and French roots, with the traditional cuisine of English Canada closely related to British cuisine, 
                            while the traditional cuisine of French Canada has evolved from French cuisine and the winter provisions of fur traders. 
                            With subsequent waves of immigration in the 19th and 20th century from Central, Southern, and Eastern Europe, South Asia, East Asia, and the Caribbean, 
                            the regional cuisines were subsequently augmented.</p></div>
                        
                        <TableContainer className="rep-cuisine" component={Paper}>
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
                    </Paper>
                </Box>
            </React.Fragment>
        )}
        
        else if(term === "CHINA food receipe" || term ==="china lion's head with crab meat receipe" || term ==="china Làzǐ Jī receipe" || term ==="china Stir-fried razor shell receipe"
        || term ==="china Steamed whole perch receipe" || term ==="china Sanbeiji receipe" || term ==="china baozi receipe") 
        
        {
            return ( 
            <React.Fragment>
                <Box display='flex'>
                    <Paper className="title" elevation={6}>
                        <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C', paddingLeft: '10px'}}>Chinese Cuisine</Typography>
                        
                        <div className='des'>
                        <p className="text">Chinese cuisine is an important part of Chinese culture, which includes cuisine originating from the diverse regions of China, as well as from Overseas Chinese who have settled in other parts of the world. Because of the Chinese diaspora and historical power of the country, Chinese cuisine has influenced many other cuisines in Asia, with modifications made to cater to local palates. Chinese food staples such as rice, soy sauce, noodles, tea, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide.</p></div>
                        
                        <TableContainer className="rep-cuisine" component={Paper}>
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
                    </Paper>
                </Box>
            </React.Fragment>
        )}
        
        
        else if(term === "PHILIPPINES food receipe" || term ==="philippines pinakbet receipe" || term ==="philippines tapsilog receipe" || term ==="philippines puto receipe"
        || term ==="philippines kare-kare receipe" || term ==="philippines crispy pata receipe" || term ==="philippines Ensaladang Lato receipe") 
        
        {
            return ( 
            <React.Fragment>
                <Box display='flex'>
                    <Paper className="title" elevation={6}>
                            <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C', paddingLeft: '10px'}}>Filipino Cuisine</Typography>
                            
                            <div className='des'>
                                <p className="text">Filipino cuisine (Filipino: lutuing Pilipino/pagkaing Pilipino) is composed of the cuisines of more than a hundred distinct ethno-linguistic groups found throughout the Philippine archipelago. However, a majority of mainstream Filipino dishes that compose Filipino cuisine are from the cuisines of the various ethnolinguistic groups and tribes of the archipelago, including the Ilocano, Pangasinan, Kapampangan, Tagalog, Bicolano, Visayan (Cebuano, Hiligaynon and Waray), Chavacano and Maranao ethno-linguistic groups. The style of food making and the food associated with it have evolved over many centuries from their Austronesian origins (shared with Malaysian and Indonesian cuisines) to a mixed cuisine of Indian, Chinese, Spanish and American influences, in line with the major waves of influence that had enriched the cultures of the archipelago, as well as others adapted to indigenous ingredients and the local palate.</p></div>
                         

                            <TableContainer className="rep-cuisine" component={Paper}>
                                <StyleTable className="philippinesfood" aria-label="philippinesfood">
                                    <TableBody>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <Button value="philippines pinakbet receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/pina.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines tapsilog receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/tapsilog.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines puto receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/puto.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines kare-kare receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/kare.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines crispy pata receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/pata.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines Ensaladang Lato receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/lato.jpg')}/>
                                                </Button></StyleTableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <p className="text">Pinakbet</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Tapsilog</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Puto</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Kare-kare</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Crispy Pata</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Ensaladang Lato </p></StyleTableCell>
                                        </TableRow>
                                    </TableBody>
                                </StyleTable>
                            </TableContainer>
                      </Paper>
                </Box>
            </React.Fragment>
        )}
        
        else if(term === "INDONESIA food receipe") {

            return ( 
                <React.Fragment>
                   <Box display='flex'>
                        <Paper className="title" elevation={6}>
                            <Typography variant='subtitle1' style={{fontFamily: 'Fredoka One', color: '#3C3C3C', paddingLeft: '10px'}}>This is Indonesia</Typography>
                            <div className="des">
                                <p className="text">Indonessia cuisine : need to update</p></div>
                            
                            <TableContainer className="rep-cuisine" component={Paper}>
                                <StyleTable className="philippinesfood" aria-label="philippinesfood">
                                    <TableBody>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <Button value="philippines pinakbet receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/pina.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines tapsilog receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/tapsilog.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines puto receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/puto.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines kare-kare receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/kare.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines crispy pata receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/pata.jpg')}/>
                                                </Button></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <Button value="philippines Ensaladang Lato receipe" onClick = { e => this.handle(e.currentTarget.value) }>
                                                <img style={{cursor: 'pointer'}} alt="kfood" src={require('../image/philippines/lato.jpg')}/>
                                                </Button></StyleTableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyleTableCell align="center">
                                                <p className="text">Pinakbet</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Tapsilog</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Puto</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Kare-kare</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Crispy Pata</p></StyleTableCell>
                                            <StyleTableCell align="center">
                                                <p className="text">Ensaladang Lato </p></StyleTableCell>
                                        </TableRow>
                                    </TableBody>
                                </StyleTable>
                            </TableContainer>
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
                        <Paper style={{height: topPaper, position: 'relative', paddingLeft: '10px', paddingRight: '10px'}}>
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
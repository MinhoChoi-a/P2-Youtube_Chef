import React from 'react';

import { AppBar, Toolbar, IconButton, Grid, Button, Typography, Drawer } from '@material-ui/core';

/** Styles sample code
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

function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};
 */

/**
const StyleLabel = withStyles({
    root:{
      background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
      boxShadow:'0 3px 5px 2px rgba(255, 105, 135, .3)',
      border: 0,
      borderRadius: 3,
      color: 'white',
      height: 40,
      width: 72,
      padding: '0 30px',
      margin: 2,
    },
    label: {
      fontSize: 12
    }
})((props) => <FormControlLabel {...props} />);

const StyleRadio = withStyles({
  
  root: {
    width: 0,
    opacity:0,
    marginRight:10,
    marginLeft: -20,
    },
  
  icon: {
    width:1
  },

  checked:{
    opacity:100,
  }

})((props) => <Radio {...props} />);

*/

class Icons extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      drawerOpened: false,
      title: 'SELECT'
      }
  }
  
    toggledrawer = booleanValue => () => {
      this.setState({
        drawerOpened: booleanValue
      });
    };

    handle = async (value) => {
        
      await this.setState({ searchTerm: value, drawerOpened: false, title: value.substr(0,value.indexOf(' '))});

      const { searchTerm } = this.state;
      const { onFormSubmit } = this.props;
      
      onFormSubmit(searchTerm);

    }
    
    render() {
      
      const {title} = this.state;
      
      return (
        <div className="App">
        <AppBar position="static" style={{backgroundColor: '#C98474', paddingLeft:'20px'}}>
          <Toolbar>
            <Button onClick={this.toggledrawer(true)} style={{outline: 'none'}}>
              <Typography style={{fontFamily: 'Fredoka One', color: '#3C3C3C', fontSize: '30px'}}>
                {title}
              </Typography>
            </Button>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Button style={{fontFamily: 'Fredoka One', color: '#3C3C3C', outline: 'none'}}>
                MINHOCHOI PROJECT
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={this.state.drawerOpened} onClose={this.toggledrawer(false)} 
          ModalProps={{keepMounted: true}}>
        
            <div onKeyDown={this.toggledrawer(false)} style={{width:'200px', padding:'20px'}}>
              <Grid container direction="column" justify="center" alignItems="flex-start">
                <Button value="KOREA food receipe" onClick = { e => this.handle(e.currentTarget.value)} style={{fontFamily:'Fredoka One'}}> KOREA </Button>
                <Button value="CANADA food receipe" onClick = { e => this.handle(e.currentTarget.value)} style={{fontFamily:'Fredoka One'}}>CANADA </Button>
                <Button value="CHINA food receipe" onClick = { e => this.handle(e.currentTarget.value)} style={{fontFamily:'Fredoka One'}}>CHINA </Button>
                <Button value="PHILIPPINES food receipe" onClick = { e => this.handle(e.currentTarget.value) } style={{fontFamily:'Fredoka One'}}>PHILIPPINES </Button>
                <Button value="INDONESIA food receipe" onClick = { e => this.handle(e.currentTarget.value) } style={{fontFamily:'Fredoka One'}}>INDONESIA </Button>
                <Button value="ITALY food receipe" onClick = { e => this.handle(e.currentTarget.value) } style={{fontFamily:'Fredoka One'}}>ITALY </Button>
                <Button value="FRANCE food receipe" onClick = { e => this.handle(e.currentTarget.value) } style={{fontFamily:'Fredoka One'}}>FRANCE </Button>
              </Grid>
           </div>
        
        </Drawer>
        </div>
      );
    }
 }

 export default Icons;
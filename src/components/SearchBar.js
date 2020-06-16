import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    
    handleChange = (e) => this.setState({ searchTerm: e.target.value });

    handleSubmit = (event) => {
            
            console.log(this.state);

            const { searchTerm } = this.state;
            const { onFormSubmit } = this.props;
        
            onFormSubmit(searchTerm);

            event.preventDefault();
        }
    

    render() {
        return(
            <Paper elevation={4} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange = {this.handleChange}/>
                </form>
            </Paper>

            
        )
    }
}

export default SearchBar;
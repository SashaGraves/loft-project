import React from 'react';
import logo from 'logo-taxi-dark.svg';
import {AuthContext} from '../AuthContext';
import {Paper, Link, Button, Grid} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

class Header extends React.Component {
    
    styles = {
        link: {
            margin: '0 10px',
            color: 'black',
            textTransform: 'capitalize',
        },
        container: {
            height: 80,
        },
        buttons: {
            padding: 20,
            textAlign: 'right',
        }
    }
    
    render() {
        return (
            <header>
                <Paper elevation={3}>
                    <Grid container style={this.styles.container}>
                        <Grid item xs={2}>
                            <img src={logo} width="156" />
                        </Grid>
        
                        <Grid item xs={10} style={this.styles.buttons}>
                            <nav>
                                <Button href="#" onClick={() => this.context.changePage("PROFILE")} style={this.styles.link}>Профиль</Button>
                                <Button href="#" onClick={() => this.context.changePage("MAP")} style={this.styles.link}>Карта</Button>
                                
                                {
                                    this.context.isLoggedIn ? 
                                    <Button href="#" onClick={this.context.logout} style={this.styles.link}>Выйти</Button>
                                    :
                                    <Button href="#" onClick={() => this.context.changePage("LOGIN")} style={this.styles.link}>Войти</Button>
                                }
                                
                            </nav>
                        </Grid>
                    </Grid>
                </Paper>
            </header>
        );
    }
};


Header.contextType = AuthContext;
export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'logo-taxi-dark.svg';
import {Paper, Button, Grid} from '@material-ui/core';
import { ArrowRight, LinkOff } from '@material-ui/icons';

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
                    Header
                    Не забудь подключить обратно SignUp в App.js!
                    {/* <Grid container style={this.styles.container}>
                        <Grid item xs={2}>
                            <img src={logo} width="156" />
                        </Grid>
        
                        <Grid item xs={10} style={this.styles.buttons}>
                            <nav>
                                <Button style={this.styles.link} component={Link} to="/profile">Профиль</Button>
                                <Button to="/map" style={this.styles.link} component={Link}>Карта</Button>
                                
                                {
                                    this.context.isLoggedIn ? 
                                    <Button href="#" onClick={this.context.logout} style={this.styles.link}>Выйти</Button>
                                    :
                                    <Button to="/login" style={this.styles.link} component={Link}>Войти</Button>
                                }
                                
                            </nav>
                        </Grid>
                    </Grid> */}
                </Paper>
            </header>
        );
    }
};


export default Header;
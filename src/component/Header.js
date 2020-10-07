import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from 'logo-taxi-dark.svg';
import {Paper, Button, Grid} from '@material-ui/core';
import {logout} from 'store.js';

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
                            <img src={logo} width="156" alt="Loft-taxi logo" />
                        </Grid>
        
                        <Grid item xs={10} style={this.styles.buttons}>
                            <nav>
                                <Button component={Link} to="/profile" style={this.styles.link}>Профиль</Button>
                                <Button component={Link} to="/map" style={this.styles.link}>Карта</Button>
                                
                                {
                                    this.props.isLoggedIn ? 
                                    <Button onClick={this.props.logout} style={this.styles.link}>Выйти</Button>
                                    :
                                    <Button component={Link} to="/login" style={this.styles.link}>Войти</Button>
                                }
                                
                            </nav>
                        </Grid>
                    </Grid>
                </Paper>
            </header>
        );
    }
};


const mapStateToProps = store => ({
    isLoggedIn: store.isLoggedIn,
});

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func,
}

export default connect(mapStateToProps, {logout})(Header);
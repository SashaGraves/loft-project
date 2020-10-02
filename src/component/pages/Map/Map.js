import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
// import MapboxDirections from 'mapbox/mapbox-gl-directions';
import {token} from 'constants.js';
import {Paper, Typography, Button, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Addresses from './Addresses';
import { connect } from 'react-redux';

mapboxgl.accessToken = token;

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 59.943,
            lng: 30.308,
            zoom: 12.53,
            map: null,
        };
        this.drawRoute = this.drawRoute.bind(this);
    }

    // var mapboxgl = require('mapbox-gl');
    // var MapboxDirections = require('@mapbox/mapbox-gl-directions');

//     var directions = new MapboxDirections({
//     accessToken: 'YOUR-MAPBOX-ACCESS-TOKEN',
//     unit: 'metric',
//     profile: 'mapbox/cycling'
//     });

//     var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9'
//     });

// map.addControl(directions, 'top-left');

    drawRoute = (map, coordinates) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15
        });
        
        map.on('load', function () {map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                }
            },
            layout: {
            "line-join": "round",
            "line-cap": "round"
            },
            paint: {
            "line-color": "#ffc617",
            "line-width": 8
            }
        });})
    };

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        this.setState({map});
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        map.on('load', function () {
            map.flyTo({
                center: [59.935,30.322],
                zoom: 15
            });

            map.addLayer({
                id: "route",
                type: "line",
                source: {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates: [[59.935,30.322], [59.935,30.362],]
                        }
                    }
                },
                layout: {
                "line-join": "round",
                "line-cap": "round"
                },
                paint: {
                "line-color": "#ffc617",
                "line-width": 8
                }
            });
            console.log('Map route');
        })
    }

    componentWillUnmount() {
        this.state.map.remove();
    }

    render() {
        const styles = {
            container: {
                position: 'relative',
                zIndex: '-10',
            },

            typography: {
                marginBottom: 20,
            },

            button: {
                backgroundColor: '#ffc617',
                textTransform: 'none',
                margin: '15px auto',
            },

            paper: {
                padding: '35px 20px',
                top: 0,
                left: 20,
                position: 'absolute',
                maxWidth: '30%',
            }, 

            map: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: 873,
            }
           
        }

        
        return (
            <div style={styles.container}>
                <div style={styles.map} ref={el => this.mapContainer = el} />

                {this.props.cardNumber
                ?
                <Addresses />
                : 
                <Paper style={styles.paper}>
                    <Typography variant="h4" gutterBottom>Заполните платежные данные</Typography>
                    <Typography variant="body1" gutterBottom>Укажите информацию о банковской карте, чтобы сделать заказ.</Typography>
                    <Button component={Link} to="/profile" style={styles.button}>Перейти в профиль</Button>
                </Paper>
                }
            </div>
        );
    }
}

const mapStateToProps = store => ({
    cardNumber: store.card.cardNumber,
    addressFrom: store.addresses.address1,
    addressTo: store.addresses.address2,
})

Map.propTypes = {
    cardNumber: PropTypes.string,
    addressFrom: PropTypes.string,
    addressTo: PropTypes.string,
}

export default connect(mapStateToProps)(Map);
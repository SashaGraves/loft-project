import React from 'react';
import mapboxgl from 'mapbox-gl';
import {token} from 'constants.js';

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
    }

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
    }

    componentWillUnmount() {
        this.state.map.remove();
    }

    render() {
        const style = {
            position: 'absolute',
            top: 82,
            bottom: 0,
            width: '100%'
        };
      
        return (
            <div style={style} ref={el => this.mapContainer = el} />
        );
    }
}

export default Map;
import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FzaGEtZ3JhdmVzIiwiYSI6ImNrZjVlY3dvMTBtOXQyem1kd2kxeGlha2YifQ.4h4RYOVB0aR8aUH5c2eJcg';


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 59.943,
            lng: 30.308,
            zoom: 12.53
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%'
        };
      
        return (
            <div style={style} ref={el => this.mapContainer = el} />
        );
    }
}

export default Map;
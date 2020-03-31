import React, { Component } from 'react';
import { Card , CardHeader ,CardBody , Row , Col } from 'reactstrap';
//import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

const ktposition = [7.9524403, 99.1440787];
//For Maker Work
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class LeafletMap extends Component {
    render() {
        return (
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>Klongthom Maps</CardHeader>
                            <CardBody>
                                <div> 
                                    <Map 
                                        center={ktposition} 
                                        zoom={13} 
                                        style={{ width: '100%', height: '580px' }}
                                    >
                                        <TileLayer 
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                        >             
                                        </TileLayer>

                                        <Marker position={[7.9525503, 99.1541887]} draggable = {true}  >
                                            <Popup>draggable Marker<br />Marker can move</Popup>
                                        </Marker>

                                        <Marker position={ktposition} draggable = {false} >
                                            <Popup>โรงพยาบาลคลองท่อม<br />Marker of KlongthomHospital</Popup>
                                        </Marker>
                                    </Map>                                  
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>                
            </div>
        );
    }
}

export default LeafletMap;
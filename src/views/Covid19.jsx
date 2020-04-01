import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col, CardTitle ,CardFooter } from 'reactstrap';

class Covid19 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemsCovid: [],
        }
      }

      componentDidMount() {
        axios.get('https://covid19.th-stat.com/api/open/today')
        .then(response => {
          this.setState({ itemsCovid: response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }



    render() {
        const { itemsCovid } = this.state;
        return (
            <div className="content">
                <Row>
                    {/* CARD1 */}
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-danger">
                                            <i className="fas fa-procedures text-danger "></i>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category text-danger">ติดเชื้อสะสม</p>
                                            <CardTitle tag="p">{itemsCovid.Confirmed}</CardTitle>
                                        </div>
                                    </Col> 
                                </Row>                                                               
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i class="nc-icon nc-circle-10 text-danger"> เพิมขึ้น ({itemsCovid.NewConfirmed} คน)</i>                                        
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>

                    {/* CARD2 */}
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-success">
                                            <i className="fas fa-procedures text-success "></i>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category text-success">หายแล้ว</p>
                                            <CardTitle tag="p">{itemsCovid.Recovered}</CardTitle>
                                        </div>
                                    </Col> 
                                </Row>                                                               
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i class="nc-icon nc-check-2 text-success"> เพิมขึ้น ({itemsCovid.NewRecovered} คน)</i>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>

                    {/* CARD3 */}
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="fas fa-procedures text-warning "></i>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category text-warning">รักษาอยู่ใน รพ.</p>
                                            <CardTitle tag="p">{itemsCovid.Hospitalized}</CardTitle>
                                        </div>
                                    </Col> 
                                </Row>                                                               
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i class="nc-icon nc-alert-circle-i text-warning"> เพิมขึ้น ({itemsCovid.NewHospitalized} คน)</i>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>

                    {/* CARD4 */}
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center">
                                            <i className="fas fa-procedures"></i>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">เสียชีวิต</p>
                                            <CardTitle tag="p">{itemsCovid.Deaths}</CardTitle>
                                        </div>
                                    </Col> 
                                </Row>                                                               
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i class="nc-icon nc-alert-circle-i"> เพิมขึ้น ({itemsCovid.NewDeaths} คน)</i>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    
                </Row>                
            </div>            
          )
    }
}

export default Covid19;


// class Covid19 extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             users: []
//         };
//     }

//     componentDidMount(){
//     const url = `${API_URL}/users/`;
//     axios.get(url).then(response => response.data)
//     .then((data) => {
//       this.setState({ users: data })
//       console.log(this.state.users)
//      })
//     }

//     render() {
//         return (
//             <div className="content">
//                <div className="col-xs-8">
//                     <h1>React Axios Example</h1>
//                     {this.state.users.map((user) => (
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">{user.name}</h5>
//                             <h6 className="card-subtitle mb-2 text-muted">
//                             {user.email}             
//                             </h6>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//             </div>            
//           )
//     }
// }

// export default Covid19;
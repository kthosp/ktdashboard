import React, { Component } from 'react';
//axios get API
import axios from 'axios';
// reactstrap components
// import { 
//     Card, 
//     CardHeader, 
//     CardBody, 
//     Row, 
//     Col, 
//     CardTitle ,
//     CardFooter 
// } from 'reactstrap';

class Covid19Krabi extends Component {

    constructor(props) {
        super(props);
        this.state = {
          krabiCovid19: [],          
        }
      }

      componentDidMount() {
        axios.get('https://covid19.th-stat.com/api/open/cases' ,{
            responseType: 'json'
        }).then(response => {
          this.setState({ krabiCovid19: response.data});
        // this.setState({ krabiCovid19: response.data.Data[0].Province});
        // console.log(response.data.Data[0].Province);          
        })
        .catch(error => {
          console.log(error);
        });
      }


    render() {

        const { krabiCovid19 } = this.state;
        
        // if (!this.state.krabiCovid19.Data) {
        //     return <span>Loading...</span>;
        // }

        return (
            <div className="content">

                {/* {krabiCovid19.Data} */}

                {/* {this.state.krabiCovid19.Data[1].Province} */}
                <hr />

                <p>LastData : {krabiCovid19.LastData}</p>
                <p>Source : {krabiCovid19.Source}</p>
                <p>DevBy : {krabiCovid19.DevBy}</p>
                <p>SeverBy : {krabiCovid19.SeverBy}</p>
                <hr /> 
                <p>{JSON.stringify(krabiCovid19.Data)}</p>                

            </div>
        );
    }
}

export default Covid19Krabi;
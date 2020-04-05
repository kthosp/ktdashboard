import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
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
import columns from '../components/Covid19KrabiDataColumn'; //Colums Data ที่จะเอาไปแสดงใน Component DataTable

class Covid19Krabi extends Component { 

  constructor(props) {
      super(props);
      this.state = {
        allData: [],          
      }
    }

    componentDidMount() {
      const api = 'https://covid19.th-stat.com/api/open/cases';
      axios.get(api,{responseType: 'json'}).then(response => {
          this.setState({ allData: response.data}); //setState ใส่ข้อมูลจากAPIเข้าไป
        // this.setState({ krabiCovid19: response.data.Data[0].Province});
        // console.log(response.data.Data[0].Province);          
        })
        .catch(error => {//ดักError
          console.log(error);
        });
    }   
    

  render() {         
      const { allData } = this.state; //ประกาศด้วยว่าเป็นState จึงจะเรียกใช้Stateได้

      if (!this.state.allData) {// เขียนIf ดักก่อน ถ้าไม่มีข้อมูลให้แสดงเป็นLoading
        return <div className="content">
                  <span>Loading...</span>
              </div>
      }
      // const keyKrabiCovid19 = allData.Data//.map(n => [n.No]) 
      // console.log(keyKrabiCovid19); 
      console.log(allData.Data);

      //map Example
      // const array1 = [1, 4, 9, 16];
      // const map1 = array1.map(x => x * 2);
      // console.log(map1);

      return (
          <div className="content">          

            <hr />
            UpdateDate : {allData.UpdateDate} <br />
            Source : {allData.Source} <br />
            DevBy : {allData.DevBy} <br />
            SeverBy : {allData.SeverBy}
            <hr />
            {/* {JSON.stringify(allData)} */}
            <DataTable
              title="Covid19 KRABI"
              columns={columns} //import comlums มาจากข้างบนนะ
              data={allData.Data} //เลือก object Data ในjson API
              pagination={true}
              // conditionalRowStyles={conditionalRowStyles}
            />
          </div>
      );
  }
}



// class Covid19Krabi extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           krabiCovid19: [],          
//         }
//       }
//       componentDidMount() {
//         axios.get('https://covid19.th-stat.com/api/open/cases' ,{
//             responseType: 'json'
//         }).then(response => {
//           this.setState({ krabiCovid19: response.data});
//         // this.setState({ krabiCovid19: response.data.Data[0].Province});
//         // console.log(response.data.Data[0].Province);          
//         })
//         .catch(error => {
//           console.log(error);
//         });
//       }
//     render() {
//         const { krabiCovid19 } = this.state;        
//         // if (!this.state.krabiCovid19.Data) {
//         //     return <span>Loading...</span>;
//         // }
//         return (
//             <div className="content">
//                 {/* {krabiCovid19.Data} */}
//                 {/* {this.state.krabiCovid19.Data[1].Province} */}
//                 <hr />
//                 <p>LastData : {krabiCovid19.LastData}</p>
//                 <p>Source : {krabiCovid19.Source}</p>
//                 <p>DevBy : {krabiCovid19.DevBy}</p>
//                 <p>SeverBy : {krabiCovid19.SeverBy}</p>
//                 <hr /> 
//                 <p>{JSON.stringify(krabiCovid19.Data)}</p>              
//             </div>
//         );
//     }
// }


export default Covid19Krabi;
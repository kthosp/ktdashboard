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
        allData: [] ,
        nData : [] , 
        kData :[]       
      }
    }

    componentDidMount() {
      const api = 'https://covid19.th-stat.com/api/open/cases';
      axios.get(api,{responseType: 'json'}).then(response => {
          this.setState({ 
            allData: response.data ,
            nData : response.data.Data.map(key => [key.ProvinceEn,key.District]),//ตัวอย่างการใช้ map แสดงข้อมูล
            kData : response.data.Data.filter(Data => Data.ProvinceEn==="Krabi")//ตัวอย่างการใช้ filter ข้อมูล ที่ fetch มาจากAPI
          }); //setState ใส่ข้อมูลจากAPIเข้าไป
        // this.setState({ krabiCovid19: response.data.Data[0].Province});
        // console.log(response.data.Data[0].Province);          
        })
        .catch(error => {//ดักError
          console.log(error);
        });
    }   
    

  render() {         
      const { allData ,
              // nData , 
              kData
            } = this.state; //ประกาศด้วยว่าเป็นState จึงจะเรียกใช้Stateได้

      if (!this.state.allData || !this.state.kData) {// เขียนIf ดักก่อน ถ้าไม่มีข้อมูลให้แสดงเป็นLoading
        return <div className="content">
                  <span>Loading...</span>
              </div>
      }     
      // console.log(allData);
      // console.log(nData);
      // console.log(kData);
      console.log(kData.length);
      
      //map Example
      // const array1 = [1, 4, 9, 16];
      // const map1 = array1.map(x => x * 2);
      // console.log(map1);

      return (
          <div className="content"> 
            <p>อ้างอิงจาก : <a href={allData.Source}  rel="noopener noreferrer" target ="_blank"> {allData.Source}</a></p>    
            <p>ข้อมูล ณ วันที่ : {allData.UpdateDate}</p>            
                <DataTable
                  title={"ผู้ติดเชื้อของจังหวัดกระบี่ จำนวน "+kData.length+" ราย"}
                  columns={columns} //import comlums มาจากข้างบนนะ
                  data={kData} // State kData
                  pagination = {true}
                  paginationPerPage = {15}
                  paginationComponentOptions={{                
                    rowsPerPageText: 'จำนวนข้อมูลต่อ หน้า' , 
                    rangeSeparatorText: 'จากทั้งหมด'
                  }}
                  //conditionalRowStyles={conditionalRowStyles}
                /> <br />
                UpdateDate : {allData.UpdateDate} <br />
                Source : {allData.Source} <br />
                DevBy : {allData.DevBy} <br />
                SeverBy : {allData.SeverBy}
                <hr />
                            
                {/* {JSON.stringify(allData)} */}
                <p>อ้างอิงจาก : <a href="https://data.go.th/dataset/covid-19-daily"> https://data.go.th/dataset/covid-19-daily</a></p>
                <p>ข้อมูล ณ วันที่ : {allData.UpdateDate}</p>
                <DataTable
                  title="Covid19 Thailand"
                  columns={columns} //import comlums มาจากข้างบนนะ
                  data={allData.Data} //เลือก object Data ในjson API
                  pagination = {true}
                  paginationPerPage = {50}
                  paginationRowsPerPageOptions = {[10, 20, 30 , 40 , 50 ,100]}
                  paginationComponentOptions={{                
                    rowsPerPageText: 'จำนวนข้อมูลต่อ หน้า' , 
                    rangeSeparatorText: 'จากทั้งหมด'
                  }}
                  // conditionalRowStyles={conditionalRowStyles}
                /><br />
                UpdateDate : {allData.UpdateDate} <br />
                Source : {allData.Source} <br />
                DevBy : {allData.DevBy} <br />
                SeverBy : {allData.SeverBy}
                <hr />
          </div>
      );
  }
}
export default Covid19Krabi;
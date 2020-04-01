import React, { Component } from 'react';

class AxiosExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imageURL: '',
        }
      }

      componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          this.setState({ imageURL: response.data.message });
        })
        .catch(error => {
          console.log(error);
        });
      }


    render() {
        const { imageURL } = this.state;
        return (
            <div className="content">
               <img src={imageURL} />
            </div> 
        );
    }
}

export default AxiosExample;
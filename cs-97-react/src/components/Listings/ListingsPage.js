import React from 'react';
import ReactDOM from 'react-dom';
import { stringify } from 'query-string';
import axios from 'axios';
class ListingsPage extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {listingsArray:null};
        
    }

    componentDidMount()
    {
        axios.get('http://localhost:5000/listings/all',  {withCredentials:true})
              .then(response => {
                this.setState({ listingsArray: response});
              })
              .catch(err => {
                  console.log(err);
        })
    
    }

    render(){
       const rows = []; 
    //    if(this.state.listingsArray)
    //    {
    //     this.state.listingsArray.forEach(element => {
    //         rows.push(<Listing item={element}> </Listing>);
    //     });
    //    }

       return (<div>{rows}</div>);
    }


}




class Listing extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return(
        
        
        <p>
        <div>-----------------------------------------------</div>
        <div>item name: {this.props.item.item}</div>
        <div>address: {this.props.item.address}</div>
        <div>contact: {this.props.item.name}</div>
        <div>item quantity: {this.props.item.quantity}</div>
        <button></button>
        </p>  
        
        );
    }
}


export default ListingsPage;
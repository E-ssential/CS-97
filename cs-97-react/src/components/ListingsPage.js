import React from 'react';
import ReactDOM from 'react-dom';
import { stringify } from 'query-string';

class ListingsPage extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {listingsArray:null};
        
    }

    componentDidMount()
    {
            fetch('/listings/')
                .then(response => response.json())
                .then(response => {
                    this.setState({ listingsArray: response});
                    console.log(this.state.listingsArray[0].name);
                });

            console.log(this.state.listingsArray)
    
    }

    render(){
       const rows = []; 
       if(this.state.listingsArray)
       {
        this.state.listingsArray.forEach(element => {
            rows.push(<Listing item={element}> </Listing>);
        });
       }

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
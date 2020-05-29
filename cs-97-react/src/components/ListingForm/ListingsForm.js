import React from 'react';
import io from 'socket.io-client';
import './ListingForm.css';
import { Link } from 'react-router-dom';


class ListingsForm extends React.Component {
    constructor(props) {
      super(props);
      var labels = ["name", "item", "quantity", "address"];
      var labelsToVals= labels.map((label)=>{return ("")});  
      this.state = {data: labelsToVals, changes:0};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
     handleChange(event, label) {
      //var labelToVals = this.state.data;
       this.state.data[label] = event.target.value;
       

    }
  
    handleSubmit(event) {   
            alert('A name was submitted: ' + this.state.data["name"]
        
        
            +'\nAn item was submitted: ' + this.state.data["item"]
    
        
            +'\nA quantity was submitted: ' + this.state.data["quantity"]
       
        
            +'\nA address was submitted: ' + this.state.data["address"]);


            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(
                    {name:this.state.data["name"], 
                    item:this.state.data["item"], 
                    quantity:this.state.data["quantity"], 
                    address:this.state.data["address"]})
              };
              fetch('/listings', requestOptions)
                  .then(response => response.json())
                  .then(response => this.setState({ apiResponse: response}));
     

        event.preventDefault();
      
    }
    render() {
      return (

        <div className='outer-listing'>
          
          <div className='listing-heading'>
              <h1> Listing Form</h1>
          <div className='listingBut'> 
          {/* <form onSubmit={this.handleSubmit}> */}
         
           


 
         <form onSubmit={this.handleSubmit}>

          <div>   


          <label>
            Name                  
            <input type="text" value={this.state.data['name']} onChange={(e) => this.handleChange(e, 'name')} />
          </label>
          
          </div>     

          <div>     
          <label>
            Item      
            <input type="text" value={this.state.data["item"]} onChange={(e) => this.handleChange(e, 'item')} />
          </label>
          
          </div>     

          <div >     
          <label>
            Quantity      
            <input type="integer" value={this.state.data["item"]} onChange={(e) => this.handleChange(e, 'quantity')} />
          </label>
          
          </div>     

          <div className="listings-info">     
           <label>
            Address     
            <input type="text" value={this.state.data["item"]} onChange={(e) => this.handleChange(e, 'address')} />
           </label>
          
          </div>     
          
          <button type="submit">Submit
          {/* <input type="submit" value="Submit" />  */}
          </button>
          <div>
          <Link to='/login' >
                        Already have an account? Login
          </Link>
          </div>

          <div> or </div>


          <div>
          <Link to='/signUp' >
                        Don't have an account? Sign Up
          </Link>
          </div>
         
         
          </form>
          
          
         
          </div>
          </div>
         

        </div>

      );
    }
  }
  
export default ListingsForm;
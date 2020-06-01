import React, { useState, useEffect }from 'react';
import './ListingForm.css';
import axios from 'axios';

const ListingsForm = ({isAuth, userData}) => {

    const [user, setUser] = useState(userData[1]);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    useEffect( () => {
      console.log(isAuth);
      console.log(userData);

  }, [])

    const onSubmit = (e) => {   
      e.preventDefault();

        const requestOptions = 
        {user, 
        item, 
        quantity, 
        address};
        

        //TODO put the axios config in a different folder
        axios.post('http://localhost:5000/listings/add', requestOptions, {withCredentials:true})
              .then(res => {
                  setStatus(res.data);
                  console.log(status);
              })
              .catch(err => {
                  setStatus(err.response.data);
        })
        
      
      
    }
    
      return (

        <div className='outer-listing'>
          
          <div className='listing-heading'>
              <h1> Listing Form</h1>
          <div className='listingBut'> 
          {/* <form onSubmit={this.handleSubmit}> */}
         
           


         <form onSubmit={onSubmit}>

          <p>{status}</p>
          <div>     
          <label>
            Item      
            <input type="text"  onChange={(event) => setItem(event.target.value)} />
          </label>
          
          </div>     

          <div >     
          <label>
            Quantity      
            <input type="integer"  onChange={(event) => setQuantity(event.target.value)} />
          </label>
          
          </div>     

          <div className="listings-info">     
           <label>
            Address     
            <input type="text"  onChange={(event) => setAddress(event.target.value)} />
           </label>
          
          </div>     
          
          <button type="submit">Submit
         
          </button>
         
         
          </form>
          
          
         
          </div>
          </div>
         

        </div>

      );
    
  }
  
export default ListingsForm;
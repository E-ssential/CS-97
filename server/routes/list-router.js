const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');
const Listing = require('../schemes/Listing');
const mongoose = require('mongoose');
//Listing storage
const file = './data/listings.json';
var listings = jsonfile.readFileSync(file);

//Add new listing

router.post( "/add", ( req , res  ) => {
    
    const { user, item, quantity, address } = req.body;

  const newListing = new Listing({
    username:user,
    item:item,
    quantity:quantity,
    address: address
  });

  newListing.save()
  .then(
    listing => {
      return res.status(200).send(`You successfully added ${quantity} ${item}!`);
    }
  )
  .catch(
    err => {
      console.log(err);
      var errStr = err.message.split(': ')[2];
      return res.status(400).send(errStr);
    }
  )

} );

router.post('/searchItems', (req, res) => {
     Listing.find(req.body)
     .then(
       (listings) => {
         for(let i = 0; i < listings.length; i++){
           listings[i] = JSON.stringify(listings[i]);
         }
         return res.status(200).json(listings);
       }
     )
     .catch( err => {
      console.log(err);
       return res.status(400).send("No Result");
     }) 
}
)

router.post('/deleteItem', (req, res) => {
  Listing.findById(req.body.ID)
  .remove()
  .then(
    ok => {
      return res.status(200).send('Item Successfully Removed.');
    }
  )
  .catch(
    err => {
      console.log(err);
      return res.status(400).send("ID Not Found.");
    }
  )
  
  






})



module.exports = router;
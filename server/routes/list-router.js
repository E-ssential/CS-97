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
      return res.status(200).send(`You successfully added ${quantity} ${item}`);
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

router.get('/all', (req, res) => {
     Listing.find({})
     .then(
       (listings) => {
         for(let i = 0; i < listings.length; i++){
           listings[i] = JSON.stringify(listings[i]);
           console.log(listings[i]);
         }
         return res.status(200).json(listings);
       }
     )
    
    
}
)

router.get("/:item", (req, res) => {
    let { item } = req.params;

    let targetItem = listings.find( (v) => v.item.toString() == item);


    return res.status(200)
              .json(item);

})

module.exports = router;
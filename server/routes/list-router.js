const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');

//Listing storage
const file = './data/listings.json';
var listings = jsonfile.readFileSync(file);

//Add new listing

router.post( "/", ( req , res  ) => {
    
    const { user, item, quantity, address } = req.body;
    console.log(user);
    console.log(item);
    console.log(quantity);
    console.log(address);
  if (!user || !quantity || !item || !address ) {

    return res.status(400)
    .json({error:"All fields must be filled out"});        
  }  

   const newListing = {user:"test1234", item:"AKAK", quantity:3, address:"Space"};
  listings.push(newListing);

  jsonfile.writeFileSync(file, listings, 
    (err) => {
    if (err) console.error(err)
  });
  
  return res.status(200).send("hello");
} );

router.get('/all', (req, res) => {
    listingsArr = jsonfile.readFileSync(file);  
    console.log(listingsArr);
    return res.status(200)
      .send(listingsArr);
}
)

router.get("/:item", (req, res) => {
    let { item } = req.params;

    let targetItem = listings.find( (v) => v.item.toString() == item);


    return res.status(200)
              .json(item);

})

module.exports = router;
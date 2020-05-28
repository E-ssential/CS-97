
express = require('express');
var bodyParser = require('body-parser')



const jsonfile = require('jsonfile');
const file = './listings.json';
var listings = jsonfile.readFileSync(file);

(async () => {
  const app = express(); 
  const port = 8082; 
  
  
  app.use(bodyParser.json()); 


  app.get( "/", ( req, res) => {
    res.status(200).send("you made a get request to the server without any params");
  } );

  //return listings for a specific item
  app.get( "/listings/:item", 
    ( req, res  ) => {
      let { item } = req.params;

      let targetItem = listings.find( (v) => v.item.toString() == item);


      return res.status(200)
                .send(`${JSON.stringify(item)}`);
  } );

  // return all the listings
  app.get( "/listings/", ( req , res  ) => {
    listingsArr = jsonfile.readFileSync(file);  
    console.log(listingsArr);
    return res.status(200)
      .send(JSON.stringify(listingsArr));
    } );

  // add new listing
  app.post( "/listings", 
    async ( req , res  ) => {

      const { name, item, quantity, address } = req.body;

      if (!name || !quantity || !item || !address ) {

        return res.status(400)
        .send(`All Listing attributes are required.`);        
      }  

      const newListing = {name:name, item:item, quantity:quantity, address:address};
      listings.push(newListing);
      jsonfile.writeFileSync(file, listings, function (err) {
        if (err) console.error(err)
      });
      
      return res.status(200)
                .send(`${JSON.stringify(newListing)}`);
  } );

  
  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();

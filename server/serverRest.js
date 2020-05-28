
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

  // Add an endpoint to GET a list of cars
  // it should be filterable by make with a query paramater
  // app.get( "/addresses", 
  //   async ( req , res  ) => {

  //     console.log("get /address");
  //     let { city } = req.query;

  //     if ( !city ) {
  //       return res.status(200)
  //                 .send(`${JSON.stringify(adds)}`);
  //     }

  //     let address = adds.find((value  , index , obj ) => value.city == city);

  //     if (! address) {
  //       return res.status(404)
  //                 .send(`Address in city not found`);        
  //     }

  //     return res.status(200)
  //               .send(`Address ${JSON.stringify(address)} found for city ${city}!`);
  // } );

  // // Add an endpoint to get a specific car
  // // it should require id
  // // it should fail gracefully if no matching car is found
  // app.get( "/addresses/:id", 
  // async ( req , res  ) => {

  //   console.log("get /address/:id");

  //   let { id } = req.params;

  //   // id can't be null, so no need to check.

  //   let address  = adds.find((value , index , obj ) => value.id.toString() == id );

  //   if (! address) {
  //     return res.status(400)
  //               .send(`Address with Id ${id} not found`);        
  //   }

  //   return res.status(200)
  //             .send(`Address ${JSON.stringify(address)} found for Id ${id}!`);
  // } );  

  // /// Add an endpoint to post a new car to our list
  // // it should require id, type, model, and cost
  // app.post( "/addresses", 
  // async ( req , res  ) => {

  //   let { id, city, state, street} = req.body;
  //   console.log(`id ${id} ${city} ${state} ${street}`);

  //   if (!id || !city || !state || !street) {

  //     return res.status(400)
  //     .send(`All Address attributes id, city, state, street are required.`);        
  //   }

  //   const address   = { id:id, city:city, state:state, street:street} ;

  //   adds.push(address); 

  //   return res.status(200)
  //             .send(`Address ${JSON.stringify(address)} added!`);
  // } ); 

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();

import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "aman 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "https://via.placeholder.com/150",
    },
  ];
   
  //http://localhost:3000/api/products?search=metal

   if(req.query.search){
    const filterProducts = products.filter(products => products.name.includes (req.query.search))
    res.send(filterProducts);
    return;
   }


  setTimeout(() =>{ 
    res.send(products);
  }, 3000)

});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Products = [
  {
    name: "Iphone 15",
    description: "256gb pink",
    price: "$1028",
    image: "iphone-15.jpg",
  },
];

const ShopItems = () => {
  return (
    <div>
      {Products.map((eachcard) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={eachcard.image} />
            <Card.Body>
              <Card.Title>{eachcard.name}</Card.Title>
              <Card.Text>{eachcard.description}</Card.Text>
              <Card.Text>{eachcard.price}</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ShopItems;

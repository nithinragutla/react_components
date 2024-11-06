import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  "./fake.css"


function Fakeapi() {
    var [a, seta] = useState(0)
    var [b, setb] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((val) => val.json())
            .then((res) => {
                setb(res)
            })
    }, [])
    

    var a = b.map((val, ind) => {

        return (
            <>
       <Card className="text-center">
      <Card.Header className="n">{val["id"]}</Card.Header>
      <Card.Body className="n2">
      <Card.Title>{val["category"]}</Card.Title>
      <img src={val["image"]} width={200} alt="img" />
        <Card.Title>{val["title"]}</Card.Title>
        <Card.Text className="r">
          {val["description"]}
        </Card.Text>
        <Card.Text>
          {val["price"]}
        </Card.Text>
        <Button variant="primary">see more</Button>
      </Card.Body>
      <Card.Footer className="n3">{val["rating"]["rate"]}</Card.Footer>
     </Card>
    

</>
    )
})


    return (
        <>
            <h1>fakestoreapi</h1>
            <div className="n1">{a}</div>
        </>
    )
}
export default Fakeapi;
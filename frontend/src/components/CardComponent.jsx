import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import {Link, useNavigate} from 'react-router-dom';

function CardComponent(props) {

  const navigate = useNavigate();


  const [threat,setThreat]=useState(false);
  useEffect(() => { 
    if(props.carNo === "WB32AP1234"){
      setThreat(true);
    }
    return () => {
    }
  }, [props.store])
  
  let btnStyle={
    border: 'solid',
    color: "white",
  }
  let btnStyleFalse={
    border: 'solid',
    color:'grey'
  }

  const handleClick = ()=>{
    navigate(`track/${props.carNo}`, {state:{carNo:props.carNo}});
  }


  return (
    <Card style={{ width: '18rem' , margin: '1rem' , display: 'inline-block'}}>
      <Card.Body className={threat ?'bg-danger' : 'bg-light'}>
        <Card.Title>{props.carNo}</Card.Title>
        <Card.Subtitle className="mb-2 ">{threat ?'Threat Detected' : 'No Threat Detected'}</Card.Subtitle>
        <Card.Text>
          The vehicle is in {props.location}.
        </Card.Text>
        <Card.Link onClick={handleClick} href="#" className='btn ' style={threat?btnStyle:btnStyleFalse}>Track Vehicle</Card.Link>
        {threat? <Card.Link href="tel:112" className='btn bg-light'> Call SOS </Card.Link> : ""}
        
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
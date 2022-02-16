import React from "react";
import { Row, Col } from "react-bootstrap";
import stylesEvents from "../events.module.css";
import Axios from 'axios'
import stylesDepPage from "../Departments.module.css";
import { useEffect, useState } from "react";
import TopTitle from "../topTitle";
import EventsCard from "./EventsCard";
import { Link } from "react-router-dom";
import Spinner from "../ClipLoader/Spinner";
export default function Events(props) {
  const [EventsLists, setEventsList] = useState([])
  const [Loaded, setLoaded] = useState(false);
 /*  const [startDate, setStartDate]=useState(new Date()); */
  useEffect(() => {
  Axios.get("http://localhost/api/Events").then((response)=>{
    setLoaded(true)
    setEventsList(response.data);
  
  
  }
  
  ).catch(err=>{
   
  })
      
  }, [])

  return ( <div className={stylesEvents.root}>
    { Loaded ?  
      <div>
      <TopTitle title={"Events"}/>
  <Row className={`g-4 ${stylesDepPage.root}`}>

    {EventsLists.length>0? EventsLists.map((val)=>{return <Col key={val.EID} xs={12} sm={12}md={6}>
   
        <EventsCard  className={stylesDepPage.Col} date={val.EDate} Photos={val.EPhotos} paragraph={val.EParagraph} title={val.ETitle} text2={val.EParagraph} src={val.EID}  img={`/events/${val.ECover} `}  />
      </Col>})  
:<div></div>} 
      </Row>
   </div>
 
    :<Spinner/>}
{/*       <Row className={`g-4 ${stylesDepPage.root}`}>
 <Col xs={12} sm={12}md={6}>
        <EventsCard className={stylesDepPage.Col} date={"18/11/2021"}  title={"Meeting Session"} text2={"A meeting session with Lebanese industrialists at SCMP"} src={"Events/e1"} img={"/events/ev1-9.jpg"} />
      </Col>
      <Col xs={12} sm={12}md={6}>
        <EventsCard className={stylesDepPage.Col} date={"23/11/2021"} src={"Events/e3"} title={'Coffee Factory, Doueir'}  text={"A site visit to a regular and instant coffee factory to be built in Nabatiyeh-Toul area; concrete works did start."} text2={"A site visit to a regular and instant coffee factory to be built in Nabatiyeh-Toul area; concrete works did start."} img={"/events/ev2-4.jpg"} />
      </Col>

      <Col xs={12} sm={12}md={6}>
        <EventsCard className={stylesDepPage.Col} date={"23/11/2021"}  src={"Events/e2"} title={'Industrial Complex, Taybeh'}  text={"Site visit to a complex of four industrial buildings under construction that will concentrate on manufacturing food, water and cleaning supplies."} text2={"Site visit to a complex of four industrial buildings under construction that will concentrate on manufacturing food, water and cleaning supplies."} img={"/events/ev3-1.jpg"} />
      </Col>
      <Col xs={12} sm={12}md={6}>
        <EventsCard className={stylesDepPage.Col} date={"17/12/2021"}  src={"Events/e4"} title={'Fomatex Mattress Factory, Sareen'}  text={"A visit to Fomatex Mattress Factory in Sareen, Bekaa.  We also inspected few vacant warehouses that belong to the same company for possible future collaboration."} text2={"A visit to Fomatex Mattress Factory in Sareen, Bekaa.  We also inspected few vacant warehouses that belong to the same company for possible future collaboration."} img={"/events/ev4-1.jpg"} />
      </Col>
      <Col xs={12} sm={12}md={6}>
        <EventsCard className={stylesDepPage.Col} date={"16/12/2021"}  src={"Events/e5"} title={'A visit to Assaf Mill, Al-Musayleh'}  text={"The aim of the visit was to check on the existing facilities and equipment, as well as possibility of collaboration."} text2={"The aim of the visit was to check on the existing facilities and equipment, as well as possibility of collaboration."} img={"/events/e5-3.jpg"} />
      </Col>
      </Row> */}
 </div>
  );
}

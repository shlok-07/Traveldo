import React from 'react';
import './Searchpage.css';
import Header from './Header';
import Footer from './Footer';
import { Button } from "@material-ui/core";
import Searchresultcomponent from './Searchresultcomponent';


function Searchpage() {
  return (
    <>
      <Header />
      <div className='searchpage'>
        <div className='searchpage__info'>
          <p>62 stays . 26 august to 30 august . 2 guest</p>
          <h1>Stays nearby</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of Place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and beds</Button>
          <Button variant="outlined">More filters</Button>
        </div>
      </div>
      <Searchresultcomponent img="https://www.7applehotels.com/assets/img/stay/image_2020-01-29-08-14-58_5e313f025a114.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="1 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4.73} price="3000 rupees/night" total="8000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" loaction="Private room in center of London" title=" a room with a queen-sized bed. " description="1 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4.73} price="3000 rupees/night" total="8000 rupees" />
      <Searchresultcomponent img="https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc=" loaction="Private room in center of London" title=" a room with two twin-sized beds." description="3 guest .3 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen  " star={3} price="4000 rupees/night" total="9000 rupees" />
      <Searchresultcomponent img="https://i0.wp.com/businessday.ng/wp-content/uploads/2022/02/Hotel-room-1.png?fit=700%2C400&ssl=1" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="2 guest .2 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4} price="3400 rupees/night" total="7000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUheq3Cp6_lXNYMJEy21gNJBnUvEqZGDCaGOZj234wyBUNCsGHfNA8beYSr-m0Sma8eE&usqp=CAU" loaction="Private room in center of London" title=" Stay at this beautiful House" description="4 guest .3 bedroom . 1bed.1.5 shared bathrooms . kitchen . free parking " star={4.7} price="3040 rupees/night" total="6000 rupees" />
      <Searchresultcomponent img="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__340.jpg" loaction="Private room in center of London" title=" Stay at this spacious  House" description="6 guest .3 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4.70} price="2040 rupees/night" total="3000 rupees" />
      <Searchresultcomponent img="https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347__340.jpg" loaction="Private room in center of London" title=" Stay at this spacious loren House" description="2 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={2} price="9000 rupees/night" total="10000 rupees" />
      <Searchresultcomponent img="https://media.istockphoto.com/photos/seaview-bedroom-picture-id492189224?k=20&m=492189224&s=612x612&w=0&h=6ZyIXu3KK9H18JHC93bX--aQA9tRk57N6wqlwsEeyIg=" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="3 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . free parking " star={3} price="5030 rupees/night" total="6000 rupees" />
      <Searchresultcomponent img="https://thumbs.dreamstime.com/b/hotel-room-22008848.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="4 guest .12 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4} price="9300 rupees/night" total="10000 rupees" />
      <Searchresultcomponent img="https://thumbs.dreamstime.com/b/hotel-room-27254393.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="1 guest .1 bedroom . 1bed.1.5 shared bathrooms  . kitchen . free parking " star={1} price="4400 rupees/night" total="5000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAPIHz_VUXmUwohH7lRXq-ggtOG5mTmbsCQ&usqp=CAU" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="3 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={2.4} price="7600 rupees/night" total="8000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2oJr8oZY0uNl5esuMyJSXHOLlFXaNeL5fw&usqp=CAU" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="5 guest .2 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={3.8} price="4000 rupees/night" total="5000 rupees" />
      <Searchresultcomponent img="https://www.7applehotels.com/assets/img/stay/image_2020-01-29-08-14-58_5e313f025a114.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="1 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4.73} price="3000 rupees/night" total="8000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="1 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4.73} price="3000 rupees/night" total="8000 rupees" />
      <Searchresultcomponent img="https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc=" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="3 guest .3 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen  " star={3} price="4000 rupees/night" total="9000 rupees" />
      <Searchresultcomponent img="https://i0.wp.com/businessday.ng/wp-content/uploads/2022/02/Hotel-room-1.png?fit=700%2C400&ssl=1" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="2 guest .2 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4} price="3400 rupees/night" total="7000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUheq3Cp6_lXNYMJEy21gNJBnUvEqZGDCaGOZj234wyBUNCsGHfNA8beYSr-m0Sma8eE&usqp=CAU" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="4 guest .3 bedroom . 1bed.1.5 shared bathrooms . kitchen . free parking " star={4.7} price="3040 rupees/night" total="6000 rupees" />
      <Searchresultcomponent img="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__340.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="6 guest .3 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4.70} price="2040 rupees/night" total="3000 rupees" />
      <Searchresultcomponent img="https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347__340.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="2 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={2} price="9000 rupees/night" total="10000 rupees" />
      <Searchresultcomponent img="https://media.istockphoto.com/photos/seaview-bedroom-picture-id492189224?k=20&m=492189224&s=612x612&w=0&h=6ZyIXu3KK9H18JHC93bX--aQA9tRk57N6wqlwsEeyIg=" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="3 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . free parking " star={3} price="5030 rupees/night" total="6000 rupees" />
      <Searchresultcomponent img="https://thumbs.dreamstime.com/b/hotel-room-22008848.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="4 guest .12 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={4} price="9300 rupees/night" total="10000 rupees" />
      <Searchresultcomponent img="https://thumbs.dreamstime.com/b/hotel-room-27254393.jpg" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="1 guest .1 bedroom . 1bed.1.5 shared bathrooms  . kitchen . free parking " star={1} price="4400 rupees/night" total="5000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAPIHz_VUXmUwohH7lRXq-ggtOG5mTmbsCQ&usqp=CAU" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="3 guest .1 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={2.4} price="7600 rupees/night" total="8000 rupees" />
      <Searchresultcomponent img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2oJr8oZY0uNl5esuMyJSXHOLlFXaNeL5fw&usqp=CAU" loaction="Private room in center of London" title=" Stay at this spacious Edwardian House" description="5 guest .2 bedroom . 1bed.1.5 shared bathrooms . wifi . kitchen . free parking " star={3.8} price="4000 rupees/night" total="5000 rupees" />
      <Footer />
    </>
  )
}

export default Searchpage;
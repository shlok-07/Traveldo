import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" title="Online Experiences" description="Unique activities we can do together,led by a world of hosts" />
        <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" title="Unique Stays" description="spaces that are more than just a place to sleep." />
        <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" title="Entire homes" description="Comfortable private places,with room for friends or family." />
      </div>
      <div className='home__section'>
        <a href="https://www.airbnb.co.in/rooms/42665596?adults=1&category_tag=Tag%3A8538&children=0&infants=0&check_in=2022-07-16&check_out=2022-07-23&federated_search_id=957a8200-02be-46d0-9821-0d91f0080618&source_impression_id=p3_1652632312_cLEpcsyQeE17Bk9W"><Card src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" title="Private room in bed and breakfast" description=" amazing sights of London with stunning penthouse" price="5000 Rupees/night" /></a>
        <a href="https://www.airbnb.co.in/rooms/51477381?check_in=2022-06-01&check_out=2022-06-02&federated_search_id=8069a35e-fe1f-42fa-809a-b7b5bf435b9e&source_impression_id=p3_1652633181_tTacmLYaRZbOCtdi"><Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" title="Beachside Home by Town Centre" description="Unique activities we can do together,led by a world of hosts" price="4644 Rupees/night" /></a>
        <a href="https://www.airbnb.co.in/rooms/26042659?check_in=2022-06-01&check_out=2022-06-02&federated_search_id=662a7b4f-c072-409e-b1be-0175c14d2853&source_impression_id=p3_1652633414_bYoUuUudW67MIKFh"><Card src="https://media.nomadicmatt.com/2018/apartment.jpg" title="Relax in Leslieville" description="Private room in townhouse hosted by Michael" price="2000 Rupees/night" /></a>
      </div>
      <div className='home__section'>
        <a href="https://www.airbnb.co.in/rooms/30983200?check_in=2022-06-01&check_out=2022-06-02&federated_search_id=60c27cae-c75d-4b0a-a10c-202fcd0e57f9&source_impression_id=p3_1652633744_lVuFfAn2WlrOyK4C"><Card src="https://www.hilton.com/im/en/PNQCICI/1381918/pnqcici-pool-night.jpg?impolicy=crop&cw=7360&ch=3929&gravity=NorthWest&xposition=0&yposition=491&rw=800&rh=427" title="The Orchard Cottage" description="Entire guest house hosted by Emily" price="₹8,117
  Rupees/night"/></a>
        <a href="https://www.airbnb.co.in/rooms/51477381?check_in=2022-06-01&check_out=2022-06-02&federated_search_id=8069a35e-fe1f-42fa-809a-b7b5bf435b9e&source_impression_id=p3_1652633181_tTacmLYaRZbOCtdi"><Card src="https://r1imghtlak.mmtcdn.com/d4a3f10e433f11ea88c10242ac110004.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,16&output-format=jpg" title="Beachside Home by Town Centre" description="Unique activities we can do together,led by a world of hosts" price="4644 Rupees/night" /></a>
        <a href="https://www.airbnb.co.in/rooms/26042659?check_in=2022-06-01&check_out=2022-06-02&federated_search_id=662a7b4f-c072-409e-b1be-0175c14d2853&source_impression_id=p3_1652633414_bYoUuUudW67MIKFh"><Card src="https://ellaahotel.com/wp-content/uploads/2022/03/Group-53.jpg" title="Relax in Leslieville" description="Private room in townhouse hosted by Michael" price="2000 Rupees/night" /></a>
      </div>
    </div>
  )
}

export default Home
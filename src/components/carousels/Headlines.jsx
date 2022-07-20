import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { headlinesresult } from '../api';



function Headlinescarousel() {
    const [headlines, setheadlines] = useState([])
    useEffect(() => {
        headlinesresult().then((res) => {
            setheadlines(res.articles)
            console.log(res.articles)
        })
    
    },[])
    
    


  return (
      <Carousel>

       
          {
              headlines.map((ele) => {
                  return  <Carousel.Item>
              <h3>{ele.title}</h3>
          </Carousel.Item>
              })
    }     
      </Carousel>
  
      
  );
}

export default Headlinescarousel;
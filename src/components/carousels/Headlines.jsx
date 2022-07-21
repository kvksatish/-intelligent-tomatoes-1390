import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { headlinesresult } from '../api';
import "./heading.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { faPause } from "@fortawesome/free-solid-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons"



function Headlinescarousel() {

    const [pause, setpause] = useState(false)

    const col = useRef(null)
    console.log(col)

    const [headlines, setheadlines] = useState([])
    useEffect(() => {
        headlinesresult().then((res) => {
            setheadlines(res.articles)
            //console.log(res.articles)
        })

    }, [])

    const handlepause = () => {
        setpause(!pause)
        if (pause) {

            for (var key in col.current.element) {
                if (col.current.element.hasOwnProperty(key)) {
                    col.current.element[key].memoizedProps.onMouseOver()
                    break;
                }
            }


        }
        else {
            for (var key in col.current.element) {
                if (col.current.element.hasOwnProperty(key)) {

                    col.current.element[key].memoizedProps.onMouseOut()
                    break;
                }
            }
        }

    }


    return (
        <div className='slidersbox'>
            <Carousel interval={1500} ref={col} controls={false} indicators={false} className="cc">
                <Carousel.Item>
                    qwertyuiop
                </Carousel.Item>
                <Carousel.Item>
                    asdfghjkl;
                </Carousel.Item>
                <Carousel.Item>
                    zxcvbnm,.
                </Carousel.Item>
                <Carousel.Item>
                    xdcfgvhbjqwertyuiopqwertyuio
                </Carousel.Item>

                {/* {
              headlines.map((ele) => {
                  return  <Carousel.Item>
              {ele.title}
          </Carousel.Item>
              })
    }      */}
            </Carousel>


            <div className="navbtns" >
                <FontAwesomeIcon onClick={() => col.current.prev()} style={{ fontSize: "20px", cursor: "pointer" }} icon={faCaretLeft} />


                {
                    pause ?

                        <FontAwesomeIcon onClick={handlepause} className="pause" icon={faPause} />
                        :
                        <FontAwesomeIcon onClick={handlepause} className="pause" icon={faPlay} />
                }

                <FontAwesomeIcon onClick={() => col.current.next()} style={{ fontSize: "20px", cursor: "pointer" }} icon={faCaretRight} />
            </div>
        </div>);
}

export default Headlinescarousel;
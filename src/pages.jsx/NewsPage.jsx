import React, { useEffect, useState } from 'react'
import { newsresult } from '../components/api'
import NewsReader from './NewsReader'
import BigNews from './BigNews'
import { Spinner } from '@chakra-ui/react'
import { useParams } from "react-router-dom"

const NewsPage = () => {
    const [data, setdata] = useState([])
    const [load, setload] = useState(false)
    const [nf, setnf] = useState(false)



    let { news } = useParams()
    //console.log(news)
    useEffect(() => {
        setload(false)
        setnf(false)
        newsresult(news).then((res) => {

            console.log(res, res.articles.length)
            if (res.articles.length > 0) {
                setdata(res.articles)
                setload(true)
            }
            else {
                setnf(true)
            }
        })
    }, [news])

    return (
        <div>
            {
                load ? <div style={{ textAlign: "left" }} >
                    {<>
                        <h1 style={{ fontWeight: "600", fontSize: "1.5rem", marginTop: "0.8rem", marginBottom: "0.8rem" }} > {news.toUpperCase()}</h1>
                        <div className='divhr' ></div>
                    </>

                    }
                    <BigNews data={data[1]} />

                    {
                        data.map((ele) => {
                            return <NewsReader key={ele.title} data={ele} />
                        })
                    }
                </div>
                    :
                    <>
                        {
                            nf ? <h1 style={{ fontSize: "3rem" }} >404 Error News Not Found</h1> : <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                                mt="50"
                            />
                        }
                    </>}

        </div>
    )
}

export default NewsPage
import React, { useEffect, useState } from 'react'
import { newsresult } from '../components/api'
import NewsReader from './NewsReader'
import BigNews from './BigNews'
import { Spinner } from '@chakra-ui/react'
import { useParams } from "react-router-dom"

const NewsPage = () => {
    const [data, setdata] = useState([])
    const [load, setload] = useState(false)



    let { news } = useParams()
    console.log(news)
    useEffect(() => {
        setload(false)
        newsresult(news).then((res) => {
            setdata(res.articles)
            console.log(res)
            setload(true)
        })
    }, [news])

    return (
        <div>
            {
                load ? <div>

                    <BigNews data={data[1]} />
                    {
                        data.map((ele) => {
                            return <NewsReader key={ele.title} data={ele} />
                        })
                    }
                </div>
                    : <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                        mt="50"
                    />}

        </div>
    )
}

export default NewsPage
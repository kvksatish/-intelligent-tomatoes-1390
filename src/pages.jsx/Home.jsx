import React, { useEffect, useState } from 'react'
import { newsresult } from '../components/api'
import NewsReader from './NewsReader'
import BigNews from './BigNews'
import { Spinner } from '@chakra-ui/react'


const Home = () => {
  const [data, setdata] = useState([])
  const [load, setload] = useState(false)

  useEffect(() => {
    setload(false)
    newsresult("headlines").then((res) => {
      setdata(res.articles)
      console.log(res)
      setload(true)
    })
  }, [])

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

export default Home
import React, { useContext, useEffect, useState } from 'react'
import { DtrnContext } from '../context/DtrnContext'
import styles from "./desc.module.css"

const DescPage = () => {
    //const [data, setdata] = useState()
    const [load, setload] = useState(false)
    const { datatr } = useContext(DtrnContext)
    let data = (datatr[datatr.length - 1])
    // console.log(datatr, data, "desc")
    useEffect(() => {
        window.scrollTo(0, 0)
        setload(false)
        if (datatr !== undefined || datatr.length !== 0) {
            setload(true)
            console.log(datatr.length)
        }
    }, [datatr])




    return (
        <div>
            {load ?
                <div className={styles.cont} >
                    <h1 className={styles.title} >{data.title}</h1>
                    <h2 className={styles.description} >{data.description}</h2>
                    <div className={styles.sources} >Sources: {data.source.name}

                        <span>|</span> <a href={data.source.url}>{data.source.url}</a>
                        <span>|</span> Published At:{data.publishedAt} </div>
                    <div className={styles.bgdiv}  >
                        <div className={styles.bgimgdiv} > <img src={data.image} alt="" /></div>
                    </div>
                    <div className={styles.imgbtmtxt} >File Photo</div>
                    <div className={styles.content} >
                        {data.content}
                    </div>

                </div>
                : <h1 style={{ fontSize: "3rem" }} >404 Error News Not Found</h1>}
        </div>
    )
}

export default DescPage

// {
//     nf ? <h1 style={{ fontSize: "3rem" }} >404 Error News Not Found</h1> : <Spinner
//         thickness='4px'
//         speed='0.65s'
//         emptyColor='gray.200'
//         color='blue.500'
//         size='xl'
//         mt="50"
//     />
// }



// content: "Follow us on Image Source : BCCI Team India celebrates wicket of West indies batter\nAfter winning the first ODI, the Shikhar Dhawan-led team will again look to make a statement as India will aim to clinch the ODI series against West Indies on Sunday.... [1898 chars]"
// description: "The ODI series will be followed by a five-match T20I series starting on 29th July."
// image: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/07/fytecgwuyaewzmu-1658574045.jpg"
// publishedAt: "2022-07-23T11:02:10Z"
// source: { name: 'India TV News', url: 'https://www.indiatvnews.com' }
// title: "IND vs WI, 2nd ODI: Team India aim to fix middle-order woes, eye series win against West Indies"
// url
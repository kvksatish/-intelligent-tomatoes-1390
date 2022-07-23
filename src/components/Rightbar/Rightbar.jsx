import React, { useContext, useEffect, useState } from 'react'
import { DtrnContext } from '../../context/DtrnContext'
import { useNavigate } from "react-router-dom"
import DataShowerRB from './DataShowerRB'
import "./dsrb.css"
import { Spinner } from '@chakra-ui/react'


const Rightbar = () => {
    const { rbdata } = useContext(DtrnContext)
    const [load, setload] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        setload(false)
        if (rbdata) {
            setload(true)
        }
    }, [rbdata])
    console.log(rbdata[0])

    return (
        <div className='contrb' >

            <div >
                <h1> Trending News Topics</h1>
                <div className='divhr' ></div>
                <div className='trenewsy' onClick={() => navigate("/rishi sunak")}>Rishi Sunak</div>
                <div className='trenewsb' onClick={() => navigate("/sri lanka")}>Sri Lanka Crisis</div>
                <div className='trenewsp' onClick={() => navigate("/president of india")}>Droupadi Murmu</div>
            </div>
            <div>
                <h1>Top News</h1>
                <div className='divhr' ></div>
                {
                    load ? <>

                        {
                            rbdata.map((ele) => {
                                return <DataShowerRB key={ele.title} data={ele} />
                            })
                        }
                    </>

                        : <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                            mt="50"
                        />}
            </div>
        </div>
    )
}

export default Rightbar
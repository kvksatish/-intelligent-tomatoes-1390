import axios from "axios"

export function headlinesresult() {
    return (
        axios.get(`https://gnews.io/api/v4/top-headlines?token=2c6af490b06ae0d1dcf1da5e35558166&country=in&lang=en`).then((res) => {

            return res.data
        }))
}


export function newsresult(search) {
    return (axios.get((`https://gnews.io/api/v4/search?q=${search}&token=2c6af490b06ae0d1dcf1da5e35558166&country=in`)).then((res) => {
        return res.data

    }))
}
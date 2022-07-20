import axios from "axios"

export function headlinesresult() {
    return (
        axios.get(`https://gnews.io/api/v4/top-headlines?token=ce924aefdd53ec3727875383172609cd&country=in&lang=en`).then((res) => {

            return res.data
        }))
}


export function newsresult() {
    return (axios.get((`https://gnews.io/api/v4/search?q=india&token=ce924aefdd53ec3727875383172609cd&country=in`)).then((res) => console.log(res)))
}
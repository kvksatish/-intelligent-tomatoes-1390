import axios from "axios"

export function headlinesresult() {
    return (
        axios.get(`https://gnews.io/api/v4/top-headlines?token=893812dd689f66ba0961457895b11867

&country=in&lang=en`).then((res) => {

            return res.data
        }).catch((err) => console.log(err)))
}


export function newsresult(search) {
    return (axios.get((`https://gnews.io/api/v4/search?q=${search}&token=893812dd689f66ba0961457895b11867

&country=in`)).then((res) => {
        return res.data

    }).catch((err) => console.log(err)))
}
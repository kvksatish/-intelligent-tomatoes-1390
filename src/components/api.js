import axios from "axios"

export function headlinesresult() {
    return (
        axios.get(`https://gnews.io/api/v4/top-headlines?token=6dbc1b5af981f1f87ac57bd830cfd56e

&country=in&lang=en`).then((res) => {

            return res.data
        }).catch((err) => console.log(err)))
}


export function newsresult(search) {
    return (axios.get((`https://gnews.io/api/v4/search?q=${search}&token=6dbc1b5af981f1f87ac57bd830cfd56e

&country=in`)).then((res) => {
        return res.data

    }).catch((err) => console.log(err)))
}
import axios from 'axios'
const url = 'http://localhost:5000'

class Fetch {
    async GET(route, limit = 10) {
        // try {
        //     let response = await fetch(`${url}/${route}?limit=${limit}`)
        //     response = await response.json()
        //     response = response.data
        //     return response
        // } catch (err) {
        //     console.log(err.message)
        // }
        let res = await axios.get(`${url}/${route}?limit=${limit}`)
        res = res.data.data
        return res
    }

    async POST(route, body) {
        try {
            let response = await fetch(`${url}/${route}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            response = await response.json()
            return response
        } catch (err) {
            console.log(err.message)
        }
    }
}

export default new Fetch()

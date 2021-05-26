const url = 'http://localhost:5000'

class Fetch {
    async GET(route, limit = 10) {
        let response = await fetch(`${url}/${route}?limit=${limit}`)
        response = await response.json()
        response = response.data

        return response
    }

    async POST(route, body) {
        let response = await fetch(`${url}/${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        response = await response.json()
        return response
    }
}

export default new Fetch()

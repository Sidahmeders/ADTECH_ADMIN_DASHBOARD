class Fetch {
    async GET() {
        return 'getting data....'
    }

    async POST(url, method, body) {
        let response = await fetch(`http://localhost:5000/${url}`, {
            method: method,
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

const url = 'http://localhost:5000' || 'http://165.227.137.238'

class Fetch {
    async GET(route, limit) {
        try {
            let response = await fetch(`${url}/${route}?limit=${limit}`, {
                credentials: 'include'
            })
            response = await response.json()

            return response
        } catch (err) {
            console.log(err.message)
        }
    }

    async Search(route, query) {
        try {
            let response = await fetch(`${url}/${route}?query=${query}`, {
                credentials: 'include'
            })
            response = await response.json()

            return response
        } catch (err) {
            console.log(err.message)
        }
    }

    async POSTJson(route, body, method) {
        try {
            let response = await fetch(`${url}/${route}`, {
                method: method || 'POST',
                body: JSON.stringify(body),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response = await response.json()

            return response
        } catch (err) {
            console.log(err.message)
        }
    }

    async POSTMultiForm(route, body) {
        try {
            let response = await fetch(`${url}/${route}`, {
                method: 'POST',
                body: body,
                credentials: 'include'
            })
            response = await response.json()

            return response
        } catch (err) {
            console.log(err.message)
        }
    }

    async Delete(route, id) {
        try {
            let response = await fetch(`${url}/${route}?id=${id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            response = await response.json()

            return response
        } catch (err) {
            console.log(err.message)
        }
    }
}

export default new Fetch()

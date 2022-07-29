const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://www.absdtech.com'

class Fetch {
    async GET(route, limit, Token) {
        try {
            let response = await fetch(`${url}/${route}?limit=${limit}&authToken=${Token}`, {
                credentials: 'include'
            })
            response = await response.json()

            return response
        } catch (err) {
            console.log(err.message)
        }
    }

    async Search(route, query, Token) {
        try {
            let response = await fetch(`${url}/${route}?query=${query}&authToken=${Token}`, {
                credentials: 'include'
            })
            response = await response.json()

            return response
        } catch (err) {
            console.log(err.message)
        }
    }

    async POSTJson(route, body, method, Token) {
        try {
            let response = await fetch(`${url}/${route}?authToken=${Token}`, {
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

    async POSTMultiForm(route, body, Token) {
        try {
            let response = await fetch(`${url}/${route}?authToken=${Token}`, {
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

    async Delete(route, id, Token) {
        try {
            let response = await fetch(`${url}/${route}?id=${id}&authToken=${Token}`, {
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

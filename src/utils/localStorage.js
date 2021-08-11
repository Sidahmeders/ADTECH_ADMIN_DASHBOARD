class LocalStorage {
    setUrlPath({ currentPath }) {
        localStorage.setItem('url-path', currentPath)
    }

    getUrlPath() {
        localStorage.getItem('url-path')
    }

    setSidebarState({ state }) {
        localStorage.setItem('toggle-state', state)
    }

    getSidebarState() {
        localStorage.getItem('toggle-state')
    }
}

export default new LocalStorage()

class LocalStorage {
    setUrlPath({ currentPath }) {
        localStorage.setItem('url-path', currentPath)
    }

    getUrlPath() {
        localStorage.getItem('url-path')
    }

    getSidebarState() {
        return localStorage.getItem('toggle-state')
    }

    toggleSidebarState(state) {
        localStorage.setItem('toggle-state', !state)
        return !state
    }
}

export default new LocalStorage()

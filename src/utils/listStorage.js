export const saveListToStorage = (list) => {
    localStorage.setItem('watchList', JSON.stringify(list))
}

export const getListFromStorage = (list) => {
    if (localStorage.getItem('watchlist') === null) {
        localStorage.setItem('watchlist', JSON.stringify([]))
    } else {
        const watchlistLocal = localStorage.getItem(
            'watchList',
            JSON.stringify(list)
        )

        return JSON.parse(watchlistLocal)
    }
}

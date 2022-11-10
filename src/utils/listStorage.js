export const saveListToStorage = (list) => {
    localStorage.setItem('watchList', JSON.stringify(list || []))
}

export const getListFromStorage = (list) => {
    if (!localStorage.getItem('watchList')) {
        saveListToStorage(list || [])
    } else {
        const watchlistLocal = localStorage.getItem('watchList')

        return JSON.parse(watchlistLocal)
    }
}

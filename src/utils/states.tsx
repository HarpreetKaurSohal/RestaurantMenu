export const findPageState = () => {
    const pageURl = window.location.pathname
    if(pageURl === "/") {
        return "menu"
    } else {
        return "home"
    }
}
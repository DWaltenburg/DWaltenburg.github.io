function toggleDarkmode() {
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        setTheme('light')
        localStorage.setItem('theme', 'light')
        return
    } else {
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
        return
    }
}
const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }
}
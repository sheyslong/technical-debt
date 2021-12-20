export const fetchGithubUserFromSessionStorage = () => {
    return isTheWindowNotUndefined() ? window.sessionStorage.getItem('githubUser') : undefined
}

const isTheWindowNotUndefined = () => {
    return typeof window !== 'undefined'
}
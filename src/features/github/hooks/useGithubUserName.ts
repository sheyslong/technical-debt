import { useEffect, useState } from "react"

export const useGithubUserName = () => {
    const isWindowIsNotUndefined = typeof window !== 'undefined'
    const githubUser = isWindowIsNotUndefined ? window.sessionStorage.getItem('githubUser') : undefined
    const [githubUserName, setGithubUserName] = useState(githubUser)

    useEffect(() => {setGithubUserName(githubUser)}, [githubUser])
    return githubUserName
}
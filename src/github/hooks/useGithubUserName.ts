import { useEffect, useState } from "react"

export const useGithubUserName = () => {
    const isWindowIsNotUndefined = typeof window !== 'undefined'
    const githubUser = window.sessionStorage.getItem('githubUser')
    const [githubUserName, setGithubUserName] = useState(isWindowIsNotUndefined ? 
        githubUser : 
        undefined)

    useEffect(() => {setGithubUserName(githubUser)}, [githubUser])
    return githubUserName
}
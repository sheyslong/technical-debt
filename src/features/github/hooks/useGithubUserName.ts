import { useEffect, useState } from "react"
import { fetchGithubUserFromSessionStorage } from "../utils/fetchGithubUserFromSessionStorage"

export const useGithubUserName = () => {
    const githubUser = fetchGithubUserFromSessionStorage()
    const [githubUserName, setGithubUserName] = useState(githubUser)

    useEffect(() => {setGithubUserName(githubUser)}, [githubUser])
    return githubUserName
}


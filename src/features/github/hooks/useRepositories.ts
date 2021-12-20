import { useQuery } from "react-query"
import { githubApi } from "../api/githubApi"
import { useGithubUserName } from "./useGithubUserName"

export const useRepositories = () => {
    const githubUserName = useGithubUserName()
    const { data, isError, error, isLoading } = useQuery(
        ['repositories', githubUserName], () => githubApi.getRepositoriesByUser(githubUserName), {
            enabled: !!githubUserName
        })
    
    return {repositories: githubUserName ? data : [], isLoading, isError, error}
}
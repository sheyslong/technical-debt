import { useQuery } from "react-query"
import { githubApi } from "../api/githubApi"

export const useRepositories = () => {
    const isWindowIsNotUndefined = typeof window !== 'undefined'
    const userName = isWindowIsNotUndefined ? window.sessionStorage.getItem('githubUser') : undefined
    const { data, isError, error, isLoading } = useQuery(
        ['repositories', userName], () => githubApi.getRepositoriesByUser(userName))
    
    return {repositories: userName ? data : [], isLoading, isError, error}
}
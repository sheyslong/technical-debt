import { useQuery } from "react-query"
import { githubApi } from "../api/githubApi"

export const useRepositoriesByUser = () => {
    const isWindowIsNotUndefined = typeof window !== 'undefined'
    const userName = isWindowIsNotUndefined ? window.sessionStorage.getItem('githubUser') : ''
    const { data, isError, error, isLoading } = useQuery(
        ['repositories', userName], () => githubApi.getRepositoriesByUser(userName))
    console.log(data);
    
    return {repositories: data, isLoading, isError, error}
}
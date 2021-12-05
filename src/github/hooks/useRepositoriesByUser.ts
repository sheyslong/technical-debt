import { useQuery } from "react-query"
import { githubApi } from "../api/githubApi"

export const useRepositoriesByUser = () => {
    const userName = 'sheyslong'
    const { data, isError, error, isLoading } = useQuery(
        ['repositories', userName], () => githubApi.getRepositoriesByUser(userName))
    console.log(data);
    
    return {repositories: data, isLoading, isError, error}
}
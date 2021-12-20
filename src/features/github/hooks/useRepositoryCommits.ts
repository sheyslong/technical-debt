import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { githubApi } from "../api/githubApi"
import { useGithubUserName } from "./useGithubUserName"

export const useRepositoryCommits = () => {
    const router = useRouter()

    const githubUserName = useGithubUserName()
    const {repositoryName} = router.query

    const { data, isError, error, isLoading } = useQuery(
        ['repository-commits', githubUserName, repositoryName], () => githubApi.getRepositoryCommits(githubUserName, repositoryName), {
            enabled: !!githubUserName && !!repositoryName
        })
    
    return {commits: githubUserName && repositoryName ? data : [], isLoading, isError, error}
}
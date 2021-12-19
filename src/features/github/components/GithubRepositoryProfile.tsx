import { useRouter } from "next/router";
import { FC } from "react";

const GithubRepositoryProfile: FC = () =>{
    const router = useRouter()
    const {repositoryId} = router.query
    
    return <h1>My Repository Profile: {repositoryId}</h1>
}

export default GithubRepositoryProfile
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { FC } from "react";
import { useRepositoryCommits } from "../hooks/useRepositoryCommits";
import { Loading } from "./Loading";

const GithubRepositoryProfile: FC = () =>{
    const router = useRouter()
    const {repositoryName} = router.query
    const {commits, isLoading} = useRepositoryCommits()
    console.log(commits);

    if(isLoading) return <Loading/>
    
    return <Box sx={{
        background: 'white',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        }}>
            <h1>{repositoryName}</h1>
            <h2>Quantidade de commits no Repositório: {commits?.length}</h2>
        </Box>
}



export default GithubRepositoryProfile
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { FC } from "react";

const GithubRepositoryProfile: FC = () =>{
    const router = useRouter()
    const {repositoryName} = router.query
    
    return <Box sx={{
        background: 'white',    }}>My Repository Profile: {repositoryName}</Box>
}

export default GithubRepositoryProfile
import { FC } from "react";
import { Card, CardContent, CardActionArea, Typography, Grid } from '@mui/material';
import { useRepositories } from "../hooks/useRepositories";
import { Repository } from "../typings/RepositoryTyping";
import { Loading } from "./Loading";
import { useRouter } from "next/router";

const GithubRepositories: FC = () => {
    const {repositories, isLoading} = useRepositories()
    
    if(isLoading) return <Loading/>

    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {repositories.map((repository: Repository) => 
        <Grid item xs={2} sm={4} md={4} key={repository.id}>
            <RepositoryDetails repository={repository}/>
        </Grid>
        )}
        </Grid>
}

interface RepositoryDetailsProps {
    repository: Repository
}

const RepositoryDetails: FC<RepositoryDetailsProps> = (
    {repository}
) => {
    const router = useRouter()
    const openRepositoryProfile = (repositoryName: string) => {
      router.push(`/repositories/${repositoryName}`)
    }
    return <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '350px',
        height: '250px',
        padding: '8px',
        justifyContent: 'center',
        background: '#DB324D',
        color: '#fff'
    }}>
    <CardActionArea>
   <CardContent onClick={() => openRepositoryProfile(repository.name)}>
     <Typography gutterBottom variant="h5" component="div">
       {repository.name}
     </Typography>
     <Typography variant="body2" color="text.secondary">
       {repository.description}
     </Typography>
   </CardContent>
 </CardActionArea>
</Card>
}

export default GithubRepositories
import { FC, useState } from "react";
import { useForm } from 'react-hook-form'
import { githubApi } from "../github/api/githubApi";
import { useRepositoriesByUser } from "../github/hooks/useRepositoriesByUser";

interface User {
    githubCredential: string
}
export const LoginForm:FC = () => {
    const { handleSubmit, register } = useForm<User>()
    const [userRepositories, setUserRepositories] = useState<any>()

    const onSubmit = (userData: User) => {
        //setUserRepositories(userRepositoriesDetails)        
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('githubCredential')}/>
        <input type='submit' />
    </form>
}
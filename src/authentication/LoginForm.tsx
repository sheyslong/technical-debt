import { FC } from "react";
import { useForm } from 'react-hook-form'
interface User {
    githubCredential: string
}
export const LoginForm:FC = () => {
    const { handleSubmit, register } = useForm<User>()

    const onSubmit = (userData: User) => {
        window.sessionStorage.setItem('githubUser', userData.githubCredential)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('githubCredential')}/>
        <input type='submit' />
    </form>
}
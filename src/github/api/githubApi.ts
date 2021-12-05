import wretch from 'wretch'
import { Repository } from '../typings/RepositoryTyping'

const api = wretch()
    .url('https://api.github.com')
    .headers({'Accept': 'application/vnd.github.v3+json'})


function getRepositoriesByUser(userNickName: string) {
    const response = api
        .url(`/users/${userNickName}/repos`)
        .get()
        .fetchError(error => console.log(error))
        .json<Repository[]>()
    console.log(response);
    return response
    
    
}

export const githubApi = {
    getRepositoriesByUser
}
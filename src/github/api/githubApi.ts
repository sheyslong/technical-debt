import wretch from 'wretch'
import { Repository } from '../typings/RepositoryTyping'

const api = wretch()
    .url('https://api.github.com')
    .headers({'Accept': 'application/vnd.github.v3+json'})


function getRepositoriesByUser(userName: string) {
    return api
        .url(`/users/${userName}/repos`)
        .get()
        .fetchError(error => console.log(error))
        .json<Repository[]>()
}

function getRepositoriesByOrganization(orgName: string) {
    return api
        .url(`/orgs/${orgName}/repos`)
        .get()
        .fetchError(error => console.log(error))
        .json<Repository[]>()
}

export const githubApi = {
    getRepositoriesByUser,
    getRepositoriesByOrganization
}
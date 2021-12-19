import wretch from 'wretch'
import { Commit } from '../typings/CommitTyping'
import { File } from '../typings/Files'
import { Repository } from '../typings/RepositoryTyping'
import { fetchGithubUserFromSessionStorage } from '../utils/fetchGithubUserFromSessionStorage'

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

function getRepositoryCommits(userName: string, repositoryName: string) {
    return api
        .url(`/repos/${userName}/${repositoryName}/commits`)
        .get()
        .fetchError(error => console.log(error))
        .json<Commit[]>()
}

function getRepositoryCommitTreeFiles(userName: string, repositoryName: string, treeFilesId: number) {
    return api
        .url(`/repos/${userName}/${repositoryName}/git/trees/${treeFilesId}`)
        .get()
        .fetchError(error => console.log(error))
        .json<File>()
}
export const githubApi = {
    getRepositoriesByUser,
    getRepositoriesByOrganization,
    getRepositoryCommits,
    getRepositoryCommitTreeFiles,
}
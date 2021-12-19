import { Commit } from "../typings/CommitTyping"

const getTreeFilesId = (commitDetails: Commit) => {
    return commitDetails.commit.tree.url.split('trees/')[1]
}

export const repositoryUtils {
    getTreeFilesId
}
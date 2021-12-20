export interface Commit {
    sha: Sha
    commit: CommitDetails
    parents: Parent[]
}

interface CommitDetails {
    author: Author
    message: string
    tree: TreeFiles 
}

interface Author {
    name: string
    email: string
}

interface TreeFiles {
    sha: Sha
    url: string
}

interface Parent {
    sha: Sha
    url: string
}

export type Sha = string
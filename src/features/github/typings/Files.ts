import { Sha } from "./CommitTyping";

export interface File {
    sha: Sha
    tree: FileDetails[]
}

interface FileDetails {
    path: string
    sha: Sha
    size: number
}
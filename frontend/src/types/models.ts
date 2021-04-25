export interface IStudent {
    id: string,
    grade: string,
    firstname: string,
    lastname: string,
    email: string,
    schoolId: string,
    avatar: string,
}

export interface IHomewrok {
    name: string
}

export interface IResource {
    id: string
    path: string
    type: "audio" | "book"
}

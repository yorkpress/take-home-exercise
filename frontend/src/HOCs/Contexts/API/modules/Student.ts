import { AxiosInstance } from "axios";
import { IStudent } from "types";
import * as URLs from "../URLs"

export interface APIStudent {
    list: () => Promise<listStudentsResponse>
}

type listStudentsResponse = {
    students: IStudent[]
}

export class Student implements APIStudent {
    client
    constructor(client: AxiosInstance) {
        this.client = client
    }

    async list() {
        const data = await this.client.get(URLs.GET_STUDENTS)
        return data.data as Promise<listStudentsResponse>
    }

}
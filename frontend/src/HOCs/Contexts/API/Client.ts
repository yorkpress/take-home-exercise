import axios from "axios";
import { APIStudent, Student } from "./modules/Student";
import { APIHomework, Homework } from "./modules/Homework";
import { BASE_URL } from "./URLs"
export interface IClient {
    addHeader: (key: string, value: string) => void
    removeHeader: (key: string) => void
    Student: APIStudent
    Homework: APIHomework
}

class _APIClient implements IClient {
    client
    Student
    Homework
    constructor() {
        this.client = axios.create({
            baseURL: BASE_URL
        })
        this.Student = new Student(this.client)
        this.Homework = new Homework(this.client)
    }

    addHeader(key: string, value: string) {
        this.client.defaults.headers[key] = value
    }

    removeHeader(key: string) {
        this.client.defaults.headers[key] = undefined
    }
}

const APIClient = new _APIClient()
export { APIClient }

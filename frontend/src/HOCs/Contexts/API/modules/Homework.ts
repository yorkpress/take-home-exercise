import { AxiosInstance } from "axios";
import { IHomewrok } from "types";

export interface APIHomework {
    list: () => IHomewrok[]
}

const homeworks = [{ name: "homework 1" }, { name: "homework 2" }, { name: "homework 3" }]

export class Homework implements APIHomework {
    client
    constructor(client: AxiosInstance) {
        this.client = client
    }

    list(): IHomewrok[] {
        return homeworks
    }

}
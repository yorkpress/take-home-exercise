import { AxiosInstance } from "axios";
import { IResource } from "types";
import * as URLs from "../URLs"

export interface APIResouce {
    list: () => Promise<listResourcesResponse>
}

type listResourcesResponse = {
    resources: IResource[]
}

export class Resource implements APIResouce {
    client
    constructor(client: AxiosInstance) {
        this.client = client
    }

    async list() {
        const data = await this.client.get(URLs.GET_RESOURCES)
        return data.data as Promise<listResourcesResponse>
    }

}
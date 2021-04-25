import { APIContext, APIProvider, AssigningContext, AssigingProvider } from "./Contexts"

const Contexts = {
    API: APIContext,
    Assigning: AssigningContext
}
const Providers = {
    API: APIProvider,
    Assigning: AssigingProvider
}

export {
    Contexts,
    Providers
}
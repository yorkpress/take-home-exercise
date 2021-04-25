import { createContext, FC } from "react";
import { APIClient, IClient } from "./Client";

interface IAPIContext {
  Client: IClient;
}

const APIContextInitialValue = {
  Client: APIClient,
};

export const APIContext = createContext<IAPIContext>(APIContextInitialValue);

export const APIProvider: FC = ({ children }) => {
  return (
    <APIContext.Provider value={APIContextInitialValue}>
      {children}
    </APIContext.Provider>
  );
};

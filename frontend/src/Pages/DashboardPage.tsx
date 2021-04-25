import { FC } from "react";
import { DashboardTemplate } from "Templates";
import { useHistory } from "react-router-dom";

export const DashboradPage: FC = () => {
  const history = useHistory();

  function navToClassroom() {
    history.push("/classroom");
  }

  return <DashboardTemplate navToClassroom={navToClassroom} />;
};

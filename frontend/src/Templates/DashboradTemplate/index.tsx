import { Heading } from "Atoms/Typographics";
import { TextCard } from "Molecules";
import { MouseEventHandler } from "react";
import { FC } from "react";
import styles from "./dashboardTempelate.module.css";

interface DashboardTemplateProps {
  navToClassroom: MouseEventHandler;
}

export const DashboardTemplate: FC<DashboardTemplateProps> = (props) => {
  return (
    <div className={styles.mainSection}>
      <Heading text="Welcome To Your Dashboard" bold="600" />
      <div className={styles.optionsSetion}>
        <TextCard text="Assign homework" onClick={props.navToClassroom} />
      </div>
    </div>
  );
};

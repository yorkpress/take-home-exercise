import { Heading } from "Atoms/Typographics";
import { TextCard } from "Molecules";
import { FC } from "react";
import styles from "./dashboardTempelate.module.css";

export const DashboardTemplate: FC = () => {
  return (
    <div className={styles.mainSection}>
      <Heading text="Welcome To Your Dashboard" bold="600" />
      <div className={styles.optionsSetion}>
        <TextCard text="Assign homework" />
      </div>
    </div>
  );
};

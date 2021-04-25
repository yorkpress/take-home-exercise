import { FC, useState } from "react";
import Modal from "react-modal";
import { colors } from "styleGuide/colors";
import styles from "./AssignModal.module.css";

Modal.setAppElement("#root");

interface ModalRow {
  Component: React.ReactNode;
  value: any;
}

interface AssignModalProps {
  isOpen: boolean;
  label: string;
  rows: ModalRow[];
  onAssign: (value: any) => void;
}

const customeStyle = {
  overlay: {
    background: "rgb(0, 0, 0, .3)",
  },
  content: {
    width: "50%",
    height: "50%",
    top: 0,
    left: 0,
    transform: "translate(50%, 30%)",
  },
};

export const AssignModal: FC<AssignModalProps> = (props) => {
  const { isOpen, label, rows, onAssign } = props;
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const [selectedValue, setSelectedValue] = useState(undefined);

  function onSelect(index: number, value: any) {
    setSelectedIndex(index);
    setSelectedValue(value);
  }

  function handleAssign() {
    onAssign(selectedValue);
  }

  return (
    <Modal isOpen={isOpen} contentLabel={label} style={customeStyle}>
      {rows.map((row, index) => {
        return (
          <div
            onClick={() => onSelect(index, row.value)}
            style={{
              border:
                index === selectedIndex
                  ? `1px solid ${colors.blue}`
                  : undefined,
            }}
          >
            {row.Component}
          </div>
        );
      })}
      <button className={styles.assignBtn} onClick={handleAssign}>
        Assign
      </button>
    </Modal>
  );
};

import React, { cloneElement, useEffect, useState } from 'react';
import { Modal, Button } from 'antd';


const Modal1 = ({ children, buttonText, title, width, modalStyle = {} }) => {
    const [visible, setVisible] = useState(false);
    const [Chld, setChld] = useState();

    useEffect(() => {
        setChld(cloneElement(children, { setVisible }))
    }, [children])

    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                {buttonText}
            </Button>
            <Modal
                closable={true}
                centered
                title={title}
                visible={visible}
                width={width || 600}
                onCancel={() => setVisible(false)}
                footer={false}
                {...modalStyle}
            >
                {Chld}
            </Modal>
        </>
    )
}

export default Modal1;
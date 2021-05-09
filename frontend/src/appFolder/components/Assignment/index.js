import React, { useContext, useState } from "react";
import { Input } from "antd";
import { SelectMultiCstm, BLockTitlBody, Questions } from "..";
import { AppContext } from "../../store";


const Assignment = ({ onConfirm, ...rest }) => {
    const
        { store } = useContext(AppContext),
        [ass, setAss] = useState({ name: "", questions: [] });

    const
        append = (data) => setAss({ ...ass, ...data }),
        
        onChangeText = (e) => append({ name: e.target.value }),
        onSelect = (e) => append({ resources: e }),
        onQuestions = (questions) => append({ questions });

    const onConfirmHandler = () => {
        onConfirm(ass);
        rest.setVisible(false);
    }


    return (
        <div>
            <BLockTitlBody title="About Your Assessment">
                <Input
                    onChange={(e) => onChangeText(e)}
                    placeholder="Type the name of the assessment"
                />
            </BLockTitlBody>
            <SelectMultiCstm
                onSelect={onSelect}
                placeholder="add resourses"
                style={{ width: "50%", margin: "15px" }}
                data={store.resources.map(r => {
                    let texts = r.path.split('/')
                    return {
                        text: texts[texts.length - 1],
                        value: r.id
                    }
                })}
            />
            <BLockTitlBody title="Add  Questions And Answers">
                <Questions onQuestions={onQuestions} />
            </BLockTitlBody>
            <div className="flex-end">
                <button onClick={onConfirmHandler} className='btn-conf'>Confirm</button>
            </div>
        </div>
    )
}

export default Assignment;
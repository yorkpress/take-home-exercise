import React, { useState } from "react";
import { Button, Input, Col, Row, Checkbox } from "antd";

const { TextArea } = Input;


const Questions = ({ onQuestions }) => {
    const [questions, setQuestions] = useState([]);

    const sendQuestion = (data) => {
        let newQsts = questions;

        newQsts[data.questionNum] = data;
        setQuestions(newQsts);
        onQuestions(newQsts)
    }

    return (
        <div>
            <Button
                style={{ marginBottom: "20px" }}
                onClick={() => setQuestions([...questions, {}])}
            >Add Question</Button>

            {
                questions.map((q, i) => (
                    <Question
                        key={i}
                        questionNum={i}
                        sendQuestion={sendQuestion}
                    />
                ))
            }
        </div>
    )
}



const Question = ({ questionNum, sendQuestion }) => {
    const
        [question, setQuestion] = useState(""),
        [answers, setAnswers] = useState([]);

    const onAddOption = () => setAnswers([
        ...answers,
        {text: "", correct: false }
    ]);

    const onChangeAnswer = (ind, answer) => {
        let newAnswers = answers
            .map((a, i) => {
                if (i == ind)
                    return {...a, ...answer, ind};
                else if (answer.correct)
                    return { ...a, correct: false }
                else return a;
            });

        setAnswers(newAnswers);
        sendQuestion({
            questionNum,
            question,
            answers
        });
    }


    return (
        <div className="cont4">
            <h3>question {questionNum + 1}</h3>
            <TextArea
                rows={3}
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
                placeholder="Type question..."
            />
            <h3 style={{ margin: "10px 0px" }}>options</h3>
            {
                answers.map((a, i) => (
                    <Answer key={i} ind={i} {...a} onChange={onChangeAnswer} />
                ))
            }
            <Button onClick={() => onAddOption()}>Add option</Button>
        </div>
    )
}


const Answer = ({ ind, text, correct, onChange }) => {

    const onTyping = (e) => onChange(ind,
        { text: e.target.value, correct }
    );

    const onCorrect = () => onChange(ind,
        { text, correct: !correct }
    );

    return (
        <div style={{ marginBottom: "10px" }}>
            <h4>answer {ind + 1}</h4>
            <Row gutter={[20]}>
                <Col span={16}>
                    <Input
                        onChange={(e) => onTyping(e)}
                        placeholder="Type question..."
                    />
                </Col>
                <Col span={8} >
                    <Checkbox
                        checked={correct}
                        onChange={() => onCorrect()}
                    >
                        correct Answer
          </Checkbox>
                </Col>
            </Row>
        </div>
    )
}

export default Questions;
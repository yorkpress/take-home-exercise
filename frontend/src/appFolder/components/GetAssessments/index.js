import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { baseUrl } from '../../apis/config';

const GetAssessments = ({ assessments = [], rsrcs = [] }) => (
    <div>
        {
            assessments.map((asm, i) => (
                <div
                    key={i}
                    className="site-card-border-less-wrapper"
                    style={{ margin: "30px 0px" }}
                >
                    <Card title={`Assessment ${i + 1} : ${asm.name}`}>
                        <GetLinks resources={asm.resources} rsrcs={rsrcs} />
                        <GetQuestions questions={asm.questions} />
                    </Card>
                </div>
            ))
        }
    </div>
);


const GetLinks = ({ resources, rsrcs }) => (
    <div>
        Files :
        {resources.map(r => {
            let
                rsrc = rsrcs.find(rr => rr.id == r),
                texts = rsrc.path.split('/');

            return (
                <Link key={r} to={`${baseUrl}/${texts}`} style={{ margin: "0px 10px" }}>
                    {texts[texts.length - 1]}
                </Link>
            )
        })}
    </div>
);


const GetQuestions = ({ questions }) => (
    <div>
        {
            questions.map((q, i) => (
                <div key={i}>
                    <div className="text-mid">
                        Questions {i + 1} : {q.question}
                    </div>
                    <div>
                        <div className="text-mid">Answers : </div>
                        <div>
                            {
                                q.answers.map((a, i) => (
                                    <div
                                        key={i}
                                        className="shft"
                                        style={a.correct ? { color: "green" } : {}}
                                    >
                                        {i + 1}) {a.text}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
)


export default GetAssessments;
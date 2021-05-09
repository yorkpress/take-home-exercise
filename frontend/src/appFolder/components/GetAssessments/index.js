import React from "react";
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


export const GetLinks = ({ resources, rsrcs, className }) => (
    <div className={className}>
        Files :
        {resources.map(r => {
            let
                rsrc = rsrcs.find(rr => rr.id == r),
                texts = rsrc.path.split('/');

            return (
                <a target="_blank" key={r} href={`${baseUrl}${rsrc.path}`} style={{ margin: "0px 10px" }} >
                    {texts[texts.length - 1]}
                </a>
            )
        })}
    </div>
);


const GetQuestions = ({ questions }) => (
    <div>
        {
            questions.map((q, i) => (
                <div key={i} className="cont4">
                    <div>
                        <h3>Questions {i + 1} :</h3>
                        <div className="shft">{q.question}</div>
                    </div>
                    <div>
                        <h3>Answers : </h3>
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

GetAssessments.GetLinks=GetLinks;
export default GetAssessments;
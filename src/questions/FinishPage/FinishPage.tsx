import { Button, Form, message, Space } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "./FinishPage.css";
import { Link } from "react-router-dom";
import {
  setAnswerWhat,
  setAnswerWhen,
  setAnswerWhere,
  setAnswerWho,
} from "../../store/AnswerReducer";
import { useDispatch, useSelector } from "react-redux";

let notAnsweredMessage = "not answered";

const FinishPage: React.FC = () => {
  const routeB = "/question04";
  const routeN = "/StartingPage";

  const { who } = useSelector((state: any) => {
    return state.answer;
  });
  const { what } = useSelector((state: any) => {
    return state.answer;
  });
  const { when } = useSelector((state: any) => {
    return state.answer;
  });
  const { where } = useSelector((state: any) => {
    return state.answer;
  });

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = () => {
    message.success("The question was answered!");
  };

  const onFinishFailed = () => {
    message.error("Please, enter your answer");
  };

  const onRepeatTest = () => {
    dispatch(setAnswerWho({ answer: "", answerState: "not answered" }));
    dispatch(setAnswerWhat({ answer: "", answerState: "not answered" }));
    dispatch(setAnswerWhen({ answer: "", answerState: "not answered" }));
    dispatch(setAnswerWhere({ answer: "", answerState: "not answered" }));
  };

  if (
    who.answerState &&
    what.answerState &&
    when.answerState &&
    where.answerState === "answered"
  ) {
    notAnsweredMessage = "All questions were answered!";
  } else {
    notAnsweredMessage = "Not all questions were answered!";
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Congratulations, test is over</h1>
        <h2>{notAnsweredMessage}</h2>
        <h3>Your result is:</h3>
        <h2>
          <b>{who.answer}</b>&nbsp;
          <b>{what.answer}</b>&nbsp;
          <b>{when.answer}</b>&nbsp;
          <b>{where.answer}</b>&nbsp;
        </h2>
        <div>
          <h2>Answers status:</h2>
          <p>Answer 1 : {who.answerState}</p>
          <p>Answer 2 : {what.answerState}</p>
          <p>Answer 3 : {when.answerState}</p>
          <p>Answer 4 : {where.answerState}</p>
        </div>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <Space>
            <Link to={routeB}>
              <Button htmlType="button">Back</Button>
            </Link>
            <Link to={routeN}>
              <Button type="primary" htmlType="button" onClick={onRepeatTest}>
                Repeat test
              </Button>
            </Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FinishPage;

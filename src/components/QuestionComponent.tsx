import { Button, Form, Input, message, Space } from "antd";
import React, { FC, useState } from "react";
import "antd/dist/antd.css";
import "./QuestionComponent.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setAnswerWhat,
  setAnswerWhen,
  setAnswerWhere,
  setAnswerWho,
} from "../store/AnswerReducer";
import { StatusComponent } from "./StatusComponent";

interface ComponentProps {
  routeN?: string;
  routeB?: string;
  page?: string;
  labelQuestion?: string;
}

const QuestionComponent: FC<ComponentProps> = ({
  routeN,
  routeB,
  page,
  labelQuestion,
}) => {
  const dispatch = useDispatch();
  const { who, what,when,where } = useSelector((state: any) => {
    return state.answer;
  });

  let currentValue: string;
  let status: string = "not answered";

  const [form] = Form.useForm();
  const [answerStatus, setStatus] = useState("not answered");

  const onFinish = (e: React.FormEvent<HTMLInputElement>) => {
    message.success("The question was answered!");
    setStatus("answered");
  };

  const onFinishFailed = () => {
    message.error("Please, enter your answer");
  };

  const getInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (page === "FirstQuestion") {
      status = "answered";
      dispatch(setAnswerWho({ answer: value, answerState: status }));
      currentValue = who;
    } else if (page === "SecondQuestion") {
      status = "answered";
      dispatch(setAnswerWhat({ answer: value, answerState: status }));
      currentValue = what;
    } else if (page === "ThirdQuestion") {
      status = "answered";
      dispatch(setAnswerWhen({ answer: value, answerState: status }));
      currentValue = when;
    } else if (page === "FourthQuestion") {
      status = "answered";
      dispatch(setAnswerWhere({ answer: value, answerState: status }));
      currentValue = where;
    }
    return value;
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="answer"
        label={labelQuestion}
        rules={[
          { required: true },
          { type: "string", warningOnly: true },
          { type: "string", min: 2 },
        ]}
      >
        <Input
          placeholder="Enter your answer here"
          type="text"
          onChange={getInputValue}
          value={currentValue!}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Link to={routeB!}>
            <Button htmlType="button">Back</Button>
          </Link>
          <Button type="primary" htmlType="submit">
            Accept your answer
          </Button>
          <Link to={routeN!}>
            <Button htmlType="button">Next</Button>
          </Link>
          <StatusComponent status={answerStatus} />
        </Space>
      </Form.Item>
    </Form>
  );
};

export default QuestionComponent;

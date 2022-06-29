import { Button, Form, Input, message, Space } from 'antd';
import React, { FC } from 'react';
import "antd/dist/antd.css";
import './QuestionComponent.css'
import { Link} from "react-router-dom";


import { useDispatch, useSelector} from 'react-redux';
import { setAnswerWhat, setAnswerWhen, setAnswerWhere, setAnswerWho } from '../store/AnswerReducer';



interface ComponentProps {
routeN?: string;
routeB?: string;
page?:string;
labelQuestion?:string;
name?:string;
}



const QuestionComponent: FC<ComponentProps> = ({routeN,routeB,page,labelQuestion,name}) => {
  const dispatch = useDispatch()
  const {who} = useSelector((state:any)=>{return state.answer})
  const {what} = useSelector((state:any)=>{return state.answer})
  const {when} = useSelector((state:any)=>{return state.answer})
  const {where} = useSelector((state:any)=>{return state.answer})

  let currentValue

  const [form] = Form.useForm();
  

  
  const onFinish = (e:React.FormEvent<HTMLInputElement>) => {         
    message.success('The question was answered!');
    
  };



  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const onFieldsChange = (value:any) => {
   console.log(value)
  };

  // const onFill = (pg:any) => {    
  //   form.setFieldsValue({
  //     name : 'Test!',
  //   });
  // };



const getInputValue = (
  e: React.FormEvent<HTMLInputElement>
) => {
  const value = e.currentTarget.value;  
  if(page === "FirstQuestion"){
    dispatch(setAnswerWho({answer:value}))
    currentValue = who
  } else if(page === "SecondQuestion"){
    dispatch(setAnswerWhat({answer:value}))
    currentValue = what
  } else if(page === "ThirdQuestion"){
    dispatch(setAnswerWhen({answer:value}))
    currentValue = when
  } else if(page === "FourthQuestion"){
    dispatch(setAnswerWhere({answer:value}))
    currentValue = where
  } 
  
};

  return (  
         
    <Form 
      form={form}
      layout="vertical"     
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"   
      onValuesChange={onFieldsChange}
      >
      <Form.Item
        name={name}
        label={labelQuestion}
        rules={[{ required: false }, { type: 'string', warningOnly: true }, { type: 'string', min: 4 }]}
      >
        <Input placeholder="Enter your answer here" type="text" onChange={getInputValue} value = {currentValue} />
      </Form.Item>
      <Form.Item>
        <Space>  
        <Link to ={routeB!}>       
          <Button htmlType="button">
            Back
          </Button>
        </Link>
          <Button type="primary" htmlType="submit" >
            Accept your answer
          </Button>
          <Link to ={routeN!}>
          <Button htmlType="button">
            Next
          </Button>
          </Link>
        </Space>
      </Form.Item>
    </Form>        
  );
};

export default QuestionComponent;




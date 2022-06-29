import { Button, Form, message, Space } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import './FinishPage.css'
import { Link } from "react-router-dom";
import {  setAnswerWhat, setAnswerWhen, setAnswerWhere, setAnswerWho } from '../../store/AnswerReducer';
import { useDispatch, useSelector} from 'react-redux';

const FinishPage: React.FC = () => {
  const routeB = "/question04";
  const routeN = "/StartingPage";

  const {who} = useSelector((state:any)=>{return state.answer})
  const {what} = useSelector((state:any)=>{return state.answer})
  const {when} = useSelector((state:any)=>{return state.answer})
  const {where} = useSelector((state:any)=>{return state.answer})
  

  const [form] = Form.useForm();
  const dispatch = useDispatch()

  const onFinish = () => {
    message.success('The question was answered!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  // const onFill = () => {
  //   form.setFieldsValue({
  //     url: 'https://taobao.com/',
  //   });
  // };

    const onRepeatTest = () => {
      dispatch(setAnswerWho({answer:""}))
      dispatch(setAnswerWhat({answer:""}))
      dispatch(setAnswerWhen({answer:""}))
      dispatch(setAnswerWhere({answer:""}))
  };
  


  
  let a1 = JSON.stringify(who.answer)
  let a2 = JSON.stringify(what.answer)
  let a3 = JSON.stringify(when.answer)
  let a4 = JSON.stringify(where.answer)

  let result = a1+" "+a2+" "+a3+" "+a4
  result = result.replace(/['"«»]/g, '')
 

  return ( 
    <div className='wrapper'> 
    <div>
    <h1>Congratulations, test is over</h1>
    <p>Your sentence is:</p>
    <h2>{result}</h2>
    

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
          <Button htmlType="button">
            Back
          </Button>
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
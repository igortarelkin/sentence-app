import { Button, Form, message, Space } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import './StartingPage.css'
import { Link } from "react-router-dom";

const FirstQuestion: React.FC = () => {
  const routeN = "/question01";  
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('The question was answered!');
  };

  const onFinishFailed = () => {
    message.error('Please, enter your answer');
  };

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };

  return (  
    <div className='wrapper'> 
      <div>
      <h1>RULES:</h1>
      <p>The software will ask four questions:</p>
 <ul>
 1. Who? - 2. What? - 3. When? -  4. Where?
 </ul>
 <p>We can go back or forward in this question dialog.<br/> 
There might be some indicator showing which question was/wasn't answered and also validator which checks whether all questions were answered in the final phase.<br/><br/>

And subseguently will display a sentence using the answers:<br/>
​
<b>`__WHO__ __WHAT__ __WHERE__ __WHEN__` </b><br/>
​
<p>Example:</p>
<ul>
<li>1. Who? Mark</li>
<li>2. What? is coding</li>
<li>3. When? today</li>
<li>4. Where? on his computer</li>
​ </ul>
will display​
<b>`Mark is coding on his computer today`</b></p>
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
          <Link to={routeN}>
          <Button type="primary" htmlType="submit" onClick={onFill}>
            Start
          </Button>
          </Link>
        </Space>
      </Form.Item>
    </Form> 
    </div>        
  );
};

export default FirstQuestion;
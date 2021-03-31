import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, DatePicker,message,Select } from 'antd';
import axios from '@/utils/Api'
import {susbcriptions} from '@/utils/constants'


const { Option } = Select;

const options=(arr)=>(
arr.map(option=><Option key={option.id} value={option.id}>{option.name}</Option>)
)

const IssuesForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = async(values) => {
    console.log('Received values of form: ', values);

    const payload = {
      ...values, 
      date_raised: values.date_raised.format('YYYY-MM-DD'),
      due_date: values.due_date.format('YYYY-MM-DD')
    }

    try{
       await axios.post('/business', payload)
      .then(res=>{
        console.log(res)
      
        if(res.status===200){
          message.success('Successfully submitted an issue')
      }
      }).catch(error=> console.log(` Error encountered ${error}`) )  
    } catch(error){
      message.error(`This ${error} occured when poasting an issue`)
    }
  };
  return (
    <Modal
      visible={visible}
      title="New Client"
      okText="Submit"
      cancelText="Cancel"
      
      onCancel={()=>{
        form.resetFields();
        onCancel()
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onFinish(values);
            onCancel();
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
            onCancel();
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="issesform"
        initialValues={{
          priority: 'highpriority',
        }}
       // onFinishFailed={onFinishFailed}
      >
       <Form.Item
          name="business_name"
          label="Business Name"
          rules={[
            {
              required: true,
              message: 'Please fill this field',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="contact_person"
          label="Contact Person" >
            <Input/>
          </Form.Item>
        <Form.Item
        label="phone_number"
        name="Phone number"
        rules={[
          {
            required: true,
            message: 'Please input phone number',
          },
        ]}
      >
        <Input type='tel' />
      </Form.Item>
      <Form.Item
        label="email_address"
        name="Email address"
        rules={[
          {
            required: true,
            message: 'Please input email adress',
          },
        ]}
      >
        <Input  type='email'/>
      </Form.Item>
        <Form.Item
        label="physical_address"
        name="Location"
      
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="business_status"
        name="Subscription"
      >
       <Select placeholder='Trial'>
            {options(susbcriptions)}
          </Select>
      </Form.Item>
      </Form>
    </Modal>
  );
};


export default IssuesForm;
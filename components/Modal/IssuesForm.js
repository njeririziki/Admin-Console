import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, DatePicker,message,Select } from 'antd';
import axios from '@/utils/Api'
import {employees, IssueCategories} from '@/utils/constants'


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
       await axios.post('/ticket', payload)
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
      title="Issue Raised"
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
          name="subject"
          label='Subject'
          rules={[
            {
              required: true,
              message: 'Please input the subject of issue',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="ticket_group_id"
          label='Ticket Category'
          rules={[
            {
              required: true,
              message: 'Please input the subject of issue',
            },
          ]}
        >
          <Select placeholder='Bugs'>
            {options(IssueCategories)}
          </Select>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="business_id"
          label="Account Number"
          rules={[
            {
              required: true,
              message: 'Please input the client name',
            },
          ]}
        >
          <Input />
    
        </Form.Item>
        <Form.Item
          name="employee_id"
          label="Assigned to"
          rules={[
            {
              required: true,
              message: 'Please input the employee assigned issue',
            },
          ]}
        >
         <Select placeholder=''>
            {options(employees)}
          </Select>
        </Form.Item>
        <Form.Item name="date_raised" label="Date Raised"
          rules={[
            {
              required: true,
              message: 'Please input the date the issue was raised',
            },
          ]}>
         <DatePicker 
          showToday={true}
         />
        </Form.Item>
     
        <Form.Item name="due_date" label="Due date"
          rules={[
            {
              required: true,
              message: 'Please input the  date the issue is due',
            },
          ]}>
         <DatePicker/>
        </Form.Item>
     
        <Form.Item name="priority" label='Priority'>
          <Radio.Group>
            <Radio value="highpriority">High </Radio>
            <Radio value="mediumpriority">Medium</Radio>
            <Radio value="lowpriority"> Low</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};


export default IssuesForm;
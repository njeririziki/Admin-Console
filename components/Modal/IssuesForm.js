import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, DatePicker,message,Select } from 'antd';
import axios from '@/utils/Api'


const { Option } = Select;
const customers=[
  {value:13456, label:'Wendy'},
  {value:2522, label:'Kelly'},
  {value:33454, label:'John'},
  {value:43452, label:'Chris'}, 
]
const categories=[
{value:1, label:'Bugs'},
{value:2, label:'Billing issues'},
{value:3, label:'Feature requests'},
{value:4, label:'Network Issues'},
]
const options=(arr)=>(
arr.map(option=><Option key={option.value} value={option.value}>{option.label}</Option>)
)

const IssuesForm = ({ visible, onFinish, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Issue Raised"
      okText="Submit"
      cancelText="Cancel"
      
      onCancel={onCancel,form.resetFields()}
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
            {options(categories)}
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
            {options(customers)}
          </Select>
        </Form.Item>
        <Form.Item name="date_raised" label="Date Raised">
         <DatePicker 
        // showTime={false}
          showToday={true}
         />
        </Form.Item>
     
        <Form.Item name="due_date" label="Due date">
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

const CollectionsPage = (props) => {
  //const [visible, setVisible] = useState(false);

  const onFinish = async(values) => {
    console.log('Received values of form: ', values);



    const payload = {
      ...values, 
      date_rasied: values.date_raised.format('DD-MM-YYYY'),
      date_due: values.due_date.format('DD-MM-YYYY')}
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
    <div>
      <IssuesForm
        visible={props.visible}
        onFinish={onFinish}
        onCancel={props.onCancel}
      />
    </div>
  );
};
export default CollectionsPage;
import React, { useState } from 'react';
import { Button, Modal, Form, Input, Upload, InputNumber, message,Select } from 'antd';
import { LoadingOutlined,UploadOutlined } from '@ant-design/icons';
import {checker} from '@/utils/parsingCsv'
import axios from '@/utils/Api'
import {susbcriptions} from '@/utils/constants'

  const {Option}= Select
  const options=(arr)=>(
  arr.map(option=><Option key={option.id} value={option.id}>{option.name}</Option>)
  )

const categories= 'Table,Breakdown,Secondary_Breakdown,Year,Value,Unit'

const OnboardingForm = ({ visible, onFinish, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  const parsingFile =(event)=>{
      const importedfile = event.target.files[0];
      const types=[ 'application/csv']
       if ( types.includes(importedfile.type)) {
        return message.error(`please pick a csv file`)
      };
      const reader = new FileReader();
      reader.readAsText(importedfile, "UTF-8");
      reader.onload = (event) => {
       const content= event.target.result;
       checker(content,categories);
       }
   
  }
  // const properties = {
  //   beforeUpload: file => {
  //     const excelSheet= file.type !== 'application/csv'
  //     if ( !excelSheet) {
  //       message.error(`${file.name} is not a spreadsheet`); 
  //       const reader = new FileReader();
  //       reader.readAsText(file, "UTF-8");
  //       reader.onload = (event) => {
  //         const content = event.target.result;
  //         checker(content, categories);
  //       }; 
  //     }
    
  //   },
  //   onChange: info => {
  //     if (info.file.status !== 'uploading') {
  //       console.log(info.file, info.fileList);
  //       setLoading(true)
  //     }
  //     if (info.file.status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //       setLoading(false)
  //     } else if (info.file.status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //       setLoading(false)
  //     }
  //   },
  //   showUploadList: false,
  // };
  return (
    <Modal
      visible={visible}
      title=" Onboard Client"
      okText=" Done"
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
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
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
      <Form.Item name="products" label=" Products List" >
         {/* <Upload {...properties}>
         <Button icon={loading? <LoadingOutlined/>:<UploadOutlined />}>Import file</Button>
         </Upload> */}
        <Input type="file"
        style={{top:0, bottom:0, visibility:'none' }}
        prefix={loading? <LoadingOutlined/> : <UploadOutlined/>}
         onChange={ parsingFile}/>
        </Form.Item>
    
        {/*    <Form.Item name="vendors" label=" Vendor List" >
         <Upload {...properties}>
         <Button icon={loading? <LoadingOutlined/> :<UploadOutlined />}>Import file</Button>
         </Upload>
        </Form.Item> */}
        {/* 
        <Form.Item name="customer" label=" Customer List" >
        <Upload {...properties}>
         <Button icon={loading? <LoadingOutlined/> :<UploadOutlined />}>Import file</Button>
         </Upload>
        </Form.Item> */}
       
      </Form>
    </Modal>
  );
};

const OnboardForm = (props) => {
  //const [visible, setVisible] = useState(false);

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);

    try{
      await axios.post('/business', values)
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
    
      <OnboardingForm
        visible={props.visible}
        onFinish={onFinish}
        onCancel={props.onCancel}
      />
    </div>
  );
};
export default OnboardForm;
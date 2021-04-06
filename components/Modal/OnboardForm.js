import React, { useState } from 'react';
import { Button, Modal, Form, Input, Upload, InputNumber, message,Select } from 'antd';
import { LoadingOutlined,UploadOutlined } from '@ant-design/icons';
import {checker} from '@/utils/parsingCsv'
import axios from '@/utils/Api'
import {testCategories} from '@/utils/constants'




const OnboardingForm = ({ visible,onCancel,itemslabel,modalTitle }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
 
  const onFinish = async (values) => {
  //  console.log('Received values of form: ', values);
    try{
      await axios.post(`/business/create_${apiEndpoint}`, values)
     .then(res=>{
       console.log(res)
     
       if(res.status===200){
         message.success('Successfully imported ')
     }
     }).catch(error=> console.log(` Error encountered ${error}`) )  
   } catch(error){
     message.error(`This ${error} occured when poasting an issue`)
   }
  };
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
       checker(content, testCategories);
       }
   
  }

  return (
    <Modal
      visible={visible}
      title={modalTitle}
      okText=" Done"
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
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
     
      <Form.Item name="products" label={itemslabel} >
      
        <input type="file"
        //prefix={<UploadOutlined/>}
         onChange={ parsingFile}/>
        </Form.Item>
    
       
      </Form>
    </Modal>
  );
};


export default OnboardingForm;
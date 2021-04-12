import React, { useState } from 'react';
import { Button, Modal, Form, Input, Upload, InputNumber, message,Select,Typography } from 'antd';
import { LoadingOutlined,UploadOutlined,DownloadOutlined } from '@ant-design/icons';
import {checker} from '@/utils/parsingCsv'
import axios from '@/utils/Api'





const OnboardingForm = ({ visible,onCancel,itemslabel,modalTitle,categories }) => {
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
     // const types=[ 'application/csv']
     console.log(importedfile.type)
       if ( importedfile.type !== 'application/csv') {
        message.success(`this is a a csv file`);
        const reader = new FileReader();
        reader.readAsText(importedfile, "UTF-8");
        reader.onload = (event) => {
         const content= event.target.result;
         checker(content, categories);
         }
      } else{
        return message.error(`please pick a csv file`);
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
        autoComplete="off"
      >
     
      <Form.Item name="products" label={itemslabel}  >
      <label style={{ display:'flex', flexDirection:'row',
        border:'1px solid #cfd8dc',padding: '0.5em 0.5em 0.5em 1em'}}>
        {loading? <LoadingOutlined style={{fontSize:'18px'}}/>:<UploadOutlined />}
      
        <Input type='file' 
         style={{width:0,height:0,opacity:0}}
         //accept='.csv,application/csv'
         onChange={ parsingFile} /> 
           Import 
        </label>
       
        </Form.Item> 
      </Form>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
      <Typography>
        Download a sample of the file : 
      </Typography>
      <Button icon={<DownloadOutlined/>}>Sample document</Button>
      <Typography>.csv file</Typography>
      </div>
      
    </Modal>
  );
};


export default OnboardingForm;
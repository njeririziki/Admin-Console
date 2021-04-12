import React, {useState} from 'react';
import {Form,Input,Button,Space} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const AddLocation = () => {

    const onFinish=(values)=>{
     console.log(values)

    }

    return (  
        <Form onFinish ={onFinish}
        autoComplete="off">
         <Form.List name="Locations">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  fieldKey={[fieldKey, 'first']}
                  rules={[{ required: true, message: 'Please add street' }]}
                >
                  <Input placeholder="Street" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <Input placeholder="City" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Location
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
         Save
        </Button>
      </Form.Item>

        </Form>
    );
}
 
export default AddLocation;
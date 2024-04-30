import React, { useState, useEffect } from 'react';
import { Button, Switch, Form, Input, InputNumber, DatePicker, Select } from 'antd';
import dayjs from 'dayjs';

const EditPatientForm = ({ patient, onSave }) => {
  const [form] = Form.useForm();
  const [editedPatient, setEditedPatient] = useState(patient);

  useEffect(() => {
    form.setFieldsValue({
        name: editedPatient.name,
        birthday: dayjs(editedPatient.birthday),
        location: editedPatient.location,
        email: editedPatient.email,
        phoneNumber: editedPatient.phoneNumber,
        sex: editedPatient.sex,
        cccd: editedPatient.cccd,
        bloodType: editedPatient.bloodType,
    //   medType: editedMedicine.medType,
    //   price: editedMedicine.price,
    //   quantity: editedMedicine.quantity,
    //   expiryDate: dayjs(editedMedicine.expiryDate),
    //   supplier: editedMedicine.supplier,
    });
  }, [editedPatient]);

  const onFinish = (values) => {
    // Convert expiryDate back to string in the required format
    const updatedPatient = {
      ...editedPatient,
      ...values,
      birthday: values.birthday.format('YYYY'),
    //   expiryDate: values.expiryDate.format('YYYY-MM-DD'),
    };
    onSave(updatedPatient);
  };

  return (
    <Form form={form} onFinish={onFinish} >
      <Form.Item
        label={<label className="read-only-label">Họ tên</label>}
        name="name"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input readOnly className="read-only-field" />
      </Form.Item>

      <Form.Item
        label={<label className="read-only-label">Năm sinh</label>}
        name="birthday"
        rules={[{ required: true, message: 'Please input the price of the medicine!' }]}
      >
        <DatePicker 
        picker="year" format="YYYY"
        readOnly className="read-only-field"
        style={{ width: '100%' }} 
          
        />
      </Form.Item>

      <Form.Item
        label={<label className="read-only-label">Địa chỉ</label>}
        name="location"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input readOnly className="read-only-field" />
      </Form.Item>
      <Form.Item
        label={<label className="read-only-label">Email</label>}
        name="email"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input readOnly className="read-only-field" />
      </Form.Item>
      <Form.Item
        label={<label className="read-only-label">SĐT</label>}
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input readOnly className="read-only-field" />
      </Form.Item>
      <Form.Item
        label={<label className="read-only-label">Giới tính</label>}
        name="sex"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input readOnly className="read-only-field" />
      </Form.Item>
      <Form.Item
        label={<label className="read-only-label">Số CCCD</label>}
        name="cccd"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input readOnly className="read-only-field" />
      </Form.Item>
      <Form.Item
        label="Nhóm máu"
        name="bloodType"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Select>
          <Select.Option value="A">A</Select.Option>
          <Select.Option value="B">B</Select.Option>
          <Select.Option value="AB">AB</Select.Option>
          <Select.Option value="O">O</Select.Option>
        </Select>
      </Form.Item>


      {/* <Form.Item
        label="Loại thuốc"
        name="medType"
        rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Giá"
        name="price"
        rules={[{ required: true, message: 'Please input the price of the medicine!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Số lượng"
        name="quantity"
        rules={[{ required: true, message: 'Please input the quantity of the medicine!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Ngày hết hạn"
        name="expiryDate"
        rules={[{ required: true, message: 'Please select the expiry date of the medicine!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Nhà cung cấp"
        name="supplier"
        rules={[{ required: true, message: 'Please input the supplier of the medicine!' }]}
      >
        <Input />
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item> 
    </Form>
  );
};

export default EditPatientForm;

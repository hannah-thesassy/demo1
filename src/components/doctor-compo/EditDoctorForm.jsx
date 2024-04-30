import React, { useState, useEffect } from 'react';
import { Button, Switch, Form, Input, InputNumber, DatePicker, Select } from 'antd';
import dayjs from 'dayjs';

const EditDoctorForm = ({ doctor, onSave }) => {
  const [form] = Form.useForm();
  const [editedDoctor, setEditedDoctor] = useState(doctor);

  useEffect(() => {
    form.setFieldsValue({
        name: editedDoctor.name,
        birthday: dayjs(editedDoctor.birthday),
        location: editedDoctor.location,
        email: editedDoctor.email,
        phoneNumber: editedDoctor.phoneNumber,
        sex: editedDoctor.sex,
        cccd: editedDoctor.cccd,
        department: editedDoctor.department,
        qualifications: editedDoctor.qualifications, 
        available: editedDoctor.available,
        time_off: editedDoctor.time_off,
    //   medType: editedMedicine.medType,
    //   price: editedMedicine.price,
    //   quantity: editedMedicine.quantity,
    //   expiryDate: dayjs(editedMedicine.expiryDate),
    //   supplier: editedMedicine.supplier,
    });
  }, [editedDoctor]);

  const onFinish = (values) => {
    // Convert expiryDate back to string in the required format
    const updatedDoctor = {
      ...editedDoctor,
      ...values,
      birthday: values.birthday.format('YYYY'),
    //   expiryDate: values.expiryDate.format('YYYY-MM-DD'),
    };
    onSave(updatedDoctor);
  };

  return (
    <Form form={form} onFinish={onFinish} >
      <Form.Item
        label={<label className="read-only-label">Họ tên</label>}
        name="name"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input readOnly className="read-only-field"
          // style={{
          //   color: "gray",
          //   cursor: "not-allowed"
          // }}
        />
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
        label="Khoa"
        name="department"
        rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
      >
        <Select>
          <Select.Option value="Ngoại tổng quát">Ngoại tổng quát</Select.Option>
          <Select.Option value="Nhi khoa">Nhi khoa</Select.Option>
          <Select.Option value="Y học gia đình">Y học gia đình</Select.Option>
          <Select.Option value="Sản phụ khoa">Sản phụ khoa</Select.Option>
          <Select.Option value="Thần kinh học">Thần kinh học</Select.Option>
          <Select.Option value="Cấp cứu">Cấp cứu</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Chuyên khoa"
        name="qualifications"
        rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
      >
        <Select>
          <Select.Option value="Hồi sức tích cực">Hồi sức tích cực</Select.Option>
          <Select.Option value="Gây mê">Gây mê</Select.Option>
          <Select.Option value="Tâm thần">Tâm thần</Select.Option>
          <Select.Option value="Sức khoẻ cộng đồng">Sức khoẻ cộng đồng</Select.Option>
          <Select.Option value="Ngoại thần kinh">Ngoại thần kinh</Select.Option>
          <Select.Option value="Ngoại tổng quát">Ngoại tổng quát</Select.Option>
          <Select.Option value="Phổi">Phổi</Select.Option>
          <Select.Option value="Sơ sinh">Sơ sinh</Select.Option>
          <Select.Option value="Tim mạch">Tim mạch</Select.Option>
          <Select.Option value="Tiêu hoá">Tiêu hoá</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Hiện diện"
        name="available"
        valuePropName="checked"
        rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
      >
        <Switch />
      </Form.Item>

      <Form.Item
        label="Giờ nghỉ"
        name="time_off"
        rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
      >
        <Input />
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

export default EditDoctorForm;

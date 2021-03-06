import React, { useEffect, useState, useReducer } from "react";
import Banner from "../../components/Banner";

import {
  Card,
  Upload,
  Typography,
  Table,
  Image,
  Space,
  Button,
  Modal,
  Form,
  Input,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
// Similiar to Our History Page
import churchWide from "../../imgs/church-wide.jpg";
import axios from "axios";

function EditTeam() {
  const { Title } = Typography;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsModalVisible(true);
              setRecordToEdit(record);
            }}
          >
            Edit/Delete
          </a>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [record, setRecordToEdit] = useState({});

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (event) => {
    Object.entries(record).forEach((i) => {
      record[event.target.name] = event.target.value;
      setRecordToEdit(record);
    });
  };

  //API calls
  useEffect(() => {
    try {
      axios.get(`http://localhost:8080/team`).then((res) => {
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addRecord = () => {
    axios.post(`http://localhost:8080/team`, {
      name: "Fill name",
      designation: "Fill Designation",
      image: "Select Image",
    });
  };
  const saveRecord = () => {
    axios.put(`http://localhost:8080/team`, record);
  };
  const deleteRecord = () => {
    axios.delete(`http://localhost:8080/team`, { data: record });
  };

  return (
    <>
      <Banner name={"Edit Team Page"} image={churchWide}></Banner>

      <div className="main-container">
        <br />
        <Title style={{ textAlign: "center" }}>Edit Team Page</Title>
        <hr className="thick-line"></hr>
        <br />
        <br />

        <Table columns={columns} dataSource={data} />
        <Button
          key="Add"
          onClick={() => {
            addRecord();
            window.location.reload();
          }}
        >
          Add Row
        </Button>
        <br />
        {/*Popup modal */}
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="cancel"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                saveRecord();
                setIsModalVisible(false);
              }}
            >
              Save
            </Button>,
            <Button
              key="delete"
              type="primary"
              danger
              onClick={() => {
                deleteRecord(record);
                window.location.reload();
              }}
            >
              Delete
            </Button>,
          ]}
        >
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="Name"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="name"
                defaultValue={record.name ? record.name : ""}
              />
            </Form.Item>
            <Form.Item
              label="Designation"
              name="Designation"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: "Please input the designation!",
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="designation"
                defaultValue={record.designation ? record.designation : ""}
              />
            </Form.Item>
            <Form.Item>
              <Upload
                name="logo"
                action="/upload.do"
                listType="picture"
                onChange={handleChange}
              >
                <Button icon={<UploadOutlined />}>
                  Click to upload new image
                </Button>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditTeam;

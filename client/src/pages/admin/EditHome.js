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

import axios from "axios";
import churchWide from "../../imgs/church-wide.jpg";
function EditHome(props) {
  




  return (<>
  <Banner name={"Edit Home Page"} image={churchWide}></Banner>
  </>
  );
}

export default EditHome;

import React, { useEffect } from "react";
import FileUpload from "../components/forms/FileUpload/FileUpload";
import { FileUploadType, CompleteColumnLabel } from "../common/constant";
import GeneratorTemplate from "../components/GenerateTemplate/GenerateTemplate";
import * as API from "../apiConfig/api";
import IndividualGrid from "../IndividualGrid";

const Home = () => {
  useEffect(() => {
    getData();
    // getMockedData();
  }, []);

  const getData = async () => {
    const res = await API.get("https://catfact.ninja/fact");
    console.log(res, "data");
  };

  const getMockedData = async () => {
    const res = await API.get("http://localhost:4000/users");
    console.log(res, "mockedData");
  };

  return <div>Home</div>;
};

export default Home;

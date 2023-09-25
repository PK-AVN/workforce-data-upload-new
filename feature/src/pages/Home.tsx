import React, { useEffect } from "react";
import FileUpload from "../components/forms/FileUpload";
import { FileUploadType, CompleteColumnLabel } from "../common/constant";
import GeneratorTemplate from "../components/GenerateTemplate";
import * as API from "../apiConfig/api";

const Home = () => {
  const manadatoryColumn = Object.keys(CompleteColumnLabel);
  const columnLable = [
    ...manadatoryColumn,
    "Unit",
    "EmployeeID",
    "City",
  ]; // Define your expected column in the correct order

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

  return (
    <>
      <p>Complete Download</p>
      <GeneratorTemplate
        columnLable={columnLable}
        title="Complete Data Template"
        uploadType={FileUploadType.COMPLETE_UPLOAD}
      />
      <p>Changes Download</p>

      <GeneratorTemplate
        columnLable={columnLable}
        title="Changes Data Template"
        uploadType={FileUploadType.CHANGE_UPLOAD}
      />
      <p>Complete Upload</p>
      <FileUpload
        columnLable={columnLable}
        uploadType={FileUploadType.COMPLETE_UPLOAD}
      />
      <p>Changes Upload</p>
      <FileUpload
        columnLable={columnLable}
        uploadType={FileUploadType.CHANGE_UPLOAD}
      />
    </>
  );
};

export default Home;

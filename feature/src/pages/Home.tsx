import React from "react";
import FileUpload from "../components/forms/FileUpload";
import { FileUploadType, CompleteColumnLabel } from "../common/constant";
import GeneratorTemplate from "../components/GenerateTemplate";
// import { TColumnLabel } from "../common/types";

const Home = () => {
  const manadatoryColumn = Object.keys(CompleteColumnLabel);
  const columnLable = [
    ...manadatoryColumn,
    "Unit",
    "EmployeeID",
    "City",
  ]; // Define your expected column in the correct order
  console.log(columnLable);
  return (
    <>
      <p>Complete Download</p>
      <GeneratorTemplate
        columnLable={columnLable}
        title="Complete Data Template"
      />
      <p>Changes Download</p>

      <GeneratorTemplate
        columnLable={columnLable}
        title="Changes Data Template"
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

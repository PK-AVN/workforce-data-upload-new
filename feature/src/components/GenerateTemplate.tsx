import React from "react";
import generateCSV from "../utils/generateCSV";
import { ChangesColumnLabel, FileUploadType } from "../common/constant";

type Props = {
  columnLable: string[];
  title: string;
  uploadType: string;
};

const GeneratorTemplate = (props: Props) => {
  const moderatedCSVData = {
    fields: [
      ...props.columnLable,
      ...(props.uploadType === FileUploadType.CHANGE_UPLOAD
        ? [ChangesColumnLabel.Action]
        : []),
    ],
    data: [], //Keep empty array otherwise parser will throw error
  };
  console.log(moderatedCSVData.fields);
  return (
    <div>
      <button onClick={() => generateCSV(moderatedCSVData, props.title)}>
        {props.title}
      </button>
    </div>
  );
};

export default GeneratorTemplate;

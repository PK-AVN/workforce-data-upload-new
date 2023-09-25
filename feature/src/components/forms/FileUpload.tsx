import React, { useRef, useState } from "react";
import parseCSV from "../../utils/parseCSV";
import validateCSV from "../../utils/validateCSV";
import { TColumnLabel } from "../../common/types";
import defaultErrors from "../../common/errorList";

type Props = {
  columnLable: string[];
  uploadType: string;
};

const FileUpload = (props: Props) => {
  const [csvData, setCSVData] = useState<TColumnLabel[]>([]);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const uploadedFiled = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const file = uploadedFiled.current?.files?.[0];
    const fileExtension = file?.name.split(".").pop();

    if(fileExtension?.toLowerCase() !== "csv"){
        setValidationErrors([defaultErrors.fileFormatError]);
        return;
    }

    if (file) {
      try {
        const parsedData = await parseCSV(file);
        const errors = validateCSV(
          parsedData.data,
          props.uploadType,
          props.columnLable
        );
        // setCSVData(parsedData.data);
        setValidationErrors(errors);
      } catch (error) {
        console.error("Error parsing CSV:", error);
      }
    }
  };

  return (
    <form onSubmit={handleFileUpload}>
      <input type="file" accept=".csv" name="uploadFile" ref={uploadedFiled} />
      <button type="submit">Validate File</button>
      {validationErrors.length > 0 && (
        <div className="error-messages">
          <h2 style={{ color: "red" }}>Validation Errors:</h2>
          <ul>
            {validationErrors.map((error, index) => (
              <ol key={index}>{error}</ol>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default FileUpload;

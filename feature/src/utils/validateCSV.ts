import { has, isEqual } from "lodash";
import { TColumnLabel } from "../common/types";
import defaultErrors from "../common/errorList";
import { FileUploadType } from "../common/constant";

const validateCSV = (
  uploadedFile: TColumnLabel[],
  uploadType: string,
  userSelectedColumnLables: string[]
): string[] => {
  const errors: string[] = [];

  // Check if headers are present and in the correct order
  const uploadedFileColumnLables = Object.keys(uploadedFile[0]);
  if (uploadType === FileUploadType.CHANGE_UPLOAD) {
    userSelectedColumnLables.push("Action");
    // Change Upload should have "Action" column
    if (!uploadedFileColumnLables.includes("Action")) {
      errors.push(defaultErrors.changeDataColumnError);
    }
  } else {
    // Complete Upload should not have "Action" column
    if (uploadedFileColumnLables.includes("Action")) {
      errors.push(defaultErrors.completeDataColumnError);
    }
  }

  if (!isEqual(uploadedFileColumnLables, userSelectedColumnLables)) {
    errors.push(defaultErrors.columnMisMatch);
  }
  // Add more validation rules here if needed

  return errors;
};

export default validateCSV;

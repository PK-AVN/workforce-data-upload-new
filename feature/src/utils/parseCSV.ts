import Papa from "papaparse";
import { TColumnLabel } from "../common/types";

const parseCSV = (file: File): Promise<Papa.ParseResult<TColumnLabel>> => {
  return new Promise((resolve, reject) => {
    Papa.parse<TColumnLabel>(file, {
      encoding: "UTF-8",
      delimiter: ",",
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        resolve(result);
      },
      error: (error) => {
        console.log(error);
        reject(error);
      },
    });
  });
};

export default parseCSV

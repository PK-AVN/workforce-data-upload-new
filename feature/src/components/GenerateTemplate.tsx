import React from "react";
import generateCSV from "../utils/generateCSV";
import { TColumnLabel } from "../common/types";

type Props = {
  columnLable: string[];
  title: string;
};

const GeneratorTemplate = (props: Props) => {
  const moderatedCSVData = {
    fields: props.columnLable,
    data: [], //Keep empty array otherwise parser will throw error
  };
  return (
    <div>
      <button onClick={() => generateCSV(moderatedCSVData, props.title)}>
        {props.title}
      </button>
    </div>
  );
};

export default GeneratorTemplate;

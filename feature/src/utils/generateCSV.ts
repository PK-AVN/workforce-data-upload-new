import Papa from "papaparse";

const generateCSV = (
  columnLabels: { fields: string[]; data: string[] },
  filename: string
) => {
  const config = {
    header: true,
    delimiter: ",",
  };
  const csv = Papa.unparse(columnLabels, config);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${filename}.csv`);

  link.click();

  window.URL.revokeObjectURL(url);
};

export default generateCSV;

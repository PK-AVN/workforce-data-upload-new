export interface IColumnLabelMandatory {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  PrimaryPhone: number;
  HomeCountry: string;
}

export interface IColumnLabelOptional extends IColumnLabelMandatory {
  Unit?: string;
  EmployeeID?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  City?: string;
  Division?: string;
}

export interface IColumnLabelAdditional extends IColumnLabelOptional {
  Action: string;
}
export type TColumnLabel =
  | IColumnLabelMandatory
  | IColumnLabelAdditional;
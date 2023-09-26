import type { Meta, StoryObj } from "@storybook/react";
import FileUpload from "./FileUpload";
import { CompleteColumnLabel } from "../../../common/constant";

const meta = {
  title: "Component/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

const manadatoryColumn = Object.keys(CompleteColumnLabel);

export const Complete: Story = {
  args: {
    columnLable: [...manadatoryColumn, "Unit", "EmployeeID", "City"],
    uploadType: "Complete",
  },
};

export const Change: Story = {
  args: {
    columnLable: [...Complete.args.columnLable, "Action"],
    uploadType: "Change",
  },
};

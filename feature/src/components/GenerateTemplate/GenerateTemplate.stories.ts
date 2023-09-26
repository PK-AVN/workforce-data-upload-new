import type { Meta, StoryObj } from "@storybook/react";
import GenerateTemplate from "./GenerateTemplate";
import { CompleteColumnLabel } from "../../common/constant";

const meta = {
  title: "Component/GenerateTemplate",
  component: GenerateTemplate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GenerateTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const manadatoryColumn = Object.keys(CompleteColumnLabel);

export const Complete: Story = {
  args: {
    columnLabel: [...manadatoryColumn, "Unit", "EmployeeID", "City"],
    title: "Complete Data Template",
    uploadType: "Complete",
  },
};

export const Change: Story = {
  args: {
    columnLabel: [...Complete.args.columnLabel, "Action"],
    title: "Changes Data Template",
    uploadType: "Change",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Input, type InputProps } from "./index";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Input type",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

// Default story
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

// With placeholder
export const WithPlaceholder: Story = {
  args: {
    placeholder: "Type your message here",
  },
};

// Email input
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
};

// Password input
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    placeholder: "This input is disabled",
    disabled: true,
  },
};

// With value
export const WithValue: Story = {
  args: {
    defaultValue: "Pre-filled value",
    placeholder: "Enter text...",
  },
};

// Multiple inputs showcase
export const MultipleInputs: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />
    </div>
  ),
};

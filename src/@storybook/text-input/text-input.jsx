import { MailOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

export const TextInput = ({
  label,
  labelCol,
  rules,
  suffix = false,
  disabled,
  placeholder,
  inputClassName = "",
  name,
  className,
  type = "text",
}) => {
  return (
    <Form.Item
      name={name}
      validateStatus="success"
      hasFeedback={false}
      label={label}
      labelCol={labelCol}
      rules={rules}
      className={className}
      required
    >
      <Input
        disabled={disabled}
        prefix={false}
        placeholder={placeholder}
        className={inputClassName}
        type={type}
        suffix={suffix && <MailOutlined />}
      />
    </Form.Item>
  );
};

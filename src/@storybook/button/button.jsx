/* eslint-disable react/prop-types */
import { Button as AndButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const Button = ({
  label,
  onClick,
  htmlType = "submit",
  isLoading,
  className = "w-full",
  icon = false,
  lableStyles = "",
  disabled = false,
  type = "primary",
}) => {
  return (
    <AndButton
      loading={isLoading}
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      type={type}
      className={`flex bg-primary justify-center p-4 items-center rounded-lg 
      hover:opacity-60 hover:transition-all ${className}`}
    >
      {icon && <PlusOutlined />}
      <div className={`text-xs text-white ${lableStyles}`}>{label}</div>
    </AndButton>
  );
};

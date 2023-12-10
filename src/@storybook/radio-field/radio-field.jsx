import { Form, Radio } from "antd";

export const RadioForm = ({
  label,
  labelCol,
  rules,
  name,
  className,
  options = [],
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
      <Radio.Group>
        {options.map((el) => (
          <Radio
            className="!text-xs text-gray font-sans"
            key={el.value}
            value={el.value}
          >
            {el.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

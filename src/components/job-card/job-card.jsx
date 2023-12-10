import { Button } from "../../@storybook";
import { NetflixIcon } from "../../assets";
import { API_URL } from "../../constants";
import { remove } from "../../services";
import { ApplyType } from "../../views/home/constants";
import { MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";

export const JobCard = ({
  title,
  jobType,
  location,
  industry,
  company,
  maxExperience,
  minExperience,
  minSalary,
  maxSalary,
  totalExperience,
  applyType,
  id,
  onDelete,
  onEdit,
}) => {
  const content = (
    <div className="flex flex-col gap-3">
      <a onClick={onEdit(id)}>Edit</a>
      <a onClick={onDelete(id)}>Delete</a>
    </div>
  );

  return (
    <div className="flex items-start gap-3">
      <img src={NetflixIcon} className="w-18 mt-2 object-contain" />
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-xs">
            {company} - {industry}
          </p>
          <p className="text-xs text-gray">
            {location} ({jobType})
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <p className="text-xs">Part-Time (9.00 am - 5.00 pm IST)</p>
            <p className="text-xs">
              Experience ({minExperience} - {maxExperience} years)
            </p>
            <p className="text-xs">
              INR (₹) {minSalary} - {maxSalary} / Month
            </p>
            <p className="text-xs">{totalExperience} employees</p>
            {applyType === ApplyType.quick ? (
              <Button label="Apply Now" className="w-36 p-5 mt-3" />
            ) : (
              <Button
                label="External Apply"
                className="w-36 p-5 mt-3 !bg-white border-primary"
                lableStyles="text-primary"
              />
            )}
          </div>
        </div>
        <div className="">
          <Popover
            placement="right"
            className="cursor-pointer"
            content={content}
          >
            <MoreOutlined />
          </Popover>
        </div>
      </div>
    </div>
  );
};

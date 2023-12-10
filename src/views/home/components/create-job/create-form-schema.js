export const createJobSchema = {
  title: {
    name: "title",
    className: "!mb-3",
    inputClassName: "py-2",
    label: "Job Title Name",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        required: true,
        message: "Job title is required!",
      },
      { type: "text", message: "Invalid job title!" },
    ],
    placeholder: "ex. UX UI Designer",
  },
  company: {
    name: "company",

    className: "!mb-3",
    inputClassName: "py-2",
    label: "Company Name",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        required: true,
        message: "Company is required!",
      },
      { type: "text", message: "Invalid company name!" },
    ],
    placeholder: "ex. Google",
  },
  industry: {
    name: "industry",

    className: "!mb-3 !w-full",
    inputClassName: "py-2",
    label: "Industry",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        required: true,
        message: "Industry is required!",
      },
      { type: "text", message: "Invalid industry name!" },
    ],
    placeholder: "ex. Information Technology ",
  },
  location: {
    name: "location",

    className: "!mb-3 !w-full",
    inputClassName: "py-2",
    label: "Location",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        required: false,
        message: "Location is required!",
      },
      { type: "text", message: "Invalid industry name!" },
    ],
    placeholder: "ex. Chennai",
  },
  remoteType: {
    name: "remoteType",

    className: "!mb-3 !w-full",
    inputClassName: "py-2",
    label: "Remote type",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        required: false,
        message: "Remote type is required!",
      },
      { type: "text", message: "Invalid remote type name!" },
    ],
    placeholder: "ex. In-office",
  },
};

export const createJobExpirence = {
  minExperience: {
    name: "minExperience",
    className: "!mb-3 w-full",
    inputClassName: "py-2",
    label: "Experience",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        pattern: /^[0-9]*\.?[0-9]*$/,
        message: "Invalid value",
      },
      { type: "text", message: "Invalid value" },
    ],
    placeholder: "Minimum",
  },
  maxExperience: {
    name: "maxExperience",
    className: "!mb-3 w-full",
    inputClassName: "py-2",
    label: " ",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        pattern: /^[0-9]*\.?[0-9]*$/,
        message: "Invalid value",
      },
      { type: "text", message: "Invalid value" },
    ],
    placeholder: "Maximum",
  },
  minSalary: {
    name: "minSalary",
    className: "!mb-3 w-full",
    inputClassName: "py-2",
    label: "Salary",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        pattern: /^[0-9]*\.?[0-9]*$/,
        message: "Invalid value",
      },
      { type: "text", message: "Invalid value" },
    ],
    placeholder: "Minimum",
  },
  maxSalary: {
    name: "maxSalary",
    className: "!mb-3 w-full",
    inputClassName: "py-2",
    label: " ",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        pattern: /^[0-9]*\.?[0-9]*$/,
        message: "Invalid value",
      },
      { type: "text", message: "Invalid value" },
    ],
    placeholder: "Maximum",
  },

  totalEmployee: {
    name: "totalEmployee",
    className: "!mb-3 w-full",
    inputClassName: "py-2",
    label: "Total employee",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    rules: [
      {
        pattern: /^[0-9]*\.?[0-9]*$/,
        message: "Invalid value",
      },
      { type: "text", message: "Invalid value" },
    ],
    placeholder: "ex. 100",
  },
  type: {
    name: "applyType",
    className: "!mb-1 w-full",
    inputClassName: "py-2",
    label: "Apply type",
    suffix: false,
    labelCol: {
      className: "child:!text-xs font-bold font-sans",
    },
    options: [
      { label: "Quick apply", value: "QuickApply" },
      { label: "External apply", value: "ExternalApply" },
    ],
  },
};

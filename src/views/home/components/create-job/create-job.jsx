/* eslint-disable react/prop-types */
import { Navigation } from "../../constants";
import {
  Button,
  ModalComp,
  TextInput,
  RadioForm,
} from "../../../../@storybook";
import { useMemo, useState } from "react";
import { createJobExpirence, createJobSchema } from "./create-form-schema";
import { Form } from "antd";
import { patch, post } from "../../../../services";
import { API_URL } from "../../../../constants";

export const CreateJob = ({
  navigate,
  isAddModalOpen,
  setNavigate,
  addJobs,
  setFormPaylaod,
  getJobs,
  formPaylaod,
  isEdit,
}) => {
  const [apiLoading, setApiLoading] = useState(false);

  const Step1 = useMemo(() => {
    return (
      <div className="my-6">
        <TextInput {...createJobSchema.title} />
        <TextInput {...createJobSchema.company} />
        <TextInput {...createJobSchema.industry} />
        <div className="flex w-full justify-between gap-4">
          <TextInput {...createJobSchema.location} />
          <TextInput {...createJobSchema.remoteType} />
        </div>
      </div>
    );
  }, []);

  const Step2 = useMemo(() => {
    return (
      <div className="my-6">
        <div className="flex w-full justify-between gap-4">
          <TextInput {...createJobExpirence.minExperience} />
          <TextInput {...createJobExpirence.maxExperience} />
        </div>
        <div className="flex w-full justify-between gap-4">
          <TextInput {...createJobExpirence.minSalary} />
          <TextInput {...createJobExpirence.maxSalary} />
        </div>
        <TextInput {...createJobExpirence.totalEmployee} />
        <RadioForm {...createJobExpirence.type} />
      </div>
    );
  }, []);

  const renderBody = useMemo(() => {
    switch (navigate) {
      case Navigation.profile:
        return Step1;
      case Navigation.experience:
        return Step2;
      default:
        return null;
    }
  }, [Step1, Step2, navigate]);

  const renderLabel = useMemo(() => {
    switch (navigate) {
      case Navigation.profile:
        return "Next";
      case Navigation.experience:
        return "Save";
      default:
        return null;
    }
  }, [navigate]);

  const renderStep = useMemo(() => {
    switch (navigate) {
      case Navigation.profile:
        return `1`;
      case Navigation.experience:
        return "2";
      default:
        return null;
    }
  }, [navigate]);

  const onSubmitJobProfile = (paylaod) => {
    setFormPaylaod((prev) => ({ ...prev, ...paylaod }));
    setNavigate(Navigation.experience);
  };

  const onSubmitJobExpirence = async (paylaod) => {
    setApiLoading(true);
    const payloadData = {
      ...formPaylaod,
      ...paylaod,
    };
    const {
      title,
      company,
      industry,
      location,
      remoteType,
      minExperience,
      maxExperience,
      minSalary,
      maxSalary,
      totalEmployee,
      applyType,
    } = payloadData;

    let resp = {};
    if (!isEdit) {
      resp = await post(API_URL.getJobs, {
        title,
        company,
        industry,
        location,
        jobType: remoteType,
        minExperience,
        maxExperience,
        minSalary,
        maxSalary,
        totalExperience: totalEmployee,
        applyType,
      });
    } else {
      resp = await patch(`${API_URL.getJobs}/${formPaylaod.id}`, {
        title,
        company,
        industry,
        location,
        jobType: remoteType,
        minExperience,
        maxExperience,
        minSalary,
        maxSalary,
        totalExperience: totalEmployee,
        applyType,
      });
    }

    if (resp?.status === 201 || resp?.status === 200) {
      addJobs();
      setTimeout(() => {
        setNavigate(Navigation.profile);
      }, 1000);
      getJobs();
      setFormPaylaod(null);
    }
    setApiLoading(false);
  };

  const onSubmitJob = (paylaod) => {
    switch (navigate) {
      case Navigation.profile:
        return onSubmitJobProfile(paylaod);
      case Navigation.experience:
        return onSubmitJobExpirence(paylaod);
      default:
        return null;
    }
  };

  console.log({ formPaylaod });
  return (
    <>
      <ModalComp open={isAddModalOpen} handleCancel={addJobs}>
        <Form
          key={formPaylaod?.id}
          requiredMark={false}
          layout="vertical"
          onFinish={onSubmitJob}
          initialValues={{
            ...formPaylaod,
          }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold">Create a job</h2>
            <b className="text-xs">Step {renderStep}</b>
          </div>
          {renderBody}
          <div className="flex justify-end">
            <Button
              label={renderLabel}
              className="p-6"
              disabled={apiLoading}
              loading={apiLoading}
            />
          </div>
        </Form>
      </ModalComp>
    </>
  );
};

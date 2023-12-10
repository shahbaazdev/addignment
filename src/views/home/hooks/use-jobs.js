import { useState } from "react";
import { API_URL } from "../../../constants";
import { get, remove } from "../../../services";
import { Navigation } from "../constants";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoaded, setLoaded] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [navigate, setNavigate] = useState(Navigation.profile);
  const [formPaylaod, setFormPaylaod] = useState(null);
  const [isEdit, setEdit] = useState(false);

  const getJobs = async () => {
    setLoaded(true);
    const resp = await get(API_URL.getJobs);
    if (resp.status === 200) {
      const { data } = resp;
      setJobs(data ?? []);
    }
    setLoaded(false);
    setEdit(false);
  };

  const addJobs = () => {
    setAddModalOpen((prev) => !prev);
  };

  const onDelete = (id) => async () => {
    const resp = await remove(`${API_URL.getJobs}/${id}`);
    if (resp.status === 200) {
      getJobs();
    }
  };

  const onEdit = (id) => async () => {
    setEdit(true);
    setNavigate(Navigation.profile);
    const data = jobs?.find((el) => el.id === id);
    const { applyType, jobType, totalExperience, ...rest } = data;
    setFormPaylaod({
      ...rest,
      remoteType: jobType,
      totalEmployee: totalExperience,
      type: applyType,
    });
    addJobs();
  };

  return {
    getJobs,
    jobs,
    isLoaded,
    isAddModalOpen,
    addJobs,
    navigate,
    setNavigate,
    setFormPaylaod,
    onDelete,
    formPaylaod,
    onEdit,
    isEdit,
  };
};

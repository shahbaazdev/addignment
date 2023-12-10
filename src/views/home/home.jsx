import { useEffect } from "react";
import { Button } from "../../@storybook";
import { Header } from "../../components";
import { CreateJob, JobsList } from "./components";
import { useJobs } from "./hooks";
import { Spin, Empty } from "antd";

export const Home = () => {
  const {
    jobs,
    getJobs,
    isLoaded,
    isAddModalOpen,
    navigate,
    addJobs,
    setNavigate,
    setFormPaylaod,
    formPaylaod,
    onDelete,
    onEdit,
    isEdit,
  } = useJobs();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoaded) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <>
      <Header>
        <Button className="w-24 p-6" label="Add Job" onClick={addJobs} />
      </Header>
      {jobs?.length > 0 ? (
        <JobsList jobs={jobs ?? []} onDelete={onDelete} onEdit={onEdit} />
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Empty description={false} />{" "}
        </div>
      )}
      <CreateJob
        navigate={navigate}
        isAddModalOpen={isAddModalOpen}
        setNavigate={setNavigate}
        addJobs={addJobs}
        setFormPaylaod={setFormPaylaod}
        formPaylaod={formPaylaod}
        getJobs={getJobs}
        isEdit={isEdit}
      />
    </>
  );
};

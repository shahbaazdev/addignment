import { JobCard } from "../../../../components";

export const JobsList = ({ jobs, onDelete, onEdit }) => {
  return (
    <div className="p-8">
      <div className="flex gap-6 flex-wrap justify-center">
        {jobs?.map((job) => (
          <div
            key={job.id}
            className="w-full md:w-[46%] bg-white rounded-lg p-4"
          >
            <JobCard {...job} onDelete={onDelete} onEdit={onEdit} />
          </div>
        ))}
      </div>
    </div>
  );
};

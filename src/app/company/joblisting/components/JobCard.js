// components/JobCard.js
const JobCard = ({ job }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return "Just posted";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
          <p className="text-lg font-semibold text-blue-600">{job.company}</p>
        </div>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {job.location}
        </div>
        {job.experience && (
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {job.experience}
          </div>
        )}
        {job.salary && (
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            {job.salary}
          </div>
        )}
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          {formatDate(job.createdAt)}
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>

      {job.skills && job.skills.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {job.skills.slice(0, 5).map((skill, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 5 && (
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                +{job.skills.length - 5} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        {job.applicationUrl && (
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </a>
        )}
        <button className="bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
          Save Job
        </button>
      </div>
    </div>
  );
};

export default JobCard;

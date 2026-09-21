import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");





  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_backend_base_url +"/projects/getAllProjects");

        if (response.data.success) {
          setProjects(response.data.projects);
        } else {
          setError(response.data.msg);
        }
      } catch (requestError) {
        console.error("Error getting projects:", requestError);
        setError("Unable to load projects.");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(import.meta.env.VITE_backend_base_url +"/projects/deleteProject", { id });

      if (response.data.success) {
        setProjects((currentProjects) =>
          currentProjects.filter((project) => project._id !== id)
        );
      } else {
        setError(response.data.msg);
      }
    } catch (requestError) {
      console.error("Error deleting project:", requestError);
      setError("Unable to delete project.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold text-[#0B1F4D]">Projects</h1>
          <button
            type="button"
            onClick={() => navigate("/projectCreate")}
            className="rounded-lg bg-[#0B1F4D] px-5 py-2.5 text-white transition-colors hover:bg-[#0F2A66]"
          >
            Create Project
          </button>
        </div>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        {loading && <p className="text-gray-600">Loading projects...</p>}
        {!loading && !error && projects.length === 0 && (
          <p className="text-gray-600">No projects found.</p>
        )}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project._id}
              className="overflow-hidden rounded-xl bg-white shadow-md"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="space-y-3 p-5">
                <h2 className="text-xl font-semibold text-[#0B1F4D]">{project.name}</h2>
                <p className="text-sm text-gray-600">Customer: {project.customerName}</p>
                {project.notes && <p className="text-sm text-gray-700">{project.notes}</p>}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleDelete(project._id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                  onClick={function (){
                    navigate(`/projectUpdate/${project._id}`)
                  }}
                    type="button"
                    className="rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700"
                  >
                    Update
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;

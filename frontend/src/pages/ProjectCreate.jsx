import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProjectCreate = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(import.meta.env.VITE_backend_base_url + "/projects/projectCreate", {
        name,
        image,
        customerName,
        notes,
      },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (response.data.success == true) {
        navigate("/projects");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 space-y-5">
      <h2 className="text-xl font-semibold text-[#0B1F4D] mb-2">Create Project</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter project name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0] )}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter customer name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any notes"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div
        onClick={handleSubmit}
        className="w-full text-center bg-[#0B1F4D] text-white py-2 rounded-lg cursor-pointer hover:bg-[#0F2A66] transition-colors"
      >
        Create Project
      </div>
    </div>
  );
};

export default ProjectCreate;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MemberCreate = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [phoneNo, setPhoneNo] = useState("");
    const [post, setPost] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async () => {
        try {



            const response = await axios.post(
                import.meta.env.VITE_backend_base_url + "/member/memberCreate",
                {
                    image, name, post, phoneNo, address
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.data.success === true) {
                navigate("/members");
            }
        } catch (error) {
            console.error("Error creating member:", error);
        }
    };

    return (
        <div className="max-w-xl ml-50 mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 space-y-5">
            <h2 className="text-xl font-semibold text-[#0B1F4D] mb-2">
                Create Member
            </h2>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Member Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter member name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image
                </label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                </label>
                <input
                    type="text"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Post
                </label>
                <input
                    type="text"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    placeholder="Enter member post"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                </label>
                <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter member address"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div
                onClick={handleSubmit}
                className="w-full text-center bg-[#0B1F4D] text-white py-2 rounded-lg cursor-pointer hover:bg-[#0F2A66] transition-colors"
            >
                Create Member
            </div>
        </div>
    );
};

export default MemberCreate;


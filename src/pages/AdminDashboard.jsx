import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sideadmin } from "../components";

const AdminDashboard = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/consultants"
        );
        setCounselors(response.data);
      } catch (error) {
        console.error("Error fetching counselors:", error);
      }
    };

    fetchCounselors();
  }, []);

  const handleApproveCounselor = async (id) => {
    try {
      await axios.patch(`http://localhost:8001/api/counselors/${id}/approve`);
      setCounselors((prev) =>
        prev.filter((counselor) => counselor._id !== id)
      );
    } catch (error) {
      console.error("Error approving counselor:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 shadow-md bg-white">
        <Sideadmin />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Counselor Approvals
        </h1>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full text-left">
            
            {/* Table Header */}
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Specialty
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {counselors.map((counselor) => (
                <tr
                  key={counselor._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {counselor.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {counselor.speciality}
                  </td>

                  <td className="px-6 py-4">
                    {counselor.isApproved ? (
                      <span className="text-green-600 font-semibold">
                        Approved
                      </span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">
                        Pending
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {!counselor.isApproved && (
                      <button
                        onClick={() =>
                          handleApproveCounselor(counselor._id)
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
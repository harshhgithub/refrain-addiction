import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserCard = ({ name, email, college, addiction, city }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md transition">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <FaUserCircle size={36} className="text-gray-400" />
        <h3 className="font-semibold text-lg text-blue-700">{name}</h3>
      </div>

      {/* USER INFO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-700">

        <div>
          <span className="font-medium text-gray-500">Email</span>
          <p>{email}</p>
        </div>

        <div>
          <span className="font-medium text-gray-500">College</span>
          <p>{college}</p>
        </div>

        <div>
          <span className="font-medium text-gray-500">Addiction</span>
          <p>{addiction}</p>
        </div>

        <div>
          <span className="font-medium text-gray-500">City</span>
          <p>{city}</p>
        </div>

      </div>

    </div>
  );
};

export default UserCard;
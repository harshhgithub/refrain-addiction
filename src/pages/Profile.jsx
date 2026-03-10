import React, { useState, useEffect } from "react";
import { Sidebar } from "../components";
import axios from "axios";
import useSharedStore from "./Store";
import { MdEmail, MdLocationCity, MdSchool, MdPerson } from "react-icons/md";

function Profile() {
  const [user, setUser] = useState({});
  const email = useSharedStore((state) => state.sharedData);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/api/userss?email=${email}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (email) fetchUser();
  }, [email]);

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-12 py-10">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Your Profile
        </h1>

        {/* PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl">

          {/* SECTION TITLE */}
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Personal Information
          </h2>

          {/* GRID INFO */}
          <div className="grid md:grid-cols-2 gap-8">

            <ProfileField
              icon={<MdPerson size={24} />}
              label="Full Name"
              value={user.name}
            />

            <ProfileField
              icon={<MdEmail size={24} />}
              label="Email Address"
              value={user.email}
            />

            <ProfileField
              icon={<MdLocationCity size={24} />}
              label="City"
              value={user.city}
            />

            <ProfileField
              icon={<MdSchool size={24} />}
              label="College"
              value={user.college}
            />

          </div>

        </div>

      </div>
    </div>
  );
}

/* PROFILE FIELD */
function ProfileField({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">

      <div className="text-blue-600 mt-1">
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-sm uppercase tracking-wide">
          {label}
        </p>
        <p className="text-xl font text-gray-900">
          {value || "-"}
        </p>
      </div>

    </div>
  );
}

export default Profile;
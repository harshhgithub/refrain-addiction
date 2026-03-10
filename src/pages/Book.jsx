import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components';
import ConsultantCard from '../components/ConsultantCard';
import axios from 'axios';
import useSharedStore from './Store';
import divider from '../assets/divider.svg';
import { Link } from 'react-router-dom';

function Book() {

  const [consultants, setConsultants] = useState([]);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [selectedConsultantName, setSelectedConsultantName] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const email = useSharedStore((state) => state.sharedData);

  const handleConsultantSelect = (consultantId, consultantName) => {
    setSelectedConsultant(consultantId);
    setSelectedConsultantName(consultantName);
  };

  const handleBookAppointment = async () => {

    if (!email) {
      alert('Please Login First');
      return;
    }

    setBookingSuccess(false);

    try {

      const response = await axios.post(
        'http://localhost:8001/api/appointments/book',
        {
          mail: email,
          consultantId: selectedConsultant,
          consultantName: selectedConsultantName,
        }
      );

      setBookingSuccess(true);
      console.log(response.data);

      setSelectedConsultant(null);

    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  useEffect(() => {

    const fetchConsultants = async () => {
      try {

        const response = await axios.get(
          'http://localhost:8001/api/counselors'
        );

        const filteredData = response.data.filter(
          (counselor) => counselor.isApproved === true
        );

        setConsultants(filteredData);

      } catch (error) {
        console.error('Error fetching consultants:', error);
      }
    };

    fetchConsultants();

  }, []);

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen">

        {/* Sidebar */}
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-10 py-10">

          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Book a New Appointment
          </h1>

          <img src={divider} alt="divider" className="mb-10" />

          {/* Consultant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {consultants.map((consultant) => (

              <button
                key={consultant._id}
                onClick={() =>
                  handleConsultantSelect(
                    consultant._id,
                    consultant.name
                  )
                }

                className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 text-left
                ${
                  selectedConsultant === consultant._id
                    ? "border-2 border-blue-500"
                    : ""
                }`}
              >

                <ConsultantCard
                  photo={consultant.photo}
                  name={consultant.name}
                  specialty={consultant.speciality}
                  age={consultant.age}
                />

              </button>

            ))}

          </div>

          {/* Selected Consultant */}
          {selectedConsultant && (

            <div className="mt-10 bg-blue-50 border border-blue-200 p-6 rounded-xl">

              <p className="text-lg font-semibold text-gray-700">
                Booking with counselor:
                <span className="text-blue-600 ml-2">
                  {selectedConsultantName}
                </span>
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Booking ID: {selectedConsultant}
              </p>

              <button
                onClick={handleBookAppointment}
                className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
              >
                Confirm Appointment
              </button>

            </div>
          )}

          {/* Success Message */}
          {bookingSuccess && (

            <div className="mt-10 bg-green-100 border border-green-300 text-green-700 p-6 rounded-xl">

              <h2 className="text-xl font-bold">
                Appointment booked successfully ✨
              </h2>

              <p className="mt-3 text-gray-700">
                View your appointment details
                <Link
                  to="/Appointment/past"
                  className="text-blue-500 hover:underline ml-2"
                >
                  here
                </Link>
              </p>

            </div>

          )}

        </div>
      </div>
    </>
  );
}

export default Book;
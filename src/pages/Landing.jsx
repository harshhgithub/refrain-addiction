import React from "react";
import { Link } from "react-router-dom";
import { sbIcon, client1, client2, client3, confi } from "../assets";

function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen">

    {/* NAVBAR */}
<header className="bg-white border-b shadow-sm">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

    {/* Logo + Title */}
    <div className="flex items-center gap-2">
      <img src={sbIcon} className="w-9 h-9" alt="logo" />
      <span className="text-2xl font-semibold text-gray-800 tracking-tight">
        Refrain Addiction
      </span>
    </div>

    {/* Buttons */}
    <div className="flex items-center gap-4">

      <Link to="/loginc">
        <button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-medium">
          Counselor Login
        </button>
      </Link>

      <Link to="/adminlogin">
        <button className="px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-black transition font-medium">
          Admin Login
        </button>
      </Link>

    </div>

  </div>
</header>


      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <div>
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Break Free From
              <span className="text-blue-600"> Addiction</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Speak with professional counselors, attend therapy sessions,
              and take the first step toward rebuilding your life.
            </p>

            <Link to="/login">
              <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition">
                Start a New Life
              </button>
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            className="rounded-xl shadow-lg"
            alt=""
          />

        </div>
      </section>


      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Recovery Support
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <FeatureCard
              title="Medication Assisted Treatment"
              text="Medications combined with therapy help reduce cravings and withdrawal symptoms."
            />

            <FeatureCard
              title="Cognitive Behavioral Therapy"
              text="CBT helps identify negative thoughts and build healthy coping strategies."
            />

            <FeatureCard
              title="Motivational Interviewing"
              text="Helps individuals discover their motivation to change addictive behaviors."
            />

            <FeatureCard
              title="Online Appointments"
              text="Book therapy sessions and consultations directly through the platform."
            />

          </div>

        </div>
      </section>


      {/* BOOK APPOINTMENT */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg">

          <h2 className="text-2xl font-semibold text-center mb-6">
            Book Appointment
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Contact Number"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Preferred Timing"
              className="w-full p-3 border rounded-lg"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Quick Appointment
            </button>

          </form>

        </div>
      </section>


      {/* TRUST */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <img src={confi} className="rounded-xl shadow-md" alt="" />

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Privacy & Confidentiality
            </h2>

            <p className="text-gray-600 mb-6">
              Your conversations and data remain completely confidential.
              You may even remain anonymous when seeking help.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Strict confidentiality policy</li>
              <li>✔ Anonymous support options</li>
              <li>✔ Secure platform</li>
            </ul>

          </div>

        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-20">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Client Reviews
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <ReviewCard
            img={client1}
            name="Thomas Carl"
            text="This platform helped me overcome alcohol addiction."
          />

          <ReviewCard
            img={client2}
            name="Lana Del Ray"
            text="Counselors helped rebuild my confidence."
          />

          <ReviewCard
            img={client3}
            name="Ana De Armas"
            text="Highly recommended for anyone seeking recovery."
          />

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Refrain Addiction. All rights reserved.</p>
      </footer>

    </div>
  );
}


/* FEATURE CARD COMPONENT */
function FeatureCard({ title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}


/* REVIEW CARD COMPONENT */
function ReviewCard({ img, name, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <img src={img} className="mx-auto h-24 mb-4" alt="" />
      <h4 className="font-semibold">{name}</h4>
      <p className="text-gray-600 text-sm mt-2">{text}</p>
    </div>
  );
}

export default Landing;
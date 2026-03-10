import React from 'react'
import { Sidebar } from "../components"
import { CheckCircleIcon, ChartBarIcon, ClockIcon, CalendarIcon } from '@heroicons/react/outline';

const ProgressBar = ({ value, max }) => {
  const progress = (value / max) * 100;

  return (
    <div className="relative h-3 bg-gray-200 rounded-full mt-3">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

function Track() {

  const activeUsers = 250;
  const recoveredUsers = 180;
  const weeklyAssessments = 150;
  const dailyAssessments = 75;
  const monthlyAssessments = 300;

  const totalAssessments = weeklyAssessments + dailyAssessments + monthlyAssessments;

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
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Analytics Dashboard
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* Active Users */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <CheckCircleIcon className="w-8 h-8 text-blue-500 mb-4" />
              <h2 className="text-lg font-semibold text-gray-600">Active Users</h2>
              <p className="text-4xl font-bold text-blue-500 mt-2">{activeUsers}</p>

              <ProgressBar value={recoveredUsers} max={activeUsers} />

              <p className="text-sm text-gray-500 mt-3">
                Recovered: {recoveredUsers}/{activeUsers}
              </p>
            </div>

            {/* Weekly */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <ChartBarIcon className="w-8 h-8 text-green-500 mb-4" />
              <h2 className="text-lg font-semibold text-gray-600">Weekly Assessments</h2>
              <p className="text-4xl font-bold text-green-500 mt-2">{weeklyAssessments}</p>

              <ProgressBar value={weeklyAssessments} max={totalAssessments} />

              <p className="text-sm text-gray-500 mt-3">
                {weeklyAssessments}/{totalAssessments}
              </p>
            </div>

            {/* Daily */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <ClockIcon className="w-8 h-8 text-yellow-500 mb-4" />
              <h2 className="text-lg font-semibold text-gray-600">Daily Assessments</h2>
              <p className="text-4xl font-bold text-yellow-500 mt-2">{dailyAssessments}</p>

              <ProgressBar value={dailyAssessments} max={totalAssessments} />

              <p className="text-sm text-gray-500 mt-3">
                {dailyAssessments}/{totalAssessments}
              </p>
            </div>

            {/* Monthly */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <CalendarIcon className="w-8 h-8 text-purple-500 mb-4" />
              <h2 className="text-lg font-semibold text-gray-600">Monthly Assessments</h2>
              <p className="text-4xl font-bold text-purple-500 mt-2">{monthlyAssessments}</p>

              <ProgressBar value={monthlyAssessments} max={totalAssessments} />

              <p className="text-sm text-gray-500 mt-3">
                {monthlyAssessments}/{totalAssessments}
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Track
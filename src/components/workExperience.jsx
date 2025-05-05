import React from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaUsers, FaTasks, FaChartLine } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-purple-700">PyroSpark Company</h2>
          <h3 className="text-xl text-gray-800">WMSU Clinic Appointment System</h3>
          <p className="text-gray-500">Project Manager</p>
        </div>
        <div className="mt-4 md:mt-0 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
          Healthcare Technology
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          The WMSU-DENTAL CLINIC is a school organization offering free tooth extraction, consultation, and other services.
          To address manual work inefficiencies and enhance the dentist workflow, this system facilitates user appointments, administrative
          management of appointments, access to dentist and assistant information including availability, and tracking of historical records.
        </p>
      </div>

      {/* Technical Highlights */}
      <div className="bg-gray-50 p-5 rounded-lg">
        <h4 className="font-bold text-gray-800 mb-3">Key Responsibilities:</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Create and manage accounts for staff, dentists, and patients</li>
          <li>Provide usage analytics and performance reports</li>
          <li>Coordinated between university IT and medical staff</li>
          <li>Manage daily/weekly appointment schedule</li>
          <li>Maintain and secure the database</li>
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="mt-6">
        <h4 className="font-bold text-gray-800 mb-3">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {['Django', 'Figma',].map((tech) => (
            <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const IdentificationSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="governmentId" className="block text-sm font-medium text-gray-700">
          Government ID Number
        </label>
        <Field
          type="text"
          name="identification.governmentId"
          id="governmentId"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="identification.governmentId" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="previousStudentIds" className="block text-sm font-medium text-gray-700">
          Previous Student IDs
        </label>
        <Field
          type="text"
          name="identification.previousStudentIds"
          id="previousStudentIds"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Comma-separated list of previous student IDs"
        />
        <ErrorMessage name="identification.previousStudentIds" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">
          Passport Number (if applicable)
        </label>
        <Field
          type="text"
          name="identification.passportNumber"
          id="passportNumber"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="identification.passportNumber" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default IdentificationSection;
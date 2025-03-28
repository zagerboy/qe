import React from 'react';
import { Field, ErrorMessage } from 'formik';

const GuardianInfoSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="guardianFullName" className="block text-sm font-medium text-gray-700">
          Guardian's Full Name
        </label>
        <Field
          type="text"
          name="guardianInfo.fullName"
          id="guardianFullName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="guardianInfo.fullName" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="guardianRelationship" className="block text-sm font-medium text-gray-700">
          Relationship to Student
        </label>
        <Field
          type="text"
          name="guardianInfo.relationship"
          id="guardianRelationship"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="guardianInfo.relationship" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="guardianContact" className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <Field
          type="tel"
          name="guardianInfo.contactNumber"
          id="guardianContact"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="guardianInfo.contactNumber" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="guardianEmail" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <Field
          type="email"
          name="guardianInfo.email"
          id="guardianEmail"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="guardianInfo.email" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default GuardianInfoSection;
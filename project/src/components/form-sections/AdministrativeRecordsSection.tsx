import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AdministrativeRecordsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="attendanceHistory" className="block text-sm font-medium text-gray-700">
          Attendance History
        </label>
        <Field
          as="textarea"
          name="administrativeRecords.attendanceHistory"
          id="attendanceHistory"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Summary of attendance record..."
        />
        <ErrorMessage name="administrativeRecords.attendanceHistory" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="behavioralRecords" className="block text-sm font-medium text-gray-700">
          Behavioral Records
        </label>
        <Field
          as="textarea"
          name="administrativeRecords.behavioralRecords"
          id="behavioralRecords"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Summary of behavioral records..."
        />
        <ErrorMessage name="administrativeRecords.behavioralRecords" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="disciplinaryActions" className="block text-sm font-medium text-gray-700">
          Disciplinary Actions
        </label>
        <Field
          as="textarea"
          name="administrativeRecords.disciplinaryActions"
          id="disciplinaryActions"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List any disciplinary actions..."
        />
        <ErrorMessage name="administrativeRecords.disciplinaryActions" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default AdministrativeRecordsSection;
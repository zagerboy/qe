import React from 'react';
import { Field, ErrorMessage } from 'formik';

const MedicalInfoSection: React.FC = () => {
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">
          Blood Type
        </label>
        <Field
          as="select"
          name="medicalInfo.bloodType"
          id="bloodType"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select Blood Type</option>
          {bloodTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </Field>
        <ErrorMessage name="medicalInfo.bloodType" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
          Allergies
        </label>
        <Field
          as="textarea"
          name="medicalInfo.allergies"
          id="allergies"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List any known allergies..."
        />
        <ErrorMessage name="medicalInfo.allergies" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="currentMedications" className="block text-sm font-medium text-gray-700">
          Current Medications
        </label>
        <Field
          as="textarea"
          name="medicalInfo.currentMedications"
          id="currentMedications"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List any current medications..."
        />
        <ErrorMessage name="medicalInfo.currentMedications" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700">
          Medical Conditions
        </label>
        <Field
          as="textarea"
          name="medicalInfo.medicalConditions"
          id="medicalConditions"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List any medical conditions..."
        />
        <ErrorMessage name="medicalInfo.medicalConditions" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="primaryPhysicianContact" className="block text-sm font-medium text-gray-700">
          Primary Physician Contact
        </label>
        <Field
          type="text"
          name="medicalInfo.primaryPhysicianContact"
          id="primaryPhysicianContact"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Doctor's name and contact information"
        />
        <ErrorMessage name="medicalInfo.primaryPhysicianContact" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default MedicalInfoSection;
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const PersonalInfoSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <Field
            type="text"
            name="personalInfo.firstName"
            id="firstName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <ErrorMessage name="personalInfo.firstName" component="div" className="mt-1 text-sm text-red-600" />
        </div>

        <div>
          <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
            Middle Name
          </label>
          <Field
            type="text"
            name="personalInfo.middleName"
            id="middleName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <Field
            type="text"
            name="personalInfo.lastName"
            id="lastName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <ErrorMessage name="personalInfo.lastName" component="div" className="mt-1 text-sm text-red-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <Field name="personalInfo.dateOfBirth">
            {({ field, form }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => form.setFieldValue(field.name, date)}
                dateFormat="yyyy-MM-dd"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            )}
          </Field>
          <ErrorMessage name="personalInfo.dateOfBirth" component="div" className="mt-1 text-sm text-red-600" />
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <Field
            as="select"
            name="personalInfo.gender"
            id="gender"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </Field>
          <ErrorMessage name="personalInfo.gender" component="div" className="mt-1 text-sm text-red-600" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Photo
        </label>
        <div className="mt-1 flex items-center">
          <Field name="personalInfo.photo">
            {({ field, form }) => (
              <input
                type="file"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0];
                  form.setFieldValue(field.name, file);
                }}
                accept="image/jpeg,image/png"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            )}
          </Field>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          JPEG or PNG only. 400x400 pixels recommended. Max 2MB.
        </p>
        <ErrorMessage name="personalInfo.photo" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const ContactInfoSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="primaryPhone" className="block text-sm font-medium text-gray-700">
            Primary Phone Number
          </label>
          <Field
            type="tel"
            name="contactInfo.primaryPhone"
            id="primaryPhone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <ErrorMessage name="contactInfo.primaryPhone" component="div" className="mt-1 text-sm text-red-600" />
        </div>

        <div>
          <label htmlFor="secondaryPhone" className="block text-sm font-medium text-gray-700">
            Secondary Phone Number
          </label>
          <Field
            type="tel"
            name="contactInfo.secondaryPhone"
            id="secondaryPhone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <Field
          type="email"
          name="contactInfo.email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="contactInfo.email" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Current Residential Address
        </label>
        <Field
          as="textarea"
          name="contactInfo.address"
          id="address"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="contactInfo.address" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default ContactInfoSection;
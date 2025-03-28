import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SpecialRequirementsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="learningAccommodations" className="block text-sm font-medium text-gray-700">
          Learning Accommodations
        </label>
        <Field
          as="textarea"
          name="specialRequirements.learningAccommodations"
          id="learningAccommodations"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Describe any learning accommodations needed..."
        />
        <ErrorMessage name="specialRequirements.learningAccommodations" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="physicalAccommodations" className="block text-sm font-medium text-gray-700">
          Physical Accommodations
        </label>
        <Field
          as="textarea"
          name="specialRequirements.physicalAccommodations"
          id="physicalAccommodations"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Describe any physical accommodations needed..."
        />
        <ErrorMessage name="specialRequirements.physicalAccommodations" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700">
          Dietary Restrictions
        </label>
        <Field
          as="textarea"
          name="specialRequirements.dietaryRestrictions"
          id="dietaryRestrictions"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List any dietary restrictions or allergies..."
        />
        <ErrorMessage name="specialRequirements.dietaryRestrictions" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default SpecialRequirementsSection;
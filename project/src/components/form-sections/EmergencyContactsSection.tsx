import React from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
import { Plus, Trash2 } from 'lucide-react';

const EmergencyContactsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <FieldArray name="emergencyContacts">
        {({ push, remove, form }) => (
          <div>
            {form.values.emergencyContacts.map((_, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Emergency Contact #{index + 1}</h3>
                  {index >= 2 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name={`emergencyContacts.${index}.name`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name={`emergencyContacts.${index}.name`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Relationship
                    </label>
                    <Field
                      type="text"
                      name={`emergencyContacts.${index}.relationship`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name={`emergencyContacts.${index}.relationship`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <Field
                      type="tel"
                      name={`emergencyContacts.${index}.contactNumber`}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name={`emergencyContacts.${index}.contactNumber`}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => push({ name: '', relationship: '', contactNumber: '' })}
              className="flex items-center justify-center w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-800"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Another Emergency Contact
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default EmergencyContactsSection;
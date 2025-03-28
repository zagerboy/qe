import React from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
import { Plus, Trash2 } from 'lucide-react';

const DemographicsSection: React.FC = () => {
  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Native'];

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
          Nationality
        </label>
        <Field
          type="text"
          name="demographics.nationality"
          id="nationality"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="demographics.nationality" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="ethnicity" className="block text-sm font-medium text-gray-700">
          Ethnicity
        </label>
        <Field
          type="text"
          name="demographics.ethnicity"
          id="ethnicity"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="demographics.ethnicity" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="primaryLanguage" className="block text-sm font-medium text-gray-700">
          Primary Language
        </label>
        <Field
          type="text"
          name="demographics.primaryLanguage"
          id="primaryLanguage"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <ErrorMessage name="demographics.primaryLanguage" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Additional Languages</h3>
        <FieldArray name="demographics.additionalLanguages">
          {({ push, remove, form }) => (
            <div>
              {form.values.demographics.additionalLanguages.map((_, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-md font-medium">Language #{index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Language
                      </label>
                      <Field
                        type="text"
                        name={`demographics.additionalLanguages.${index}.language`}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name={`demographics.additionalLanguages.${index}.language`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Proficiency Level
                      </label>
                      <Field
                        as="select"
                        name={`demographics.additionalLanguages.${index}.proficiency`}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select Proficiency</option>
                        {proficiencyLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name={`demographics.additionalLanguages.${index}.proficiency`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => push({ language: '', proficiency: '' })}
                className="flex items-center justify-center w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-800"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Language
              </button>
            </div>
          )}
        </FieldArray>
      </div>
    </div>
  );
};

export default DemographicsSection;
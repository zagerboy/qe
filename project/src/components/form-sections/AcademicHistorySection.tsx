import React from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
import { Plus, Trash2 } from 'lucide-react';

const AcademicHistorySection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Previous Schools</h3>
        <FieldArray name="academicHistory.previousSchools">
          {({ push, remove, form }) => (
            <div>
              {form.values.academicHistory.previousSchools.map((_, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-md font-medium">School #{index + 1}</h4>
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
                        School Name
                      </label>
                      <Field
                        type="text"
                        name={`academicHistory.previousSchools.${index}.name`}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name={`academicHistory.previousSchools.${index}.name`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Years Attended
                      </label>
                      <Field
                        type="text"
                        name={`academicHistory.previousSchools.${index}.yearsAttended`}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="e.g., 2018-2022"
                      />
                      <ErrorMessage
                        name={`academicHistory.previousSchools.${index}.yearsAttended`}
                        component="div"
                        className="mt-1 text-sm text-red-600"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => push({ name: '', yearsAttended: '' })}
                className="flex items-center justify-center w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-800"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Previous School
              </button>
            </div>
          )}
        </FieldArray>
      </div>

      <div>
        <label htmlFor="academicPerformance" className="block text-sm font-medium text-gray-700">
          Academic Performance Records
        </label>
        <Field
          as="textarea"
          name="academicHistory.academicPerformance"
          id="academicPerformance"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Summarize academic achievements, GPA, honors, etc."
        />
        <ErrorMessage name="academicHistory.academicPerformance" component="div" className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="standardizedTestScores" className="block text-sm font-medium text-gray-700">
          Standardized Test Scores
        </label>
        <Field
          as="textarea"
          name="academicHistory.standardizedTestScores"
          id="standardizedTestScores"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List standardized test scores (SAT, ACT, etc.)"
        />
        <ErrorMessage name="academicHistory.standardizedTestScores" component="div" className="mt-1 text-sm text-red-600" />
      </div>
    </div>
  );
};

export default AcademicHistorySection;
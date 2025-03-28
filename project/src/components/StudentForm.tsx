import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { QRCodeSVG } from 'qrcode.react';
import { studentFormValidation } from '../validation/studentFormValidation';
import { StudentFormData } from '../types/student';
import PersonalInfoSection from './form-sections/PersonalInfoSection';
import ContactInfoSection from './form-sections/ContactInfoSection';
import GuardianInfoSection from './form-sections/GuardianInfoSection';
import EmergencyContactsSection from './form-sections/EmergencyContactsSection';
import MedicalInfoSection from './form-sections/MedicalInfoSection';
import AcademicHistorySection from './form-sections/AcademicHistorySection';
import IdentificationSection from './form-sections/IdentificationSection';
import DemographicsSection from './form-sections/DemographicsSection';
import SpecialRequirementsSection from './form-sections/SpecialRequirementsSection';
import AdministrativeRecordsSection from './form-sections/AdministrativeRecordsSection';
import { ChevronLeft, ChevronRight, Download, QrCode } from 'lucide-react';

const initialValues: StudentFormData = {
  personalInfo: {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: new Date(),
    gender: '',
    photo: null,
  },
  contactInfo: {
    primaryPhone: '',
    secondaryPhone: '',
    email: '',
    address: '',
  },
  guardianInfo: {
    fullName: '',
    relationship: '',
    contactNumber: '',
    email: '',
  },
  emergencyContacts: [
    {
      name: '',
      relationship: '',
      contactNumber: '',
    },
    {
      name: '',
      relationship: '',
      contactNumber: '',
    },
  ],
  medicalInfo: {
    bloodType: '',
    allergies: '',
    currentMedications: '',
    medicalConditions: '',
    primaryPhysicianContact: '',
  },
  academicHistory: {
    previousSchools: [],
    academicPerformance: '',
    standardizedTestScores: '',
  },
  identification: {
    governmentId: '',
    previousStudentIds: '',
    passportNumber: '',
  },
  demographics: {
    nationality: '',
    ethnicity: '',
    primaryLanguage: '',
    additionalLanguages: [],
  },
  specialRequirements: {
    learningAccommodations: '',
    physicalAccommodations: '',
    dietaryRestrictions: '',
  },
  administrativeRecords: {
    attendanceHistory: '',
    behavioralRecords: '',
    disciplinaryActions: '',
  },
};

const StudentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQRCode, setShowQRCode] = useState(false);
  const [submittedData, setSubmittedData] = useState<StudentFormData | null>(null);

  const formSections = [
    { title: 'Personal Information', component: PersonalInfoSection },
    { title: 'Contact Information', component: ContactInfoSection },
    { title: 'Guardian Information', component: GuardianInfoSection },
    { title: 'Emergency Contacts', component: EmergencyContactsSection },
    { title: 'Medical Information', component: MedicalInfoSection },
    { title: 'Academic History', component: AcademicHistorySection },
    { title: 'Identification', component: IdentificationSection },
    { title: 'Demographics', component: DemographicsSection },
    { title: 'Special Requirements', component: SpecialRequirementsSection },
    { title: 'Administrative Records', component: AdministrativeRecordsSection },
  ];

  const handleSubmit = (values: StudentFormData) => {
    setSubmittedData(values);
    setShowQRCode(true);
  };

  const generateQRCodeData = (data: StudentFormData) => {
    const essentialInfo = {
      name: `${data.personalInfo.firstName} ${data.personalInfo.lastName}`,
      studentId: Math.random().toString(36).substr(2, 9).toUpperCase(),
      dateOfBirth: data.personalInfo.dateOfBirth,
      emergencyContact: data.emergencyContacts[0].contactNumber,
      bloodType: data.medicalInfo.bloodType,
      nationality: data.demographics.nationality,
      primaryLanguage: data.demographics.primaryLanguage,
    };
    return JSON.stringify(essentialInfo);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Student ID Registration
          </h1>
          
          {!showQRCode ? (
            <>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 overflow-x-auto">
                  {formSections.map((section, index) => (
                    <div
                      key={section.title}
                      className={`flex-none px-4 text-center ${
                        index === currentStep
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-500'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                          index === currentStep
                            ? 'bg-blue-600 text-white'
                            : index < currentStep
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-sm whitespace-nowrap">{section.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={studentFormValidation}
                onSubmit={handleSubmit}
              >
                {({ isValid, dirty }) => (
                  <Form>
                    {React.createElement(formSections[currentStep].component)}

                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                          currentStep === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                        disabled={currentStep === 0}
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                      </button>

                      {currentStep === formSections.length - 1 ? (
                        <button
                          type="submit"
                          disabled={!isValid || !dirty}
                          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                        >
                          Generate ID
                          <QrCode className="w-4 h-4 ml-2" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentStep(
                              Math.min(formSections.length - 1, currentStep + 1)
                            )
                          }
                          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                          Next
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Student ID Generated</h2>
              <div className="flex justify-center mb-6">
                <QRCodeSVG
                  value={generateQRCodeData(submittedData!)}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-gray-600 mb-6">
                Scan this QR code to access student information
              </p>
              <button
                onClick={() => setShowQRCode(false)}
                className="flex items-center justify-center mx-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download ID Card
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
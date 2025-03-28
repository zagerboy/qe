import * as Yup from 'yup';

const phoneRegExp = /^(\+?\d{1,4}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const studentFormValidation = Yup.object().shape({
  personalInfo: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    middleName: Yup.string(),
    lastName: Yup.string().required('Last name is required'),
    dateOfBirth: Yup.date()
      .max(new Date(), 'Date of birth cannot be in the future')
      .required('Date of birth is required'),
    gender: Yup.string().required('Gender is required'),
    photo: Yup.mixed()
      .test('fileSize', 'File size is too large', (value) => {
        if (!value) return true;
        return value.size <= 2 * 1024 * 1024; // 2MB
      })
      .test('fileType', 'Unsupported file type', (value) => {
        if (!value) return true;
        return ['image/jpeg', 'image/png'].includes(value.type);
      }),
  }),
  contactInfo: Yup.object().shape({
    primaryPhone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Primary phone is required'),
    secondaryPhone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .nullable(),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    address: Yup.string().required('Address is required'),
  }),
  guardianInfo: Yup.object().shape({
    fullName: Yup.string().required('Guardian name is required'),
    relationship: Yup.string().required('Relationship is required'),
    contactNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Contact number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  }),
  emergencyContacts: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      relationship: Yup.string().required('Relationship is required'),
      contactNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Contact number is required'),
    })
  ),
  medicalInfo: Yup.object().shape({
    bloodType: Yup.string().required('Blood type is required'),
    allergies: Yup.string(),
    currentMedications: Yup.string(),
    medicalConditions: Yup.string(),
    primaryPhysicianContact: Yup.string().required('Physician contact is required'),
  }),
  academicHistory: Yup.object().shape({
    previousSchools: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('School name is required'),
        yearsAttended: Yup.string().required('Years attended is required'),
      })
    ),
    academicPerformance: Yup.string(),
    standardizedTestScores: Yup.string(),
  }),
  identification: Yup.object().shape({
    governmentId: Yup.string(),
    previousStudentIds: Yup.string(),
    passportNumber: Yup.string(),
  }),
  demographics: Yup.object().shape({
    nationality: Yup.string().required('Nationality is required'),
    ethnicity: Yup.string(),
    primaryLanguage: Yup.string().required('Primary language is required'),
    additionalLanguages: Yup.array().of(
      Yup.object().shape({
        language: Yup.string().required('Language name is required'),
        proficiency: Yup.string().required('Proficiency level is required'),
      })
    ),
  }),
  specialRequirements: Yup.object().shape({
    learningAccommodations: Yup.string(),
    physicalAccommodations: Yup.string(),
    dietaryRestrictions: Yup.string(),
  }),
  administrativeRecords: Yup.object().shape({
    attendanceHistory: Yup.string(),
    behavioralRecords: Yup.string(),
    disciplinaryActions: Yup.string(),
  }),
});
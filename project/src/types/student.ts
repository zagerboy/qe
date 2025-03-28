export interface StudentFormData {
  personalInfo: {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    photo: File | null;
  };
  contactInfo: {
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    address: string;
  };
  guardianInfo: {
    fullName: string;
    relationship: string;
    contactNumber: string;
    email: string;
  };
  emergencyContacts: Array<{
    name: string;
    relationship: string;
    contactNumber: string;
  }>;
  medicalInfo: {
    bloodType: string;
    allergies: string;
    currentMedications: string;
    medicalConditions: string;
    primaryPhysicianContact: string;
  };
  academicHistory: {
    previousSchools: Array<{
      name: string;
      yearsAttended: string;
    }>;
    academicPerformance: string;
    standardizedTestScores: string;
  };
  identification: {
    governmentId: string;
    previousStudentIds: string;
    passportNumber: string;
  };
  demographics: {
    nationality: string;
    ethnicity: string;
    primaryLanguage: string;
    additionalLanguages: Array<{
      language: string;
      proficiency: string;
    }>;
  };
  specialRequirements: {
    learningAccommodations: string;
    physicalAccommodations: string;
    dietaryRestrictions: string;
  };
  administrativeRecords: {
    attendanceHistory: string;
    behavioralRecords: string;
    disciplinaryActions: string;
  };
}
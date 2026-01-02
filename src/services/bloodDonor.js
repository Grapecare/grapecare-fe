import api from './api';

// Get all blood types
export const getBloodTypes = async () => {
  const { data } = await api.get('/blood-types');
  return data;
};

// Register as a blood donor
export const registerBloodDonor = async (formData) => {
  // formData should be FormData object with:
  // - blood_type_id (integer)
  // - has_donated_before (boolean)
  // - last_donation_date (string, date format)
  // - weight (string/decimal)
  // - medical_conditions (list)
  // - major_surgery_last_6_months (boolean)
  // - pregnancy_delivery_last_6_months (boolean)
  // - consumed_alcohol_last_24_hours (boolean)
  // - smoked_last_12_hours (boolean)
  // - preferred_donation_type (string: 'plasma', 'platelets', 'any')
  // - available_days (string)
  // - id_proof_document (file)
  // - consent_given (boolean)
  
  const { data } = await api.post('/blood-donor/register/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

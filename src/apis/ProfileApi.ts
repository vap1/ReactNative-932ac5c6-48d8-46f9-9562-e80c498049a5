
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    // Log: Sending GET request to retrieve user profile
    console.log('Sending GET request to retrieve user profile');

    // Make API call to retrieve user profile
    const response = await fetch('/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${request.token}`,
      },
    });

    // Log: Received response for GET request to retrieve user profile
    console.log('Received response for GET request to retrieve user profile');

    // Parse response
    const data = await response.json();

    // Log: Parsed response for GET request to retrieve user profile
    console.log('Parsed response for GET request to retrieve user profile');

    // Return response data
    return data;
  } catch (error) {
    // Log: Error occurred while retrieving user profile
    console.error('Error occurred while retrieving user profile:', error);

    // Throw error
    throw error;
  }
};

export const updateUserProfile = async (request: UserProfileUpdateRequest): Promise<UserProfileUpdateResponse> => {
  try {
    // Log: Sending PUT request to update user profile
    console.log('Sending PUT request to update user profile');

    // Make API call to update user profile
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${request.token}`,
      },
      body: JSON.stringify(request),
    });

    // Log: Received response for PUT request to update user profile
    console.log('Received response for PUT request to update user profile');

    // Parse response
    const data = await response.json();

    // Log: Parsed response for PUT request to update user profile
    console.log('Parsed response for PUT request to update user profile');

    // Return response data
    return data;
  } catch (error) {
    // Log: Error occurred while updating user profile
    console.error('Error occurred while updating user profile:', error);

    // Throw error
    throw error;
  }
};
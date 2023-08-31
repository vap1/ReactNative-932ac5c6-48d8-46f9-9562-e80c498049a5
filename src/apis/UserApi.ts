
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    console.log('Making API call: User Registration');
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    const data = await response.json();
    console.log('User Registration API response:', data);
    return data;
  } catch (error) {
    console.error('Error in User Registration API:', error);
    throw error;
  }
};
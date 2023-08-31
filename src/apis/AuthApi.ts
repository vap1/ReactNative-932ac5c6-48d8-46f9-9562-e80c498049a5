
import { UserLoginRequest, UserLoginResponse } from '../types/Types';

export const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    // Log the request
    console.log('Login API Request:', request);

    // Make the API call to the login endpoint
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    // Log the response
    console.log('Login API Response:', response);

    // Parse the response JSON
    const data = await response.json();

    // Log the parsed response data
    console.log('Login API Response Data:', data);

    // Return the response data
    return data;
  } catch (error) {
    // Log any errors
    console.error('Login API Error:', error);

    // Throw the error
    throw error;
  }
};
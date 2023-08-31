
import { AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';

export const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    const response = await fetch('/api/admin/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${request.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get admin user details');
    }

    const data = await response.json();
    console.log('Admin user details:', data);

    return data;
  } catch (error) {
    console.error('Error getting admin user details:', error);
    throw error;
  }
};
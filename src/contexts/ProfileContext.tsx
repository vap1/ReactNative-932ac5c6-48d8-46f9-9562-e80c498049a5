
import React, { createContext, useState, useEffect } from 'react';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { getProfile, updateProfile } from '../apis/ProfileApi';

interface ProfileContextProps {
  userProfile: UserProfileResponse | null;
  loading: boolean;
  error: string | null;
  getUserProfile: (request: UserProfileRequest) => void;
  updateUserProfile: (request: UserProfileUpdateRequest) => void;
}

export const ProfileContext = createContext<ProfileContextProps>({
  userProfile: null,
  loading: false,
  error: null,
  getUserProfile: () => {},
  updateUserProfile: () => {},
});

export const ProfileProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfileResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUserProfile = async (request: UserProfileRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getProfile(request);
      setUserProfile(response);
    } catch (error) {
      setError('Failed to fetch user profile');
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (request: UserProfileUpdateRequest) => {
    try {
      setLoading(true);
      setError(null);
      const response = await updateProfile(request);
      setUserProfile(response);
    } catch (error) {
      setError('Failed to update user profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial user profile
    const request: UserProfileRequest = {
      token: 'YOUR_JWT_TOKEN',
    };
    getUserProfile(request);
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        userProfile,
        loading,
        error,
        getUserProfile,
        updateUserProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
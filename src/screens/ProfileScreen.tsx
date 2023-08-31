
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { UserProfileResponse } from '../types/Types';

const ProfileScreen: React.FC = () => {
  const { userProfile, getUserProfile } = useContext(ProfileContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        await getUserProfile();
        setLoading(false);
      } catch (error) {
        console.log('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text style={styles.heading}>Profile</Text>
          <Text>Name: {userProfile.name}</Text>
          <Text>Email: {userProfile.email}</Text>
          <Text>Contact Info: {userProfile.contactInfo}</Text>
          <Text>Address: {userProfile.address}</Text>
          <Text>Profile Picture: {userProfile.profilePicture}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProfileScreen;
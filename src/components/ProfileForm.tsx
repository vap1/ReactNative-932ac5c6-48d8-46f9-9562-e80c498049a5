
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { updateProfile } from '../apis/ProfileApi';
import { UserProfileUpdateRequest } from '../types/Types';

const ProfileForm: React.FC = () => {
  const { userProfile, setUserProfile } = useContext(ProfileContext);
  const [name, setName] = useState(userProfile.name);
  const [contactInfo, setContactInfo] = useState(userProfile.contactInfo);
  const [address, setAddress] = useState(userProfile.address);
  const [profilePicture, setProfilePicture] = useState(userProfile.profilePicture);

  const handleSaveChanges = async () => {
    try {
      const request: UserProfileUpdateRequest = {
        token: 'YOUR_JWT_TOKEN',
        name,
        contactInfo,
        address,
        profilePicture,
      };

      const response = await updateProfile(request);
      console.log('Profile update response:', response);

      // Update the user profile in the context
      setUserProfile({
        ...userProfile,
        name,
        contactInfo,
        address,
        profilePicture,
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={contactInfo}
        onChangeText={setContactInfo}
        placeholder="Contact Info"
      />
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />
      <Image
        style={styles.profilePicture}
        source={{ uri: profilePicture }}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 4,
  },
  profilePicture: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

export default ProfileForm;

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserRegistrationRequest } from '../types/Types';
import { registerUser } from '../apis/UserApi';

const RegistrationScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const request: UserRegistrationRequest = {
        name,
        email,
        password,
      };

      // Make API call to register user
      const response = await registerUser(request);

      // Log the response
      console.log(response);

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      // Log any errors
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default RegistrationScreen;
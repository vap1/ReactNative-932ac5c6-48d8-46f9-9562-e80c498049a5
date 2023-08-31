
import React, { useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AdminUserDetailsResponse, User } from '../types/Types';
import { getAdminUserDetails } from '../apis/AdminApi';
import { AuthContext } from '../contexts/AuthContext';

const AdminUserDetailsScreen: React.FC = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = React.useState<User[]>([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response: AdminUserDetailsResponse = await getAdminUserDetails(token);
        setUsers(response.users);
      } catch (error) {
        console.log('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [token]);

  return (
    <View>
      <Text>Admin User Details</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Contact Info: {item.contactInfo}</Text>
            <Text>Address: {item.address}</Text>
            <Text>Profile Picture: {item.profilePicture}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AdminUserDetailsScreen;
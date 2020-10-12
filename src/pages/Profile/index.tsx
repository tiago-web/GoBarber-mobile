import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(async () => {
    await signOut();
  }, [signOut]);

  return (
    <View>
      <RectButton onPress={handleSignOut}>
        <Text style={{ color: '#fff' }}>Sign out</Text>
      </RectButton>
    </View>
  );
};

export default Profile;

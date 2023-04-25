import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';

  const ProfileScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
            <Button 
                title="Go Back"
                onPress={() => {navigation.pop();}}
            />
        </View>
    );
};
export default ProfileScreen;
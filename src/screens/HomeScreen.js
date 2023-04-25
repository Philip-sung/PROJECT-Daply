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


const HomeScreen = ({navigation}) => {
    return (
        <View>
        <Text>Date Map</Text>
        <Text>My Title</Text>
        <Text>My Group</Text>
        <Text>Group Posts</Text>
        <Button
        title="Go to Jane's profile"
        onPress={() =>
            navigation.push('Profile', {name: 'Jane'})
        }
        />
        </View>
    );
};

export default HomeScreen;
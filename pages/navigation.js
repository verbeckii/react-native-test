import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PostsScreen from './postsScreen';
import PostDetailsScreen from './postDetailsScreen';

const Stack = createNativeStackNavigator();


export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={PostsScreen} options={{ title: 'Posts' }} />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} options={{ title: 'Post Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
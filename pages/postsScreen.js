import {
  Text,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  TouchableHighlight, 
  Alert
} from 'react-native';
import Post from '../components/post/post';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LeftAction from '../components/left-action/left-action';
import RightAction from '../components/right-action/right-action';
import { fetchUsers, selectAllPosts } from '../services/postsSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function PostsScreen({navigation}) {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.posts)
    const posts = useSelector(selectAllPosts);

    
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    
    if (loading) return <ActivityIndicator/>

    return (
        
        <View>
            <FlatList
                data={posts}
                extraData={posts}
                renderItem={({item}) => (
                    <GestureHandlerRootView>
                        <Swipeable 
                            renderLeftActions={LeftAction}
                            renderRightActions={() => <RightAction id={item.id}/>}
                        >
                                <TouchableHighlight onPress={() => navigation.navigate('PostDetails', {id: item.id, title: item.title, body: item.body})}>
                                    <Post title={item.title} body={item.body} />
                                </TouchableHighlight>

                        </Swipeable>
                    </GestureHandlerRootView>
                )}
            />
        </View>
    );
};
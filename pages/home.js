import {
  Text,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Button
} from 'react-native';
import Post from '../components/posts/posts';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LeftAction from '../components/left-action/left-action';
import RightAction from '../components/right-action/right-action';
import { fetchUsers, selectAllPosts } from '../services/postsSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function Posts() {
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
                    <Swipeable 
                        renderLeftActions={LeftAction}
                        renderRightActions={() => <RightAction id={item.id}/>}
                    >
                        <Post title={item.title} body={item.body} />
                    </Swipeable>
                )}
            />
        </View>

    );
};
import {
  Text,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import Post from '../components/posts/posts';
import { useGetPostsQuery } from "../services/postsApi";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LeftAction from '../components/left-action/left-action';
import RightAction from '../components/right-action/right-action';

export default function Posts() {
    const { data, error, isLoading } = useGetPostsQuery()



    if (isLoading) return <ActivityIndicator/>

    return (


        <View>
            <FlatList
                data={data}
                extraData={data}
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
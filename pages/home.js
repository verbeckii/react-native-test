import {
  Text,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import Post from '../components/posts/posts';
import { useGetPostsQuery } from "../services/postsApi";

export default function Posts() {
    const { data, error, isLoading } = useGetPostsQuery()




    if (isLoading) return <ActivityIndicator/>

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <Post title={item.title} body={item.body} />
                )}
            />
        </View>
    );
};
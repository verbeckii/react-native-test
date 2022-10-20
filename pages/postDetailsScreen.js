import {
    Text,
    View,
  } from 'react-native';
  import { fetchUsers, selectPostById } from '../services/postsSlicer';
  import { useDispatch, useSelector } from 'react-redux';
  import { useEffect } from 'react';
  
  
  export default function PostsScreen({route}) {
      const dispatch = useDispatch();
      //const { loading } = useSelector((state) => state.posts)
      //const post = useSelector(selectPostById(id));
      //console.log('post: ', post);
      const { id, title, body } = route.params;
  
      
    //   useEffect(() => {
    //       dispatch(fetchUsers());
    //   }, []);
  
  
      //if (loading) return <ActivityIndicator/>
  
      return (
          
          <View>
             <Text>
                Title: {title}
             </Text>
             <Text>
                Body: {body}
             </Text>
          </View>
      );
  };
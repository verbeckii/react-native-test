import { ActivityIndicator, FlatList, Text, View } from "react-native";
import {
  fetchCommentsByPostId,
  selectAllComments,
} from "../services/commentsSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Comment from "../components/comment/comment";
import NewComment from "../components/new-comment/new-comment";

export default function PostsScreen({ route }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.comments);
  const comments = useSelector(selectAllComments);
  comments.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
  const { id, title, body } = route.params;

  useEffect(() => {
    dispatch(fetchCommentsByPostId(id));
  }, []);

  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Body: {body}</Text>
      <NewComment postId={id}/>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={comments}
          extraData={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Comment name={item.name} body={item.body}/>
          )}
        />
      )}
    </View>
  );
}

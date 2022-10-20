import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import {
  fetchCommentsByPostId,
  selectAllComments,
} from "../services/commentsSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Comment from "../components/comment/comment";
import NewComment from "../components/new-comment/new-comment";
import PostDetails from "../components/post-details/post-details";

export default function PostsScreen({ route }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.comments);
  const comments = useSelector(selectAllComments);
  comments.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
  const { postId, title, body } = route.params;

  useEffect(() => {
    dispatch(fetchCommentsByPostId(postId));
  }, []);

  return (
    <View>
      <PostDetails title={title} body={body}/>
      <NewComment postId={postId}/>
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

const styles = StyleSheet.create({
  postDetailsInfo: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomStyle: 'solid',
  },
});
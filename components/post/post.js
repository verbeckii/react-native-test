import styled from "styled-components/native";
import { Text } from "react-native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

export default function Post({ title, body }) {
  return (
    <PostView>
      <PostDetails>
        <Text>Title: {title}</Text>
        <Text numberOfLines={2}>Body: {body}</Text>
      </PostDetails>
    </PostView>
  );
}

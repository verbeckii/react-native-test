import styled from "styled-components/native";
import { Text, View } from 'react-native';

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

export default function Comment({ name, body }) {
  return (
    <PostView>
        <PostDetails>
          <Text>User Name: {name}</Text>
          <Text>Body: {body}</Text>
        </PostDetails>
    </PostView>
  );
}

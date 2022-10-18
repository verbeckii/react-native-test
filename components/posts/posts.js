import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const PostBody = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

export default function Posts({ title, body }) {
  return (
    <PostView>
      <PostDetails>
        <PostTitle>Title: {title}</PostTitle>
        <PostBody numberOfLines={2}>Body: {body}</PostBody>
      </PostDetails>
    </PostView>
  );
}

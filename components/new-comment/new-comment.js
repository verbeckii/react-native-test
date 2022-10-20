import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, selectAllComments } from "../../services/commentsSlicer";

export default function NewComment({ postId }) {
  const dispatch = useDispatch();
  const [name, onChangeName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [body, onChangeBody] = useState(null);
  let id = 1000;

  return (
    <View style={styles.container}>
      <Text>Add your comment:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Type your name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Type your email address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeBody}
        value={body}
        placeholder="Type your comment"
      />
      <View style={styles.button}>
        <Button
          disabled={!name || !email || !body}
          title="Post comment"
          onPress={() => dispatch(addComment({ postId, id: id++, name, email, body }))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomStyle: 'solid',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    flexDirection: "row-reverse",
    marginRight: 5,
  },
});

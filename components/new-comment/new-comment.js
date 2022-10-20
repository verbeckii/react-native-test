import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../services/commentsSlicer";

export default function NewComment({ postId }) {
  const dispatch = useDispatch();
  const [name, onChangeName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [body, onChangeBody] = useState(null);

  return (
    <View>
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
          title="Post comment"
          onPress={() => dispatch(addComment({ postId, id: 22, name, email, body }))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

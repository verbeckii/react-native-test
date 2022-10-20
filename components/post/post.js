import { StyleSheet, Text, View } from "react-native";

export default function Post({ title, body }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Title: {title}</Text>
        <Text numberOfLines={2}>Body: {body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomStyle: 'solid',
  },
});

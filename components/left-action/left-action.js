import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    leftAction: {
      backgroundColor: '#388e3c',
      justifyContent: 'center',
    },
});

export default LeftAction = () => {
    return (
        <View style={styles.leftAction}>
            <Text>Edit</Text>
        </View>
    )
}
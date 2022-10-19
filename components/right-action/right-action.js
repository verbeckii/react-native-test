import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

const styles = StyleSheet.create({
    rightAction: {
      backgroundColor: '#FF0000',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
});


export default RightAction = ({id}) => {

    const onPressDelete = () =>
        Alert.alert(
            "Delete Post",
            "Are you sure want to delete this post?",
        [
            {
                text: "Cancel",
                onPress: () => console.log(`Cancel Pressed: ${id}`) ,
                style: "cancel"
            },
            { 
                text: "Delete", 
                onPress: () => deletePost({id})
            }
        ]
    );

    return (
        <TouchableOpacity onPress={onPressDelete}>
            <View style={styles.rightAction}>
                <Text>Delete</Text>
            </View>
        </TouchableOpacity>
    )
}
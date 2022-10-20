import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { deletePost } from '../../services/postsSlicer';

const styles = StyleSheet.create({
    rightAction: {
    flex: 1,
      backgroundColor: '#FF0000',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
});


export default RightAction = ({id}) => {
    const dispatch = useDispatch();

    const onPressDelete = () =>
        Alert.alert(
            "Delete Post",
            `Are you sure want to delete post: ${id}`,
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            { 
                text: "Delete", 
                onPress: () => dispatch(deletePost(id))
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
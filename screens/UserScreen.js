import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const UserScreen = () => {
	return (
		<View style={styles.rootContainer}>
			<Text>
				This is the <Text style={styles.highlight}>User</Text> Screen!
			</Text>
		</View>
	);
};

export default UserScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	highlight: {
		color: Colors.red,
	},
});

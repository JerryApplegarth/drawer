import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const WelcomeScreen = ({ navigation }) => {
	function openDrawerHandler() {
		// Open the drawer
		navigation.toggleDrawer();
	}
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.text}>
				This is the <Text style={styles.highlight}>Welcome</Text>{" "}
				Screen!
			</Text>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
	},
	highlight: {
		color: Colors.primary,
	},
});

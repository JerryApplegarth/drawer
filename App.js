import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						drawerLabel: "Welcome",
						drawerActiveTintColor: Colors.blue,
						drawerIcon: () => (
							<Ionicons
								name="home"
								size={24}
								color={Colors.green}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="User"
					component={UserScreen}
					options={{
						drawerLabel: "User",
						drawerActiveTintColor: Colors.primary,
						drawerIcon: () => (
							<Ionicons
								name="person"
								size={24}
								color={Colors.red}
							/>
						),
					}}
				/>
			</Drawer.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						tabBarIcon: (tabInfo) => {
							return (
								<Ionicons
									name="home"
									size={25}
									color={tabInfo.color}
								/>
							);
						},
						tabBarActiveTintColor: Colors.purple,
						tabBarInactiveTintColor: Colors.gray,
					}}
				/>
				<Tab.Screen
					name="User"
					component={UserScreen}
					options={{
						tabBarIcon: (tabInfo) => {
							return (
								<Ionicons
									name="person"
									size={25}
									color={tabInfo.color}
								/>
							);
						},
						tabBarActiveTintColor: Colors.purple,
						tabBarInactiveTintColor: Colors.gray,
					}}
				/>
			</Tab.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});

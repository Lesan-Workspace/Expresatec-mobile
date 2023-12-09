import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigation() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigation;

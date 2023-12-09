import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

// Contexts
import AuthProvider, { useAuth } from "./src/app/contexts/AuthContext";
// Screens
import AuthStackNavigation from "./src/app/navigation/AuthStackNavigation";
import MainStackNavigation from "./src/app/navigation/MainStackNavigation";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [user] = useAuth();

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AuthStack"
          component={AuthStackNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainStack"
        component={MainStackNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar style="auto" />
          <Navigator />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/AuthContext";
import COLORS from "../../../constants/Colors";
import TextInputComponent from "../../components/TextInputComponent";
import AuthService from "../../services/auth";

const LoginScreen = () => {
  const [username, setUsername] = useState("aguzman"); // Setear a ""
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const [_, setUser] = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = {
        username,
        password,
      }
      const response = await AuthService.login(user)

      const token = await response.token;
      await AuthService.saveToken(token);

      await setUser("hola");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1">
      <SafeAreaView className="flex">
        <View className="flex justify-center px-3 md:px-6 space-y-3 mt-4">
          <TextInputComponent
            label={"Usuario"}
            value={username}
            onChangeTextFunction={setUsername}
          />
          <TextInputComponent
            label={"Contraseña"}
            value={password}
            onChangeTextFunction={setPassword}
            isSecure
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700 text-xs md:text-base">
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogin}
            className="w-full p-4 rounded-lg items-center bg-red-expresatec"
          >
            <Text className="font-bold text-base md:text-xl text-white">
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading && (
        <View className="absolute justify-center items-center bg-black opacity-50 inset-0 left-0 top-0 bottom-0 right-0">
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
    </View>
  )
}

export default LoginScreen
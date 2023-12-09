import { Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComponent from '../../components/ButtonComponent'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 p-2 justify-around">
        <View>
          <Text className="text-center text-3xl font-bold">
            ¡Bienvenido a ExpresaTec!
          </Text>
          <Text className="text-center text-base mt-4">
            Aquí encontrarás diversos juegos con pictogramas dedicados a niños con autismo.
          </Text>
        </View>
        <View className="aspect-square p-4">
          <Image source={require('../../../../assets/images/welcome.png')} className="w-full h-full rounded-xl" />
        </View>
        <View>
          <ButtonComponent text="INICIAR SESION" color="#0097F4" onPress={() => navigation.navigate("LoginScreen")}/>
          <ButtonComponent text="REGISTRARSE" color="#E8060E" onPress={() => navigation.navigate("RegisterScreen")}/>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default WelcomeScreen
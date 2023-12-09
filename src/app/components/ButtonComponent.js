import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity className="mt-4 p-2 rounded-xl" style={{ backgroundColor: color }} onPress={onPress}>
      <Text className="text-white font-bold text-center text-xl">{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent
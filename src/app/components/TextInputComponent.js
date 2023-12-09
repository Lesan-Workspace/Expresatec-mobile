import React from "react";
import { TextInput } from "react-native-paper";
import COLORS from "../../constants/Colors";


const TextInputComponent = ({
   label,
   value,
   onChangeTextFunction,
   isSecure,
}) => {
   return (
      <TextInput
         label={label}
         value={value}
         mode="outlined"
         activeOutlineColor={COLORS.primary}
         onChangeText={(text) => onChangeTextFunction(text)}
         secureTextEntry={isSecure}
         className="mt-3 py-3"
      />
   );
};

export default TextInputComponent;
import { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      {...rest}
      style={styles.container}
      keyboardType="numeric"
    ></TextInput>
  );
}

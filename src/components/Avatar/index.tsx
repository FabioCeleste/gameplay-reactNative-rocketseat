import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type AvatarProps = {
  urlImage: string;
};

export function Avatar({ urlImage }: AvatarProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary50, theme.colors.secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}

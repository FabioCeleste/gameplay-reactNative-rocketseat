import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary50, theme.colors.secondary80]}
    >
      {children}
    </LinearGradient>
  );
}

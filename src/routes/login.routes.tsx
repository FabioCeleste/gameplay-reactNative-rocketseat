import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";

import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function LoginRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerMode: "none",
        cardStyle: {
          backgroundColor: theme.colors.secondary90,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}

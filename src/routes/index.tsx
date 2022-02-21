import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";

import { AuthRoutes } from "./auth.routes";
import { LoginRoutes } from "./login.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
}

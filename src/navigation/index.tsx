import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { SCREENS } from "@shared-constants";
import { LoginScreen } from "@screens/login/LoginScreen";
import { useUser } from "api/useUser";
import { DashboardScreen } from "@screens/dashboard/DashboardScreen";
import { DetailsScreen } from "@screens/details/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useRefresh } from "hooks/use-refresh";
import { OverviewScreen } from "@screens/overview/OverviewScreen";

// ? If you want to use stack or tab or both
const Stack = createStackNavigator();

const Navigation = () => {
  const { user } = useUser();

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureResponseDistance: 200,
        }}
      >
        {!user && <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />}
        {user && (
          <>
            <Stack.Screen
              name={SCREENS.DASHBOARD}
              component={DashboardScreen}
              options={{ gestureEnabled: true }}
            />
            <Stack.Screen
              name={SCREENS.DETAILS}
              component={DetailsScreen}
              options={{ gestureEnabled: true }}
            />
            <Stack.Screen
              name={SCREENS.OVERVIEW}
              component={OverviewScreen}
              options={{ gestureEnabled: true }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

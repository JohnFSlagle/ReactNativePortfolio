import { Platform, View } from "react-native";
import Constants from "expo-constants";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import DirectoryScreen from "./DirectoryScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
<<<<<<< HEAD

=======
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#5637DD" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AboutNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

const ContactNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
};

<<<<<<< HEAD
const AboutNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About" }}
      />
    </Stack.Navigator>
  );
};

const ContactNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
};

=======
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
const DirectoryNavigator = () => {
  const Stack = createStackNavigator();

  return (
<<<<<<< HEAD
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={{ title: "Campsite Directory" }}
      />
=======
    <Stack.Navigator initialRouteName="Directory" screenOptions={screenOptions}>
      <Stack.Screen name="Directory" component={DirectoryScreen} />
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
      <Stack.Screen
        name="CampsiteInfo"
        component={CampsiteInfoScreen}
        options={({ route }) => ({
          title: route.params.campsite.name,
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#CEC8FF",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Directory"
          component={DirectoryNavigator}
          options={{ title: "Directory" }}
        />
<<<<<<< HEAD
        <Drawer.Screen
          name="About"
          component={AboutNavigator}
        />
=======

        <Drawer.Screen name="About" component={AboutNavigator} />

>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{ title: "Contact Us" }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;

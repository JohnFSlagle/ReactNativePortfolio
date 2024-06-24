import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import {
  Text,
  View,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PhoneNumberComponent = () => {
  const phoneNumber = "972-835-9634";
  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePhonePress}>
        <Text style={styles.phoneText}>{phoneNumber}</Text>
      </TouchableOpacity>
    </View>
  );
};

const EmailLink = () => {
  const handleEmailPress = () => {
    Linking.openURL("mailto:johnfslagle@gmail.com");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.emailText}>JohnFSlagle@gmail.com</Text>
      </TouchableOpacity>
    </View>
  );
};

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <PhoneNumberComponent />
        <EmailLink />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emailText: {
    fontSize: 16,
    color: "blue", // or any other color you prefer for email links
    textDecorationLine: "underline",
    marginTop: 10,
  },
  phoneText: {
    fontSize: 16,
    color: "blue", // or any other color you prefer for email links
    textDecorationLine: "underline",
  },
});

export default ContactScreen;

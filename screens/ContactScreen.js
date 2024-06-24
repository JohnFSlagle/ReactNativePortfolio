<<<<<<< HEAD
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
=======
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
<<<<<<< HEAD
        <PhoneNumberComponent />
        <EmailLink />
=======
        <Text>1 Nucamp Way</Text>
        <Text>Seattle, WA 98001</Text>
        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
        <Text>Phone: 1-206-555-1234</Text>
        <Text>Email: campsites@nucamp.co</Text>
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
      </Card>
    </ScrollView>
  );
};

<<<<<<< HEAD
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

=======
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
export default ContactScreen;

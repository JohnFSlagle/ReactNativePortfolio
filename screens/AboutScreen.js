<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { ScrollView, Text, Linking, View, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { PROJECTS } from "../shared/projects";

const AboutScreen = () => {
  const [projects, setProjects] = useState(PROJECTS);

  useEffect(() => {
    setProjects(PROJECTS);
  }, []);

  const handleGitHubLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };
=======
import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { PARTNERS } from "../shared/partners";

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867

  return (
    <ScrollView>
      <Mission />
<<<<<<< HEAD
      {projects.map((project) => (
        <Card key={project.id} containerStyle={styles.cardContainer}>
          <Card.Image source={project.image} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.projectTitle}>{project.name}</Text>
            <Text style={styles.description}>{project.description}</Text>
            <Text style={styles.technologies}>{project.technologies}</Text>
            <Text
              style={[styles.githubLink, { color: "blue" }]}
              onPress={() => handleGitHubLink(project.githubLink)}
            >
              {project.githubLink}
            </Text>
          </View>
        </Card>
      ))}
=======
      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />
        {partners.map((partner) => (
          <ListItem key={partner.id} bottomDivider>
            <Avatar rounded source={partner.image} />
            <ListItem.Content>
              <ListItem.Title>{partner.name}</ListItem.Title>
              <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
    </ScrollView>
  );
};

const Mission = () => {
  return (
<<<<<<< HEAD
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.missionTitle}>My Mission</Card.Title>
      <Card.Divider />
      <Text style={styles.missionText}>
        Hiring me as a web developer offers a wealth of benefits rooted in my
        proven expertise and dedication. With a robust background in front-end
        and back-end technologies, I bring a versatile skill set crucial for
        crafting responsive and scalable web solutions. My proficiency spans
        HTML, CSS, JavaScript, frameworks like React, and server-side languages
        such as Node.js. I excel in optimizing UX/UI designs for enhanced user
        engagement and possess a keen eye for detail in debugging and
        troubleshooting. Moreover, my collaborative nature ensures seamless
        teamwork and effective project management, making me an invaluable asset
        poised to drive innovation and deliver impactful results.
=======
    <Card>
      <Card.Title>Our Mission</Card.Title>
      <Card.Divider />
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
      </Text>
    </Card>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    borderWidth: 0, // Remove border if not needed
  },
  image: {
    height: 150, // Adjust image height as needed
  },
  cardContent: {
    padding: 20,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  technologies: {
    fontSize: 16,
    marginBottom: 10,
    color: "gray",
  },
  githubLink: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  missionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  missionText: {
    fontSize: 16,
    margin: 10,
  },
});

=======
>>>>>>> b17f6305a921880a8afd7710bf7469a5a5340867
export default AboutScreen;

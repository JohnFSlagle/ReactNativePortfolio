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

  return (
    <ScrollView>
      <Mission />
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
    </ScrollView>
  );
};

const Mission = () => {
  return (
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
      </Text>
    </Card>
  );
};

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

export default AboutScreen;

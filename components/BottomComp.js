import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const data = [
  { id: "1", title: "Free delivery", subtitle: "From 75€ of purchase", icon: "truck" },
  { id: "2", title: "Free returns", subtitle: "For 30 days", icon: "undo" },
  { id: "3", title: "Click & collect", subtitle: "Buy online, get it delivered to the store", icon: "shopping-bag" },
  { id: "4", title: "Payments", subtitle: "Pay as you wish", icon: "credit-card" },
];

const services = [
  "Our services",
  "Loyalty program",
  "Gift card",
  "App mobile",
];

const contact = [
  "Our stores",
  "Need help?",
  "Order tracking",
  "Frequently Asked Questions",
  "Contact form",
  "Recruitment",
];

const universe = [
  "Nos engagements",
  "Paris Haussmann News",
  "La Wellness Gallery",
  "The Gourmet",
  "A thousand and one lists",
  "The Galeries Lafayette kitty",
];

const group = [
  "Galeries Lafayette Group",
  "Louis Pion",
  "Mauboussin",
  "The Redoubt",
  "BazarChic",
];

const socialIcons = ["facebook", "instagram", "pinterest", "tiktok"];

export default function BottomComp() {
  return (
    <View style={styles.container}>
      {/* TOP MENU */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <FontAwesome name={item.icon} size={20} color="#fff" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.discover}>Discover</Text>
          </TouchableOpacity>
        )}
      />

      {/* SECTIONS */}
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          {services.map((item, index) => (
            <Text key={index} style={styles.sectionText}>
              {item}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          {contact.map((item, index) => (
            <Text key={index} style={styles.sectionText}>
              {item}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Universe Galeries</Text>
          {universe.map((item, index) => (
            <Text key={index} style={styles.sectionText}>
              {item}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The group</Text>
          {group.map((item, index) => (
            <Text key={index} style={styles.sectionText}>
              {item}
            </Text>
          ))}
        </View>
      </View>

      {/* SOCIAL MEDIA */}
      <View style={styles.socialContainer}>
        {socialIcons.map((icon, index) => (
          <FontAwesome5 key={index} name={icon} size={20} color="#fff" style={styles.socialIcon} />
        ))}
      </View>

      {/* FOOTER LINKS */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>CGV</Text>
        <Text style={styles.footerText}>Loyalty Program Terms and Conditions</Text>
        <Text style={styles.footerText}>Personal data / Privacy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 15,
    paddingTop: 40,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#222",
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    color: "#bbb",
    textAlign: "center",
    marginTop: 5,
  },
  discover: {
    fontSize: 12,
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  section: {
    width: "48%",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#bbb",
    marginBottom: 5,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  footer: {
          borderTopWidth: 1,
    borderTopColor: "#333",
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: "#bbb",
    textAlign: "center",
    marginTop: 5,
  },
});

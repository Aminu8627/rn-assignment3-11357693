import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  SectionList,
  ScrollView,
  FlatList,
} from "react-native";
import person from "./assets/person.png";
import filter from "./assets/Filter.png";
import exerciseImage from "./assets/young woman working online.png";
import studyImage from "./assets/young woman working at desk.png";

const DATA = [
  {
    title: "Ongoing Tasks",
    data: [
      "Mobile App Development",
      "Web Development",
      "Website Designing",
      "Yoga Exercise",
      "Peer Meeting",
      "Assignment Project",
      "Worship",
      "Worship",
      "Worship",
      "Worship"

    ],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <View>
          <Text style={styles.greetingMessage}>Hello, Devs</Text>
          <Text>14 Tasks today</Text>
        </View>

        <View style={styles.profile}>
          <Image source={person} />
        </View>
      </View>

      <View style={styles.searchBar}>
        <View style={styles.searchBox}>
          <TextInput placeholder="search" value={Text} />
        </View>
        <View style={styles.filterButton}>
          <Image source={filter} />
        </View>
      </View>

      <View style={styles.categoriesHeader}>
        <Text style={styles.categoryHeaderContext}>Categories</Text>
      </View>
      <ScrollView style={styles.scrollArea}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categorySection}>
          
            <View style={styles.category1}>
              <Text style={styles.categoryTitle}>Exercises</Text>
              <Text>12 Tasks</Text>
              <Image source={exerciseImage} />
            </View>

            <View style={styles.category2}>
              <Text style={styles.categoryTitle}>Study</Text>
              <Text>12 Tasks</Text>
              <Image source={studyImage} />
            </View>

            <View style={styles.category1}>
              <Text style={styles.categoryTitle}>Exercises</Text>
              <Text>12 Tasks</Text>
              <Image source={exerciseImage} />
            </View>

            <View style={styles.category1}>
              <Text style={styles.categoryTitle}>Exercises</Text>
              <Text>12 Tasks</Text>
              <Image source={exerciseImage} />
            </View>
          
        </ScrollView>

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
    flex: 1,
  },
  intro: {
    flexDirection: "row",
    marginTop: 45,
    fontSize: "32",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingMessage: {
    fontSize: 28,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  searchBox: {
    backgroundColor: "#FBF9F7",
    borderRadius: 20,
    padding: 10,
    flex: 5,
  },
  filterButton: {
    flex: 1,
  },
  categoriesHeader: {
    fontSize: 32,
    fontWeight: "700",
    marginVertical: 10,
    backgroundColor: "#F7F0E8",
  },
  categoryHeaderContext: {
    fontSize: 28,
  },
  scrollArea: {
    height: "100%",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  categorySection: {
    flexDirection: "row",
    columnGap: "2",
    padding: 10,
  },
  category1: {
    backgroundColor: "#fff",
    padding: 10,
  },
  category2: {
    backgroundColor: "#fff",
    padding: 10,
  },

  item: {
    backgroundColor: "#E8D1BA",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  ongoingTasks: {
    backgroundColor: "#E8D1BA",
    padding: 20,
    marginVertical: 8,
  },
});

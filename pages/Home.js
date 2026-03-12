import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { MaterialIcons} from "@expo/vector-icons";

const Home = () => {
    const totalPresent = history.filter(item => item.status === "Present").length;
    const totalAbsent  = history.filter(item => item.status === "Absent").length;
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Attendence App</Text>

            <View style={styles.card}>
                <View style={styles.icon}>
                <MaterialIcons name="person" size={40} color="#555" />
                </View>

                <View>
                    <Text style={styles.name}>Raka Ghaisan Rabbani</Text>
                    <Text>NIM : 0320240061</Text>
                    <Text>Class : MI2A</Text>
                </View>

            </View>

            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Today's Class</Text>
                <Text>Mobile Programming</Text>
                <Text>08:00 - 10:00</Text>
                <Text>Lab 3</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CHECK IN</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Upcoming Class</Text>
                <Text>Database Systems</Text>
                <Text>10:00 - 12:00</Text>
                <Text>Lab 2</Text>
            </View>

            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Attendance Summary</Text>
                <Text style={styles.present}>Present : {totalPresent}</Text>
                <Text style={styles.absent}>Absent  : {totalAbsent}</Text>
            </View>

            <Text style={styles.subtitle}>Attendence History</Text>
                <FlatList
                    data={history}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />

            </ScrollView>
    </SafeAreaView>
    );
};

const history = [
  { id: "1",  course: "Mobile Programming",    date: "2026-02-25", status: "Present" },
  { id: "2",  course: "Database Systems",      date: "2026-02-26", status: "Present" },
  { id: "3",  course: "Operating Systems",     date: "2026-02-27", status: "Absent" },
  { id: "4",  course: "Computer Networks",     date: "2026-02-28", status: "Present" },
  { id: "5",  course: "Web Programming",       date: "2026-03-01", status: "Present" },
  { id: "6",  course: "Software Engineering",  date: "2026-03-02", status: "Absent" },
  { id: "7",  course: "Artificial Intelligence",date:"2026-03-03", status: "Present" },
  { id: "8",  course: "Data Structures",       date: "2026-03-04", status: "Present" },
  { id: "9",  course: "Mobile Programming",    date: "2026-03-05", status: "Absent" },
  { id: "10", course: "Database Systems",      date: "2026-03-06", status: "Present" },
  { id: "11", course: "Operating Systems",     date: "2026-03-07", status: "Present" },
  { id: "12", course: "Computer Networks",     date: "2026-03-08", status: "Absent" },
  { id: "13", course: "Web Programming",       date: "2026-03-09", status: "Present" },
  { id: "14", course: "Software Engineering",  date: "2026-03-10", status: "Present" },
  { id: "15", course: "Artificial Intelligence",date:"2026-03-11", status: "Absent" },
  { id: "16", course: "Data Structures",       date: "2026-03-12", status: "Present" },
  { id: "17", course: "Mobile Programming",    date: "2026-03-13", status: "Present" },
  { id: "18", course: "Database Systems",      date: "2026-03-14", status: "Absent" },
  { id: "19", course: "Operating Systems",     date: "2026-03-15", status: "Present" },
  { id: "20", course: "Computer Networks",     date: "2026-03-16", status: "Present" },
  { id: "21", course: "Web Programming",       date: "2026-03-17", status: "Absent" },
  { id: "22", course: "Software Engineering",  date: "2026-03-18", status: "Present" },
  { id: "23", course: "Artificial Intelligence",date:"2026-03-19", status: "Present" },
];
const renderItem = ({ item }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>

    <View style={styles.statusRow}>
      <MaterialIcons
        name={item.status === "Present" ? "check-circle" : "cancel"}
        size={18}
        color={item.status === "Present" ? "green" : "red"}
      />
      <Text style={item.status === "Present" ? styles.present : styles.absent}>
        {" "}{item.status}
      </Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        backgroundColor : "#f5f5f5"
    },

    title: {
        fonstSize : 24,
        fontWeight : "bold"
    },

    card: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },

    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
    },

    subtitle:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    button: {
        marginTop: 10,
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText: {
        color: "white",
    },

    content : {
        padding : 20,
        paddingBottom : 40
    },

    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    course: {
        fontSize: 16,
    },

    date: {
        fontSize: 12,
        color: "gray",
    },

    present: {
        color: "green",
        fontWeight: "bold",
    },

    absent: {
        color: "red",
        fontWeight: "bold",
    },
    
    statusRow: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Home;
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View,SectionList,ScrollView } from 'react-native';
import person from './assets/person.png'
import filter from './assets/Filter.png'
import exerciseImage from './assets/young woman working online.png'
import studyImage from './assets/young woman working at desk.png'

const DATA = [
  {
    title:'Ongoing Tasks',
    data:['Mobile App Development','Web Development','Website Designing','Yoga Exercise','Peer Meeting']
  }
]

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <View >
        <Text style={styles.greetingMessage}>Hello, Devs</Text>
        <Text>14 Tasks today</Text>

      </View>

      <View style={styles.profile}>
        <Image source={person}/>
      </View>
      </View> 
      <ScrollView style={styles.bodyBackground}>


      <View style={styles.searchBar}>
        <View style={styles.searchBox}>
<TextInput placeholder='search' value={Text}/>
</View>
<View style={styles.filterButton}>
<Image source={filter}/>
</View>
</View>



<Text style={styles.categoryTitle}>Categories</Text>

<View style={styles.categorySection}>
  <View style={styles.category1}>
    <Text style={styles.categoryTitle}>Exercises</Text>
    <Text>12 Tasks</Text>
    <Image source={exerciseImage}/>
    </View>
  
  <View style={styles.category2}>
  <Text style={styles.categoryTitle}>Study</Text>
    <Text>12 Tasks</Text>
    <Image source={studyImage}/>
    </View>


</View>

    
    
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />   
    
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:45,
    fontSize:'32',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  greetingMessage:{
    fontSize:28,

  },
  searchBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:20,
    
  },
  searchBox:{
    backgroundColor: '#FBF9F7',
    borderRadius:20,
    padding:10,
    flex:5,
  },
  filterButton:{
    flex:1
  },
  categoryTitle:{
    fontSize:20,
    fontWeight:'700',
  },

  categorySection:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  category1:{
    backgroundColor:'#fff',
    padding:10,
  },
  category2:{
    backgroundColor:'#fff',
    padding:10,
  },
  
  item: {
    backgroundColor: '#E8D1BA',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  bodyBackground:{
    backgroundColor:'#F7F0E8',
    
  }
});

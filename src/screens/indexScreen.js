import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';


const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return <View>
    <Text> Index Screen</Text>
    <Button title="Add Blog Post" onPress={addBlogPost}/>
    <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return (
              <TouchableOpacity onPress={() => navigation.push('Show',{id:item.id})}>
                <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}><Feather name='trash' size={30} color="#000"/></TouchableOpacity>
              </View>
              </TouchableOpacity>
          );
        }
        }
    />
  </View>;
};
IndexScreen.navigationOptions = ({ navigation }) => {
 return {
   title: 'Home',
   headerRight: <TouchableOpacity onPress={() => navigation.push('AddBlog')}>
     <Feather style={{
       marginRight: 10,
     }} name='plus' size={30} color='#000'/>
   </TouchableOpacity>,
 }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },

});

export default IndexScreen;

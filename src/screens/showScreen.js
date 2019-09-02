import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
  return (
      <View style={styles.content}>
        <Text style={styles.heading}>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
      </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Blog',
    headerRight: <TouchableOpacity onPress={() => navigation.push('EditBlog', {id: navigation.getParam('id')})}>
      <EvilIcons style={{
        marginRight: 10,
      }} name='pencil' size={30} color='#000'/>
    </TouchableOpacity>,
  };
};

const styles = StyleSheet.create({
  content: {
    padding: 5,
    margin: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ShowScreen;

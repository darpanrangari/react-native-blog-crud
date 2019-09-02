import React, {useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import BlogPostForm from '../component/BlogPostForm';
import {Context, editBlogPost} from '../context/BlogContext';


const EditScreen = ({navigation}) => {
  const {state, editBlogPost} = useContext(Context);
  let id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
      <View>
        <BlogPostForm
            onSubmit={(title, content) => {
              editBlogPost(id, title, content, () => navigation.pop());
            }}
            initialValues={{title: blogPost.title, content: blogPost.content}}
        />
      </View>
  );
};

const styles = StyleSheet.create({});
export default EditScreen;

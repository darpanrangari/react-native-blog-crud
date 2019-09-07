import React, {useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const AddBlogPost = ({navigation}) => {

  const {addBlogPost} = useContext(Context);

  return (
      <View>
        <BlogPostForm
            onSubmit={(title, content) => {
              addBlogPost(title, content, () => navigation.navigate('Index'));
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({

});
export default AddBlogPost;

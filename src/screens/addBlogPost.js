import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {Context} from '../context/BlogContext';

const AddBlogPost = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);
  const addBlog = () => {
    if (title === '' || content === '') {
      Alert.alert(
          'Error!!!',
          'Please check if all the fields filled',
          [
            {text: 'ok', onPress: () => console.log('OK Pressed')},
          ],
      );
    }
    else {
      addBlogPost(title, content, () => navigation.push('Index'));
    }


  };
  return (
      <View>
        <Text
            style={styles.text}
        >
          Title:
        </Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
        />

        <Text
            style={styles.text}
        >
          Content:
        </Text>
        <TextInput style={styles.input}
                   value={content}
                   onChangeText={(text) => setContent(text)}
        />
        <Button style={styles.button}
                title='Add Blog'
                onPress={addBlog}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    margin: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 5,
  },
  button: {
    margin: 5,
  },

});
export default AddBlogPost;

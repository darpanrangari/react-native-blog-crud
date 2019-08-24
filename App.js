import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/indexScreen';
import ShowScreen from './src/screens/showScreen';
import AddBlogPost from './src/screens/addBlogPost';

const navigator = createStackNavigator(
    {
      Index: IndexScreen,
      Show: ShowScreen,
      AddBlog: AddBlogPost,
    }, {
      initialRouteName: 'Index',
      defaultNavigationOptions: {
        title: 'Blogs',
      },
    },
);
const App = createAppContainer(navigator);

export default () => {
  return <Provider><App/></Provider>;
}

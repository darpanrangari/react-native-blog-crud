import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from './src/context/BlogContext';

import IndexScreen from './src/screens/indexScreen';

const navigator = createStackNavigator(
    {
      Index: IndexScreen,
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

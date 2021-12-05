import React from 'react';

import Header from './src/components/Header';
import Story from './src/components/Story';
import Post from './src/components/Post';
import Tabbar from './src/components/Tabbar';


const App = () => {

  return(
      <React.Fragment>
        <Header />
        <Story />
        <Post />
        <Tabbar />
      </React.Fragment>
  );

};

export default App;

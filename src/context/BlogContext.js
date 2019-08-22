import React,{useReducer} from 'react';

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [...state,{title:`Blog Post #${state.length + 1}`}]
  }
}

export const BlogProvider = ({children}) => {
  const[state, dispatch] = useReducer(reducer,[])

  const addBlogPost = () => {
    dispatch({type:'ADD_BLOG_POST'})
  }
  return (
      <BlogContext.Provider value={{data:state,addBlogPost}}>
        {children}
      </BlogContext.Provider>
  );
};

export default BlogContext;

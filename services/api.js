import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get('/api/posts');
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected response status:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
export const getPostById = async (id) => {
  try {
    const response = await axios.get(`/api/posts/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected response status:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return [];
  }
};
export const getRecentPost = async () => {
  try {
    const response = await axios.get('/api/posts/recent');
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected response status:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return [];
  }
};

export const getGoodies = async () => {
  try {
    const response = await axios.get('/api/goodies');
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected response status:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching goodies:', error);
    return [];
  }
};
export const getTestimonials = async () => {
  try {
    const response = await axios.get('/api/testimonials');
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected response status:', response.status);
      return [];
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};
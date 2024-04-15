import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/posts");

    const posts = response.data.posts;
    console.log(posts);
    if (response.status === 200) {
      dispatch({ type: "addData", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

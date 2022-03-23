import classes from "./posts-grid.module.css";

export const PostsGrid = (props: any) => {
  const { posts } = props;
  return <ul className={classes.grid}>{posts.map()}</ul>;
};

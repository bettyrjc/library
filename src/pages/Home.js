import React from "react";

// componentes
import Navbar from "../components/layout/navbar";
import { makeStyles } from "@material-ui/core/styles";
import Comments from "../components/comments/Comments";
const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "7rem",
    flexGrow: 1,
    padding: theme.spacing(7),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <main className={classes.content}></main>
    </>
  );
};

export default Home;

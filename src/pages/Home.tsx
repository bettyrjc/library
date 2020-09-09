// Dependencies
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

// componentes
import Navbar from "../components/layout/navbar";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "7rem",
    flexGrow: 1,
    padding: theme.spacing(7),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <main className={classes.content}></main>
    </>
  );
};

export default Home;

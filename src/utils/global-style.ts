import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    title: {
      flexGrow: 1,
      color: "#000",
      fontWeight: "bold",
    },
    whiteTitle: {
      flexGrow: 1,
      color: "#fff",
    },
    list: {
      width: 250,
    },
    menuText: {
      color: "#000",
      fontWeight: "bold",
    },
    blockDetail: {
      padding: "1.0em",
    },
    blockdata: {
      color: '#fff',
      backgroundColor: '#bdbdbd',
      height: 100,
      width: 100
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "1em",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    redButton: {
      color: "#FFF",
      backgroundColor: "#f14668",
      textTransform: "none",
      transition: "all 0.3s ease 0s",
      "&:hover": {
        backgroundColor: "#f5758f",
        transform: "translateY(-1px)",
        boxShadow: "0px 10px 10px rgba(241, 70, 104, 0.4)",
      },
      "&:focus": {
        outline: "none",
      },
    },
    purpleButton: {
      color: "#FFF",
      backgroundColor: "#5845E6",
      textTransform: "none",
      transition: "all 0.3s ease 0s",
      "&:hover": {
        backgroundColor: "#8a7ded",
        transform: "translateY(-1px)",
        boxShadow: "0px 10px 10px rgba(90, 71, 230, 0.4)",
      },
      "&:focus": {
        outline: "none",
      },
    },
    blueButton: {
      color: "#FFF",
      backgroundColor: "#2F80EF",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#71a8f4",
        transform: "translateY(-1px)",
        boxShadow: "0px 10px 10px rgba(46, 127, 239, 0.4)",
      },
      transition: "all 0.3s ease 0s",
      "&:focus": {
        outline: "none",
      },
    },
    disabledButton: {
      color: "#FFF",
      backgroundColor: "#acafd2",
      textTransform: "none",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        backgroundColor: "#e1e2ef",
        transform: "translateY(-1px)",
        boxShadow: "0px 5px 5px rgba(172, 175, 210, 0.4)",
      },
    },
  })
);

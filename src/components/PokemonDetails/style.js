export default (theme) => ({
  card: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    display: "flex",
    alignItems: "center"
  },
  media: {
    marginRight: theme.spacing(2),
    width: 120,
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  abilities: {
    display: "flex",
    flexDirection: "column"
  }
});

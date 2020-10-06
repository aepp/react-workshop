export default (theme) => ({
  odd: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  },
  even: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    }
  },
  selectedOdd: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main + " !important"
  },
  selectedEven: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.secondary.main + " !important"
  },
  colorWhite: {
    color: theme.palette.background.default
  }
});

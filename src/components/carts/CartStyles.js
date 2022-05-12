import { makeStyles, fade} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '2%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  Container: {
    marginTop: '7%',
    marginBottom: '7%',
    boxShadow: '0 5px 5px 2px rgba(122, 105, 135, .3)',
    borderRadius: 25,
    height: 900,
    background: fade(theme.palette.common.white, 0.90),
},
}));
import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Form: {
        marginTop: '2%',
        marginLeft: '30%',
        maxWidth: '450px',
        boxSizing: 'border-box',
      },
    loginButton: {
      marginLeft: '40%',
      padding: '2px',
      minWidth: '100px',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 26, 0.3)',
    },
    createAccountLink: {
      marginLeft: '22%',
      padding: '5px',
    },
    loginError: {
      height: '50px',
      marginLeft: '20%',
      color: 'red',
    },
    segment: {
      marginTop: '5%',
      paddingTop: '5%',
  },
    body: { 
      marginTop: '150px',
      marginLeft: '350px',
      marginRight: '350px',
      height: 450,
      width: 500,
      borderRadius: 3,
      background: fade(theme.palette.common.white, 0.15),
      boxShadow: '0 3px 5px 2px rgba(122, 105, 135, .3)',
    },
    imageBody: { 
      marginTop: '150px',
      padding: '150px',
      background: fade(theme.palette.common.white, 0.15),
    },
    img: {
        borderRadius: '4px',
        padding: '5px',
        width: '150px',
        height: '150px',
        marginLeft: '30%',
      },
}));
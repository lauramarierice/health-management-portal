import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({ 
    segment: {
        marginTop: '5%',
        paddingTop: '5%',
    },
    Form: {
        padding: '20px',
        boxSizing: 'border-box',
        boxShadow: '0 5px 5px 2px rgba(122, 105, 135, .3)',
        height: 600,
        width: 800,
        borderRadius: 25,
        background: fade(theme.palette.common.white, 0.15),
      },
      Button: {
        marginLeft: '2%',
        float: 'left',
        background: '#3d8577',
        width: 375,
        boxSizing: 'border-box',
        padding: '4px 20px',
        borderRadius: 25,
      },
      error: {
        height: '50px',
        color: 'red',
      },
      body: { 
        padding: '150px',
        background: fade(theme.palette.common.white, 0.15),
      },  
      box: {
        alignItems: "stretch",
        display: 'grid',
      },
      cardContent: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      root: {
        marginTop: '7%',
        flexGrow: 1,
        marginBottom: '2%',
        width: 500,
      },
      Form: {
        marginTop: '2%',
        marginLeft: '30%',
        maxWidth: '450px',
        boxSizing: 'border-box',
      },
      addFundsForm: {
        height: '50px',
        marginLeft: '-40%',
      },
}));
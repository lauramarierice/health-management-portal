import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Container: {
        boxShadow: '0 5px 5px 2px rgba(122, 105, 135, .3)',
        borderRadius: 50,
        background: fade(theme.palette.common.white, 0.90),
  },
  box: {
    alignItems: "stretch",
    display: 'grid',
    marginTop: '10%',
  },  
  segment: {
      marginTop: '7%',
  },
  Form: {
    float: 'left',
    display: "inline",
  },
  UpdateButton: {
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
  FormLabel: {
    marginLeft: '2%',
    marginTop: '2%',
  },
  FormGroup: {
    display: "inline",
  },
  RegisterButton: {
    marginLeft: '2%',
    float: 'left',
    background: '#3d8577',
    width: 375,
    boxSizing: 'border-box',
    padding: '4px 20px'
  },
  PageHeader: {
    marginLeft: '25%',
  },
  SearchText: {
    width: 150,
    height: 30,
  },
  segment: {
    marginTop: '5%',
    paddingTop: '5%',
},
}));
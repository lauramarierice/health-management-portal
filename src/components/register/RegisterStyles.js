import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Container: {
        boxShadow: '0 5px 5px 2px rgba(122, 105, 135, .3)',
        borderRadius: 50,
        background: fade(theme.palette.common.white, 0.90),
  },
  Form: {
    marginLeft: '25%',
    marginTop: '5%',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0 5px 5px 2px rgba(122, 105, 135, .3)',
    height: 650,
    width: 425,
    borderRadius: 50,
    background: fade(theme.palette.common.white, 0.15),
  },
  FormLabel: {
    marginLeft: '2%',
    marginTop: '2%',
  },
  FormText: {
    marginLeft: '2%',
    width: 375,
    height: 30,
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
  }
}));
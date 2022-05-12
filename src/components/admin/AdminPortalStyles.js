import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    body: { 
      marginTop: '150px',
      padding: '150px',
      background: fade(theme.palette.common.white, 0.15),
    },
    img: {
        borderRadius: '4px',
        padding: '5px',
        width: '150px',
        height: '150px',
        marginLeft: '20%',
      },
    box: {
      alignItems: "stretch",
      display: 'grid',
    },
    Button: {
      marginTop: '2%',
      marginLeft: '100%',
      background: '#3d8577',
      width: 200,
      boxSizing: 'border-box',
    },
    Container: {
      boxShadow: '0 5px 5px 2px rgba(122, 105, 135, .3)',
      borderRadius: 50,
      padding: 20,
      background: fade(theme.palette.common.white, 0.90),
      height: 350,
      width: 800,
},
AddMedicineForm: {
  marginTop: '2%',
  marginLeft: '25%',
  boxSizing: 'border-box',
  boxShadow: '0 5px 5px 2px rgba(122, 105, 135, .3)',
  height: 500,
  width: 800,
  borderRadius: 50,
  padding: 50,
  background: fade(theme.palette.common.white, 0.15),
},
SearchForm: {
  marginTop: '10%',
  marginLeft: '18%',
},
SearchLabel: {
  marginLeft: '4%',
  marginTop: '3%',
},
SearchText: {
  marginLeft: '5px',
  width: 80,
  height: 30,
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
SubmitButton: {
  marginLeft: '20%',
  marginTop: '5%',
  background: '#3d8577',
  width: 375,
},
FilterButton: {
  marginLeft: '2%',
  background: '#3d8577',
  width: 100,
  boxSizing: 'border-box',
  padding: '4px 20px'
},
PageHeader: {
  marginTop: 10,
  marginLeft: '25%',
},
card: {
  marginTop: '2%',
},
errorMessage: {
  height: '50px',
  color: 'red',
},
}));
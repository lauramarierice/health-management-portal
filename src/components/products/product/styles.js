import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

    root: {
        maxWidth: '100%'
    }, 
    media: {
        height: 300,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    productRoot: {
        marginTop: '5%',
        marginLeft: '20%',
        width: 800,
        height: 675,
    },
    productMedia: {
        paddingTop: '50%',
        height: 200,
        width: 600,
        marginLeft: '12.5%',
    },
    productCardActions: {
        height: 20,
        justifyContent: 'flex-end',
    },
    addedToCartMessage: {
        color: "green",
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));
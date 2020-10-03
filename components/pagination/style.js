import { makeStyles } from '@material-ui/core/styles'

export const usePaginationStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        marginLeft: '20%',
        marginTop: 50,
        backgroundColor: theme.palette.background.paper,
    }
}))
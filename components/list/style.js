import { makeStyles } from '@material-ui/core/styles'

export const useListStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        marginLeft: '20%',
        backgroundColor: theme.palette.background.paper,
    }
}))
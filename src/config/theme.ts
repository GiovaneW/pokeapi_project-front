import { createTheme } from '@mui/material/styles'
const theme = createTheme({
    palette: {
        background: {
            default: '#FFFFF'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                positionRelative: true
            }
        }
    }
})

export default theme
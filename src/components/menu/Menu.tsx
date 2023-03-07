import React from 'react'
import { Menu as MuiMenu, MenuItem, MenuList, MenuProps } from '@mui/material'
import { Link } from 'react-router-dom'

// interface IMenuProps extends MenuProps {

// }
export function Menu(): React.ReactElement {

    return (
        <MuiMenu open>
            <MenuItem>
                Teste
            </MenuItem>
        </MuiMenu>
    )
}
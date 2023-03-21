import React, { useState } from 'react'
import { MoreHoriz } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { history } from '../../helpers/history'

interface ITableMenuOption {
    title: string
    to?: string
    onClick?: (e: any) => void
    icon?: React.ReactFragment
}

interface ICustomTableOptionsMenuProps {
    options: Array<ITableMenuOption>
}
export default function CustomTableOptionsMenu(props: ICustomTableOptionsMenuProps): React.ReactElement {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const isOpen = Boolean(anchorEl)

    function handleButtonClick(event: React.MouseEvent<HTMLElement>): void {
        setAnchorEl(event.currentTarget)
    }

    function handleCloseMenu(): void {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton
                aria-label='more'
                id='long-menu'
                aria-controls={isOpen ? 'long-menu' : undefined}
                aria-expanded={isOpen ? 'true' : undefined}
                aria-haspopup='true'
                onClick={handleButtonClick}
            >
                <MoreHoriz
                    fontSize='large'
                    style={{
                        opacity: '75%',
                        cursor: 'pointer'
                    }} />
            </IconButton>
            <Menu
                id='long-menu'
                MenuListProps={{
                    'aria-labelledby': 'long-buton'
                }}
                anchorEl={anchorEl}
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom'
                }}
                onClose={handleCloseMenu}
                transformOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }}
                open={isOpen}
                PaperProps={{
                    'aria-flowto': 'left',
                    style: {
                        // maxHeight: 100,
                        maxWidth: '15rem',
                        left: '834px'
                    }
                }} >
                {props.options.map((option, index) => {
                    return <MenuItem
                        key={`table-menu-item${option.title}-${index}`}
                        onClick={(e) => {
                            if (option.to) history.push(option.to)
                            handleCloseMenu()
                        }} >
                        {option.title}
                    </MenuItem>
                })}
            </Menu>
        </div>
    )
}
import { Button, ButtonProps } from '@mui/material'
import React from 'react'

// interface ICustomButton extends ButtonProps {

// }

export default function CustomButton(props: ButtonProps): React.ReactElement {

    return (
        <Button
            onClick={(e) => {
                if (props.onClick) props.onClick(e)
            }}
            type={props.type}
            variant='outlined'
            {...props}
        >
            {props.children}
        </Button>
    )
}
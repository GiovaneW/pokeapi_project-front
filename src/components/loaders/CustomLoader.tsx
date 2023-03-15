import { Backdrop, BackdropProps, CircularProgress, LinearProgress } from '@mui/material'
import React, { useState, useEffect } from 'react'

interface ICustomLoaderProps extends BackdropProps {
    // delay?: number
    type: 'linear' | 'circular'
    backdrop: boolean
    loaderSize?: string
}


export default function CustomLoader(props: ICustomLoaderProps): React.ReactElement {

    const [isOpen, setIsOpen] = useState<boolean>(props.open)

    function handleClose(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
        if (props.onClick) props.onClick(e)

        setIsOpen(false)
    }

    useEffect(() => {
        setIsOpen(props.open)
    }, [props.open])

    return (
        <>
            {props.backdrop ?
                <Backdrop open={isOpen} onClick={(e) => handleClose(e)}>
                    <CircularProgress size={props.loaderSize ?? '200px'} color='primary' />
                </Backdrop>
                : <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '100px',
                    backgroundColor: 'aliceblue',
                    alignContent: 'center',
                    flexWrap: 'wrap',
                    width: '100%',
                    minWidth: '100px',
                }}>
                    {props.type === 'circular' ?
                        <CircularProgress size={props.loaderSize ?? '30%'} style={{
                            opacity: '50%'
                        }} color='primary' /> :
                        <LinearProgress color='primary' />}
                </div>
            }
        </>
    )
}
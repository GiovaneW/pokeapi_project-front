import { Modal, ModalProps } from '@mui/material'
import React from 'react'

interface ICustomModalProps extends ModalProps {
    children: React.ReactElement<'CustomModalContainer'>
}

export function CustomModal(props: ICustomModalProps): React.ReactElement {

    return (
        <Modal
            {...props}
            style={{
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '5% 2% 3% 2%'
            }}
        >
            <div style={{ display: 'contents' }} >
                {props.children}
            </div>
        </Modal>
    )
}
import React, { useState, useEffect } from 'react'
import { Modal } from '@mui/material'
import { toTitleCase } from '../../helpers/TextHelpers'
import { CustomModal } from './CustomModal'
import { CustomModalContainer } from './CustomModalContainer'
import { CustomModalHeader } from './CustomModalHeader'
import { CustomModalBody } from './CustomModalBody'
import { CustomModalFooter } from './CustomModalFooter'
import CustomButton from '../buttons/CustomButton'

interface IDialogModalProps {
    isOpen: boolean
    onCancel: () => void
    onConfirm: () => void
    title: string
    dialog: string
}

export function DialogModal(props: IDialogModalProps): React.ReactElement {

    return (
        <CustomModal
            open={props.isOpen}
            onClose={props.onCancel}
            onBackdropClick={props.onCancel}
            style={{
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '5% 2% 3% 2%'
            }}
        >
            <CustomModalContainer >
                <CustomModalHeader
                    onClose={props.onCancel}
                    title={props.title}
                />

                <CustomModalBody>
                    <div style={{
                        padding: '1%',
                        fontFamily: 'monospace',
                        fontSize: '19px'
                    }}>
                        {props.dialog}
                    </div>
                </CustomModalBody>

                <CustomModalFooter>
                    <CustomButton value='Cancelar' onClick={props.onCancel} />
                    <CustomButton value='Confirmar' onClick={props.onConfirm} />
                </CustomModalFooter>
            </CustomModalContainer>

        </CustomModal>
    )
}
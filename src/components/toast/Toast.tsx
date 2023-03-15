import { toast } from 'react-toastify'

interface IToastProps {
    severity: 'warning' | 'info' | 'error' | 'success'
    message: string
}

export function Toast(props: IToastProps): void {
    toast(
        props.message,
        { type: props.severity }
    )
}
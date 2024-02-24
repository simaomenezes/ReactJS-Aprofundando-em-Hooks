import styled from 'styled-components';

export type ButtonVariant = 'primary'|'secundary'|'danger'|'success';

interface ButtonContainerProps{
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secundary: 'orange',
    danger: 'red',
    success: 'green'
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    // interpolação de string
    ${props => {
        return `background-color: ${buttonVariants[props.variant]}`
    }}
`
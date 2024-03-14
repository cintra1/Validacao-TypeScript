import styled from 'styled-components';
import { IInputProps } from './types';


export const ButtonContainer = styled.button<IInputProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    opacity: 0.4;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`
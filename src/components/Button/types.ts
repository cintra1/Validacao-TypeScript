export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IInputProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
}
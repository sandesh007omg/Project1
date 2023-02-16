import styled from 'styled-components';

interface StyledProps {
  iconWidth?: string;
  iconHeight?: string;
  disabled: boolean;
}

const IconStyled = styled.span<StyledProps>`
  svg {
    display: inline-block;
    fill: currentColor;
    width: ${props => props.iconWidth || '16px'};
    height: ${props => props.iconHeight || '16px'};
    vertical-align: middle;
    pointer-events: ${props => (props.disabled ? 'none' : 'unset')};
    opacity: ${props => (props.disabled ? '0.4' : '1')};
  }
`;

export default IconStyled;

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import icons from '../../assets/images/icons.svg';
import IconStyled from './IconStyled';

const propTypes = {
  /**
   * @default empty
   * children passed within button
   */
  iconName: PropTypes.string,
  /**
   * @default ''
   * className passed along with the button
   */
  className: PropTypes.string,
  /**
   * @default false
   * button is primary or not.
   */
  primary: PropTypes.bool,
  /**
   * @default false
   * button is secondary
   */
  secondary: PropTypes.bool,
  /**
   * @default false
   * button is small
   */
  small: PropTypes.bool,
  /**
   * @default false
   * small
   */
  active: PropTypes.bool,
  /**
   * @default false
   * disabled
   */
  disabled: PropTypes.bool,
};

const defaultProps = {
  iconName: '',
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false,
};

interface IconProps {
  name?: string;
  iconName: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  active?: boolean;
  disabled: boolean;
  iconHeight?: string;
  iconWidth?: string;
  onClick?: () => void;
}

const Icon = ({
  name,
  className,
  primary,
  secondary,
  small,
  active,
  disabled,
  iconName,
  iconHeight,
  iconWidth,
  ...otherProps
}: IconProps) => {
  const classes = classNames(
    'icon',
    {
      primary,
      secondary,
      small,
      active,
      disabled,
    },
    className,
    name
  );
  return (
    <Fragment>
      <IconStyled iconWidth={iconWidth} iconHeight={iconHeight} disabled={disabled}>
        <svg className={classes} {...otherProps}>
          <use xlinkHref={`${icons}#${iconName}`} />
        </svg>
      </IconStyled>
    </Fragment>
  );
};

Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;

export default Icon;

import clsx from "clsx";
import React from "react";

type IconType =
  | string
  | React.FunctionComponent<{ className: string; "aria-hidden": boolean }>
  | React.ComponentClass<{ className: string; "aria-hidden": boolean }>;

export interface Props {
  children?: React.ReactNode;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The size of the button
   */
  size?: "larger" | "large" | "regular" | "small" | "pagination";
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType;
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType;
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: IconType;
  /**
   * The style of the button
   */
  layout?:
    | "outline"
    | "link"
    | "primary"
    | "secondary"
    | "__dropdownItem"
    | "contact";
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean;
  /**
   * Shows the button as a block (full width)
   */
  hasSlumIcon?: boolean;
  /**
   * Shows the android illustration
   */
  hasAndroid?: boolean;
}

export interface ButtonAsButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: "button" | "a";
  /**
   * The native HTML button type
   */
  type?: "button" | "submit" | "reset";
}

export interface ButtonAsAnchorProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: "a";
}

export interface ButtonAsOtherProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string;
}

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsOtherProps;

type Ref = React.ReactNode | HTMLElement | string;

const Button = React.forwardRef<Ref, ButtonProps>(function Button(
  props,
  ref: any,
) {
  const {
    tag = "button",
    type = tag === "button" ? "button" : tag === "a" ? "a" : undefined,
    disabled = false,
    size = "regular",
    layout = "primary",
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    hasAndroid = false,
    children,
    ...other
  } = props;

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight;
  }

  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  const baseStyle = theme.base;
  const blockStyle = theme.block;
  const sizeStyles = {
    larger: theme.size.larger,
    large: theme.size.large,
    regular: theme.size.regular,
    small: theme.size.small,
    /**
     * Only used in Pagination.
     * Not meant for general use.
     */
    pagination: theme.size.pagination,
  };
  const iconSizeStyles = {
    larger: theme.size.icon.larger,
    large: theme.size.icon.large,
    regular: theme.size.icon.regular,
    small: theme.size.icon.small,
    pagination: theme.size.icon.regular,
  };
  const iconStyle = theme.icon[size];
  const layoutStyles = {
    primary: theme.primary.base,
    secondary: theme.secondary.base,
    link: theme.link.base,
    contact: theme.contact.base,
  };
  const activeStyles = {
    primary: theme.primary.active,
    secondary: theme.secondary.active,
    link: theme.link.active,
  };
  const disabledStyles = {
    primary: theme.primary.disabled,
    secondary: theme.secondary.disabled,
    link: theme.link.disabled,
  };

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownItemStyle = theme.dropdownItem.base;

  const buttonStyles =
    layout === "__dropdownItem"
      ? clsx(dropdownItemStyle, className)
      : clsx(
          baseStyle,
          // has icon but no children
          hasIcon() && !children && iconSizeStyles[size],
          // has icon and children
          hasIcon() && children && sizeStyles[size],
          // does not have icon
          !hasIcon() && sizeStyles[size],
          layoutStyles[layout],
          disabled ? disabledStyles[layout] : activeStyles[layout],
          hasAndroid && "relative",
          block ? blockStyle : null,
          className,
        );

  const iconLeftStyles = clsx(iconStyle, children ? theme.icon.left : "");
  const iconRightStyles = clsx(iconStyle, children ? theme.icon.right : "");

  if (type === "button") {
    return (
      <button
        className={buttonStyles}
        ref={ref}
        disabled={disabled}
        type={type}
        {...(other as any)}
      >
        {IconLeft && <IconLeft className={iconLeftStyles} aria-hidden={true} />}
        {children}
        {IconRight && (
          <IconRight className={iconRightStyles} aria-hidden={true} />
        )}
      </button>
    );
  } else if (type === "a") {
    return (
      <a
        href={(other as any).href}
        className={buttonStyles}
        ref={ref}
        type={type}
        {...(other as any)}
      >
        {IconLeft && <IconLeft className={iconLeftStyles} aria-hidden={true} />}
        {children}
        {IconRight && (
          <IconRight className={iconRightStyles} aria-hidden={true} />
        )}
      </a>
    );
  }
});

export default Button;

const theme = {
  base: "align-bottom inline-flex font-primary items-center justify-center cursor-pointer leading-5 transition-colors duration-150 focus:outline-none",
  block: "w-full",
  size: {
    larger: "px-10 py-3 rounded-xl",
    large: "px-8 py-2 rounded-xl text-md",
    regular: "px-10 py-2 rounded-xl text-sm",
    small: "px-4 py-1 rounded-xl text-xs",
    icon: {
      larger: "p-4 rounded-3xl",
      large: "p-3 rounded-3xl",
      regular: "p-2 rounded-3xl",
      small: "px-4 py-2 rounded-3xl",
    },
    pagination: "px-3 py-1 rounded-md text-xs",
  },
  // styles applied to the SVG icon
  icon: {
    larger: "h-5 w-5",
    large: "h-2.5 w-2.5",
    regular: "h-5 w-5",
    small: "h-2 w-2",
    left: "mr-2 -ml-1",
    right: "ml-2 -mr-1",
  },
  primary: {
    base: "text-white bg-tbeste-blue-default hover:bg-tbeste-blue-default/80 border border-t-[2px] border-l-[2px] border-r-[4px] border-b-[4px] border-black font-primary font-black",
    active: "active:bg-tbeste-blue-hover hover:bg-tbeste-blue-hover",
    disabled: "opacity-50 cursor-not-allowed",
  },
  secondary: {
    base: "text-white bg-tbeste-pink-default hover:bg-tbeste-pink-default/90 border border-t-[2px] border-l-[2px] border-r-[4px] border-b-[4px] border-black font-primary font-black",
    active: "active:bg-tbeste-pink-hover hover:bg-tbeste-pink-hover",
    disabled: "opacity-50 cursor-not-allowed",
  },
  link: {
    base: "text-gray-600 focus:outline-none border border-transparent",
    active:
      "active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 ",
    disabled: "opacity-50 cursor-not-allowed",
  },

  // this is the button that lives inside the DropdownItem
  dropdownItem: {
    base: "inline-flex items-center cursor-pointer border-l-2 w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800",
  },
  contact: {
    base: " text-white px-4 border-black bg-tbeste-blue-default hover:bg-tbeste-blue-default/80 font-primary border  border-t-[2px] border-l-[2px] border-r-[4px] border-b-[4px] rounded-bl-2xl rounded-tr-2xl",
  },
};

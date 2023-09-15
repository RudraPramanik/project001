import React from "react";

function usePopoverHover() {
  let timeout: any;
  const timeoutDuration = 400;

  const buttonRef = React.useRef(null);
  const [openState, setOpenState] = React.useState(false);

  const toggleMenu = () => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };

  const onHover = (open: any, action: any) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(), timeoutDuration);
    }
  };

  const handleClick = (open: any) => {
    setOpenState(!open);
    clearTimeout(timeout);
  };

  const handleClickOutside = (event: any) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return { onHover, buttonRef, handleClick };
}

export default usePopoverHover;

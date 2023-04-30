import React from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip } from "@mui/material";

export default function Chip({
  label,
  variant,
  size,
  color,
  onClick,
  onDelete,
  href,
  icon,
  deleteIcon,
  avatar,
}) {
  return (
    <MuiChip
      label={label}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      onDelete={onDelete}
      href={href}
      icon={icon}
      deleteIcon={deleteIcon}
      avatar={avatar}
    />
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  href: PropTypes.string,
  icon: PropTypes.node,
  deleteIcon: PropTypes.node,
  avatar: PropTypes.node,
};

Chip.defaultProps = {
  label: undefined,
  variant: undefined,
  size: undefined,
  color: undefined,
  onClick: undefined,
  onDelete: undefined,
  href: undefined,
  icon: undefined,
  deleteIcon: undefined,
  avatar: undefined,
};
import React from "react";
import PropTypes from "prop-types";

import { ChipsBox } from "@base-components";

export default function PokemonChips({
  chipsContent,
  isClickAble,
  boxStyle,
  ...props
}) {
  return (
    <ChipsBox
      size="small"
      chipsContent={chipsContent}
      isClickAble
      boxStyle={boxStyle}
      {...props}
    />
  );
}

PokemonChips.propTypes = {
  chipsContent: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, icon: PropTypes.node })
  ),
  isClickAble: PropTypes.bool,
  boxStyle: PropTypes.shape({}),
};

PokemonChips.defaultProps = {
  chipsContent: [],
  isClickAble: false,
  boxStyle: {},
};

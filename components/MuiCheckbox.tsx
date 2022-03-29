import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  name: string;
  checked: boolean;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MuiCheckbox(props: Props) {
  const { name, checked, onChange } = props;
  return (
    <FormControlLabel
      key={name}
      control={
        <Checkbox
          checked={checked}
          name={name}
          onChange={onChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label={name}
    />
  );
}

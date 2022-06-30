import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// UI Components
import { Center } from "@mantine/core";
import { TextField, styled, IconButton, InputAdornment } from "@mui/material";

// Icons
import SearchIcon from "@mui/icons-material/Search";

const TextFieldStyles = {
  width: "inherit",
  height: "inherit",
};

// Custom MUI-styled Textfield
const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  "& label.Mui-focused": {
    color: p.focusColor,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: p.focusColor,
      backgroundColor: "rgba(0,0,0,0.1)",
    },
    "&:hover fieldset": {
      borderColor: p.focusColor,
    },
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.2)",
    },
  },
}));

const NovelIDInput = () => {
  const navigateTo = useNavigate();
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputError(false);

    if (input === "" || isNaN(input)) {
      setInputError(true);
    } else {
      navigateTo("/UserData", { state: { userID: input } });
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Center>
        <CssTextField
          style={TextFieldStyles}
          label="VNDB ID"
          value={input}
          error={inputError}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          size="large"
          focusColor="#f0f0f0"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            input: {
              //Text input color
              color: "white",
              borderColor: "white",
            },

            //Placeholder color
            "& .MuiInputLabel-root": {
              color: "#f0f0f0",
            },
          }}
        />
      </Center>
    </form>
  );
};

export default NovelIDInput;

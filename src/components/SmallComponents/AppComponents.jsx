/* eslint-disable react/prop-types */
import { Alert, Box, Snackbar } from "@mui/material";
import { Button } from "@mui/material";
import { formatUnits } from "viem";
import { enqueueSnackbar } from "notistack";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export const showToast = (message, variant = "error") => {
  enqueueSnackbar(message, { variant });
};

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#ffffff",
          background:
            "radial-gradient(145.24% 943.2% at 7.91% 50%, #1c85fe91 0%, #be4bc870 40%)",
          fontSize: "18px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          //   fontFamily: "Josefin Sans",
          borderRadius: "12px",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background:
              "radial-gradient(145.24% 943.2% at 7.91% 50%, #be4bc870 0%, #1c85fe91 40%)",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "18px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "500",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export const toLocalFormat = (val) => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatToFixed = (val = 0, dec = 2) => {
  const num = parseFloat(val) || 0;

  const formattedValue = num
    ?.toFixed(dec)
    ?.replace(/(\.\d*?[1-9])0+$|\.0+$/, "$1");

  return formattedValue;
};

export const formatTokenDec = (val, dec) => {
  const data = formatUnits(val?.toString(), Number(dec?.toString()));
  return data;
};

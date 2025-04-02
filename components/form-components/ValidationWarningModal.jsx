import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WarningIcon from "@mui/icons-material/Warning";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import css from "@/styles/forms.module.css";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  display: "flex",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ValidationWarningModal = ({ modalProps, handleClose }) => {
  return (
    <>
      <>
        <Dialog
          open={modalProps.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Fehlende Eingabe!"}
          </DialogTitle>
          <DialogContent
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            dividers
          >
            <div
              className={css.flex}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography>
                Das Feld{" "}
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "large",
                    color: "#ba1414",
                  }}
                >
                  <em>{modalProps?.fieldCaption || ""}</em>
                </span>{" "}
                ist erforderlich
              </Typography>
              <WarningAmberIcon
                sx={{
                  fontSize: "5rem",
                  color: "#ba1414",
                }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </>

      {/* <Modal
        open={modalProps.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Das Feld{" "}
            <span style={{ fontWeight: "500" }}>
              <em>{modalProps.fieldCaption}</em>
            </span>{" "}
            ist erforderlich
          </Typography>
          <WarningIcon sx={{ fontSize: "5rem", color: "#f00" }} />
        </Box>
      </Modal> */}
    </>
  );
};

export default ValidationWarningModal;

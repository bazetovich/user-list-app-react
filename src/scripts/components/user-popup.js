import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const UserPopup = ({
  active,
  data,
  handleClose,
  handleChange,
  handleSubmit
}) => (
  <Dialog open={active} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        value={data.name}
        onChange={handleChange("name")}
        label="Name"
        type="text"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleSubmit} color="primary">
        Update
      </Button>
    </DialogActions>
  </Dialog>
);

export default UserPopup;

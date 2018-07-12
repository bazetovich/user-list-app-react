import React from "react";
import PropTypes from "prop-types";
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
    <DialogTitle id="form-dialog-title">Edit user</DialogTitle>
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
      <TextField
        margin="dense"
        id="email"
        value={data.email}
        onChange={handleChange("email")}
        label="Email"
        type="email"
        fullWidth
      />
      <TextField
        margin="dense"
        id="city"
        value={data.city}
        onChange={handleChange("city")}
        label="City"
        type="text"
        fullWidth
      />
      <TextField
        margin="dense"
        id="phone"
        value={data.phone}
        onChange={handleChange("phone")}
        label="Phone"
        type="text"
        fullWidth
      />
      <TextField
        margin="dense"
        id="website"
        value={data.website}
        onChange={handleChange("website")}
        label="Website"
        type="text"
        fullWidth
      />
      <TextField
        margin="dense"
        id="companyName"
        value={data.companyName}
        onChange={handleChange("companyName")}
        label="Company name"
        type="text"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} style={{ color: "#0000fe" }}>
        Cancel
      </Button>
      <Button onClick={() => handleSubmit(data)} style={{ color: "#0000fe" }}>
        Update
      </Button>
    </DialogActions>
  </Dialog>
);

UserPopup.PropTypes = {
  active: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default UserPopup;

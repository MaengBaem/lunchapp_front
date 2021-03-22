import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class DialogModal extends Component {
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.close} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">{this.props.modalTitle}</DialogTitle>
                <DialogContent>
                    {this.props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleOk} color="primary">
                        Ok
                      </Button>
                    <Button onClick={this.props.close} color="primary">
                        Cancel
                      </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

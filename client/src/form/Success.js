import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class UserDetailSetOne extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="modal-body">
                    <h4 className="display-7">Form Submitted Successfully</h4>
                        <p>We Will Get In Touch With You Shortly.</p>
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default UserDetailSetOne

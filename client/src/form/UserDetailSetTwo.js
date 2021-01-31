import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';

class UserDetailSetOne extends Component {
    continue = (e) => {
        e.preventDefault();
        // Form Validation

        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="modal-body" style={styles.modal_body}>
                        <h4 className="display-7">Detail Set Two</h4>
                        <TextField id="standard-basic" label="Field Five" onChange={handleChange('field_five')}
                            defaultValue={values.field_five}
                            style={styles.text_field}/>
                        <br />
                        <TextField id="standard-basic" label="Field Six" onChange={handleChange('field_six')}
                            defaultValue={values.field_six}
                            style={styles.text_field}/>
                        <br />
                        <TextField id="standard-basic" label="Field Seven" onChange={handleChange('field_seven')}
                            defaultValue={values.field_seven}
                            style={styles.text_field}/>
                        <br />
                        <TextField id="standard-basic" label="Field Eight" onChange={handleChange('field_eight')}
                            defaultValue={values.field_eight}
                            style={styles.text_field}/>
                        <br />
                    </div>
                    <div className="modal-footer">
                            <Button variant="contained"
                                color="secondary"
                                style={styles.button1}
                                onClick={this.back}
                            >Back</Button>
                            <Button variant="contained"
                                color="primary"
                                style={styles.button}
                                onClick={this.continue}
                            >Continue</Button>
                    </div>  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button1 : {
        margin:15,
        marginRight:0
    },
    button : {
        margin:15,
    },
    text_field : {
        width:'85%',
        margin:10
    },
    modal_body : {
        textAlign:'center'
    }
}


export default UserDetailSetOne

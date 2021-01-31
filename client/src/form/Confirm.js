import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class UserDetailSetOne extends Component {
    continue = (e) => {
        e.preventDefault();
        // Process The Form
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values: {field_one, field_two, field_three, field_four, field_five, field_six, field_seven, field_eight }} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="modal-body">
                        <h4 className="display-7">Confirm Details</h4>
                        <List component="nav" aria-label="contacts">
                            <ListItem button>
                                <ListItemText primary="Field One" secondary={ field_one } />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Field Two" secondary={ field_two } />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Field Three" secondary={ field_three } />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Field Four" secondary={ field_four } />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Field Five" secondary={ field_five } />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Field Six" secondary={ field_six } />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Field Seven" secondary={ field_seven } />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Field Eight" secondary={ field_eight } />
                            </ListItem>
                        </List>
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
                            >Confirm & Continue</Button>
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
    }
}


export default UserDetailSetOne

import React, {Component,Fragment} from 'react';

class Popup extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
                   
                <Popup
                tipSize={5}
                anchor='bottom-right'
                longitude={markerList[0].long}
                latitude={markerList[0].lat}
                onMouseLeave={() => this.setState({ popupInfo: null })}
                closeOnClick={true}
                >
                <p>Available beds:{markerList[index].info}</p>
                </Popup>
            </Fragment>
        );
    }
}
import React from 'react'
import styled from 'styled-components';

import Background from '../Background'
import Footer from '../Footer/Footer'
import Node from './Node'
import room from '../../static/images/room.svg'
import {uploadImage} from './action'
import {connect} from "react-redux";

const Svg = styled.svg`
  border: 1px solid #ddd;
  background-image: url(${room});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 400px;
`;

class UploadSiteMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLoad(this.request());
    }

    // buttonClicked = (age, gender) => {
    //     let request = this.request(age.toString(), gender.toString());
    //     this.props.onLoad(request)
    // };

    request = () => {
        return JSON.parse(JSON.stringify(
            {
                "id" : "145",
                "name": "Shampoo",
                "category": "Cosmetics"
            }
        ));
    };

    onChange(title, x, y) {
        console.log(title, x, y)
    }

    render() {
        return <div>
            <Background/>
            <div className="dashboard">
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="content-block">
                            <div className="well well-sm">
                                <strong>Floor Mapping</strong>
                            </div>
                            <Svg>
                                <Node onChange={this.onChange.bind(this, 'CloseUp')} x={35} y={20} title={'CloseUp'} index={1}/>
                                <Node onChange={this.onChange.bind(this, 'Axe')} x={35} y={70} title={'Axe'} index={2}/>
                                <Node onChange={this.onChange.bind(this, 'Lipton')} x={35} y={120} title={'Lipton'} index={3}/>
                                <Node onChange={this.onChange.bind(this, 'lifebuoy')} x={35} y={170} title={'lifebuoy'} index={4}/>
                                <Node onChange={this.onChange.bind(this, 'Marmite')} x={35} y={220} title={'Marmite'} index={5}/>
                                <Node onChange={this.onChange.bind(this, 'Clear')} x={35} y={270} title={'Clear'} index={6}/>
                                <Node onChange={this.onChange.bind(this, 'RFID-1')} x={340} y={200} title={'RFID-1*'} index={'149,226,134,210,35'}/>
                                <Node onChange={this.onChange.bind(this, 'RFID-2')} x={440} y={200} title={'RFID-2*'} index={'230,131,34,219,156'}/>
                                <Node onChange={this.onChange.bind(this, 'RFID-3')} x={540} y={200} title={'RFID-3*'} index={'0,255,62,93,156'}/>
                                <Node onChange={this.onChange.bind(this, 'RFID-4')} x={640} y={200} title={'RFID-4*'} index={'165,181,135,210,69'}/>
                                <Node onChange={this.onChange.bind(this, 'RFID-5')} x={740} y={200} title={'RFID-5*'} index={'117,197,135,210,229'}/>
                            </Svg>
                            <div className="col-xs-12 col-md-6 bottom-right">
                                <a id="upload-btn" className="btn btn-success">Upload
                                    Floor Map</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
    initState: (state.uploadImage || {}).state || "loading"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoad: (request) => dispatch(uploadImage(request))
});

const uploadSiteMap = connect(mapStateToProps, mapDispatchToProps)(UploadSiteMap);

export default uploadSiteMap
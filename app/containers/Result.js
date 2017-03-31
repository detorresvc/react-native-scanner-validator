import React, { Component } from 'react';
import {
	Container, 
	Content, 
	Button, 
	Icon, 
	Text, 
    Grid,
    Row,
    H3,
    H1,
    Col } from 'native-base';
import { Image, Dimensions, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';

const UserThumbnailImage = require('../../img/user-thumbnail.png');
const LineImage = require('../../img/line.png');
const VerifiedIcon = require('../../img/icn-verified.png');
const ExpiredIcon = require('../../img/icn-expired.png');

const deviceWidth = Dimensions.get('window').width;
const deviceBy3 = parseInt(deviceWidth)/3

class Result extends Component {

 	state = {}

 	enableScan = () => {
 		Actions.scanner()
 	}

    toHome = () => {
        const { is_scan } = this.props
        if(is_scan){
            return Actions.scanner()
        }
        Actions.home()
    }

	render() {

        const { initialReducer } = this.props
        const verified_data = initialReducer.verified_data

		return (
			<Container>
                <StatusBar 
                    backgroundColor="blue"
                    barStyle="light-content"/>
                <LinearGradient 
                        colors={['#0a0052', '#0e005c', '#010224']}
                        style={{
                            flex: 1,
                            width: null
                        }}>
                    <Content
                    style={{
                        paddingTop: 20
                    }}>
                        <Grid>
                            <Row
                                style={{
                                    height: 40,
                                    padding: 10
                                }}>
                                <Col 
                                    style={{ 
                                        width: deviceBy3-50
                                    }}
                                    >
                                    <Icon 
                                    onPress={this.toHome}
                                    name="chevron-left"
                                    style={{
                                        fontSize: 20,
                                        color: '#fff'
                                    }}>
                                    <Text
                                        onPress={this.toHome}>{' '}{`Back`}</Text>
                                    </Icon></Col>
                                <Col 
                                    style={{ 
                                        width: deviceBy3+100,
                                        alignItems: 'center'
                                    }}
                                    ><Text>{verified_data.pid || ''}</Text></Col>
                                <Col 
                                    style={{ 
                                        width: deviceBy3-50
                                    }}
                                    ></Col>
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    height: 250,
                                    padding: 20
                                }}>
                                <Image 
                                    source={UserThumbnailImage}
                                    style={{
                                        width: 200,
                                        height: 200
                                    }}
                                    />
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center'
                                }}>
                                <H1>{`${verified_data.fname || ''} ${verified_data.mname || ''} ${verified_data.lname || ''}`}</H1>
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 30
                                }}>
                                <Image 
                                    source={LineImage}
                                    style={{
                                        height: 1
                                    }}
                                    />
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center'
                                }}>
                                <H3>{verified_data.expiration_date || ''}</H3>
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center'
                                }}>
                                <Text>Valid Until</Text>
                            </Row>
                            {!verified_data.is_expired ?
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    height: 150,
                                    padding: 20

                                }}>
                                <Button
                                    full
                                    
                                    style={{
                                        height: 80,
                                        borderWidth: 2,
                                        borderColor: '#1eb258',
                                        backgroundColor: 'transparent'
                                    }}
                                    >
                                    <Image 
                                        source={VerifiedIcon}
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}/>
                                    <Text style={{color: '#1eb258'}}>{' '}License is Verified</Text></Button>
                            </Row> : <Row></Row>}
                            {verified_data.is_expired && verified_data.is_expired === 'true' ?
                                <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    height: 150,
                                    padding: 20

                                }}>
                                <Button
                                    full
                                    
                                    style={{
                                        height: 80,
                                        borderWidth: 2,
                                        borderColor: '#ff0000',
                                        backgroundColor: 'transparent'
                                    }}
                                    >
                                    <Image 
                                        source={ExpiredIcon}
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}/>
                                    <Text style={{color: '#ff0000'}}>{' '}License is Expired</Text></Button>
                            </Row> : <Row></Row>}
                        </Grid>
                    </Content>
                </LinearGradient>
            </Container>
		);
	}
}

export default connect(
    state => {
        return {
            initialReducer: state.initialReducer
        }
    }
)(Result)
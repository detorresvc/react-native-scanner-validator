import React, { Component } from 'react';
import { 
	Container, 
	Content, 
	Footer, 
	FooterTab, 
	Button, 
	Icon, 
	Text, 
    Grid,
    Row,
    H3,
    Item,
    Input } from 'native-base';
import { Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as act from '../actions';
import {Actions} from 'react-native-router-flux'
const BGImage = require('../../img/bg.png')
const MainLogoImage = require('../../img/main-logo.png');
const QRCodeImage = require('../../img/qr-code.png');
const SearchImage = require('../../img/search.png');

class App extends Component {

 	state = {
        id: ''
    }

 	enableScan = () => {
 		Actions.scanner()
 	}

    verifyData = () => {
        const { action } = this.props
        action.verify(this.state.id, false) 
    }

	render() {

        const { initialReducer } = this.props
        const verified_data = initialReducer.verified_data

		return (
			<Container>
                <StatusBar 
                    backgroundColor="blue"
                    barStyle="light-content"/>
                <Image 
                    source={BGImage}
                    style={{
                        position: 'absolute',
                        width: null,
                        height: null,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        resizeMode: 'stretch',
                    }}/>
                <Content
                    style={{
                        paddingTop: 20
                    }}>
                    <Grid>
                        <Row
                            style={{
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                height: 200,
                                padding: 20
                            }}>
                            <Image 
                                source={MainLogoImage}
                                style={{
                                    width: 100,
                                    height: 120
                                }}
                                />
                        </Row>
                        <Row
                            style={{
                                justifyContent: 'center'
                            }}>
                            <H3
                                style={{
                                    color: 'red'
                                }}>PHILIPPINE NATIONAL POLICE</H3>
                        </Row>
                        <Row
                            style={{
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 35
                                }}>LTOPF & FA License</Text>
                        </Row>
                        <Row
                            style={{
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 25
                                }}>Verification System</Text>
                        </Row>
                        <Row
                            style={{
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                height: 40
                            }}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 12
                                }}>ENTER IDENTIFICATION NUMBER</Text>
                        </Row>
                        <Row
                            style={{
                                height: 60,
                                padding: 5,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                            <Item style={{width: 320}}>
                                <Input
                                    value={this.state.id}
                                    onChangeText={text => this.setState({id: text})}
                                    style={{
                                        color: '#000',
                                        backgroundColor: '#fff',
                                        fontSize: 25,
                                        padding: 10
                                    }}
                                    placeholder=''/>

                                <Button
                                    disabled={initialReducer.loading}
                                    style={{
                                        top: 1.5,
                                        left: -16,
                                        margin: 0,
                                        width: 50,
                                        height: 50,
                                        backgroundColor: 'transparent',
                                        alignItems: 'center'
                                    }} 
                                    onPress={this.verifyData}>
                                    <Image 
                                        source={SearchImage}
                                        style={{
                                            width: 50,
                                            height: 51,
                                        }}/>
                                </Button>
                                
                            </Item>
                        </Row>
                    </Grid>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full
                            onPress={this.enableScan}
                            style={{
                                paddingBottom: -50
                            }}>
                            <Image 
                                onPress={this.enableScan}
                                source={QRCodeImage}
                                style={{
                                    position: 'absolute',
                                    width: 90,
                                    height: 90,
                                    bottom: 30
                                }}
                            />
                            <Text
                             	>Scan Verification</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
		);
	}
}

export default connect(
    state => {
        return {
            initialReducer: state.initialReducer
        }
    },
    dispatch => {
        return {
            action: bindActionCreators(act, dispatch)
        }
    }
)(App)
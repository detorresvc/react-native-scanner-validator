import React, { Component } from 'react';
import { 
	Container, 
	Content,  
	Text, 
    Grid,
    Row,
    H3,
    H1,
    Icon
} from 'native-base';
import { Image, Dimensions, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';
const  ForbiddenImage = require('../../img/img-forbidden.png');

class InvalidLicense extends Component {

 	state = {}

 	enableScan = () => {
 		Actions.scanner()
 	}

    returnToHome = () => {
        const { is_scan } = this.props
        if(is_scan){
            return Actions.scanner()
        }
        Actions.home()
    }

	render() {

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
                        paddingTop: 20,
                    }}>
                        <Grid
                            style={{
                                margin: 10,
                                borderWidth: 2,
                                borderColor: '#ff0000'
                            }}>
                            
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    height: 300,
                                    padding: 20
                                }}>
                                <Image 
                                    source={ForbiddenImage}
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
                                <H3 style={{
                                    color: '#ff0000'
                                }}>Invalid PNP License</H3>
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center'
                                }}>
                                <Text
                                    style={{
                                        color: '#ff0000'
                                    }}>This is not a valid PNP License</Text>
                            </Row>
                            <Row
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 275,
                                    padding: 20
                                }}>
                                <Icon 
                                    onPress={this.returnToHome}
                                    name="undo"
                                    style={{
                                        fontSize: 20,
                                        color: '#fff'
                                    }}/>
                                <Text onPress={this.returnToHome}>{' '}Try Again</Text>
                            </Row>
                        </Grid>
                    </Content>
                </LinearGradient>
            </Container>
		);
	}
}

export default InvalidLicense
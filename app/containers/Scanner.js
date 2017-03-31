import React, { Component } from 'react';
import { 
	Container, 
	Footer, 
	FooterTab, 
	Button, 
	Text
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  StatusBar
} from 'react-native';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as act from '../actions';
import {Actions} from 'react-native-router-flux'

const QRCodeImage = require('../../img/qr-code.png');
const MainLogoImage = require('../../img/main-logo.png')

class App extends Component {

  state = {
    scanned: false
  }

 	onBarCodeRead = e => {
        const { action } = this.props

        if(!this.state.scanned){
            action.verify(e.data, true)
        }

        if(!this.state.scanned && e.data){
            this.setState({scanned: true})
        }        
  	}

  	backToHome = () => {
  		Actions.home()
  	}

	render() {
   
		return (
			<Container>
        <StatusBar 
                    backgroundColor="blue"
                    barStyle="light-content"/>
				<Camera
		          	ref={(cam) => {
		            	this.camera = cam;
		          	}}
		          	style={styles.preview}
		          	aspect={Camera.constants.Aspect.fill}
		          	onBarCodeRead={this.onBarCodeRead}
		          	defaultTouchToFocus />
                <Footer >
                    <FooterTab>
                        <Button
	                   		full
	                   		onPress={this.backToHome}>
                          <Image 
                            onPress={this.backToHome}
                            source={MainLogoImage}
                            style={{
                                position: 'absolute',
                                width: 100,
                                height: 100,
                                bottom: 30
                            }}
                            />
	                        <Text>Back</Text>
	                    </Button>
                    </FooterTab>
            	</Footer>
	        </Container>  	
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default connect(
    null,
    dispatch => {
        return {
            action: bindActionCreators(act, dispatch)
        }
    }
)(App)
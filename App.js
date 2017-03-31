import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './app/store';
import getTheme from './native-base-theme/components';
import pnpTheme from './native-base-theme/variables/pnpTheme';
import { StyleProvider } from 'native-base';
import {Scene, Router} from 'react-native-router-flux';

//containers
import Home from './app/containers/Home';
import Scanner from './app/containers/Scanner';
import Result from './app/containers/Result';
import InvalidLicense from './app/containers/InvalidLicense';

class Container extends Component {

 	render(){
        return (
            <Provider store={Store}>
            	<StyleProvider style={getTheme(pnpTheme)}>
            		<Router>
                        <Scene duration={1} key="home" component={Home} title="Home" hideNavBar/>
                        <Scene duration={1} key="result" component={Result} title="result" hideNavBar/>
                        <Scene duration={1} key="invalid_license" component={InvalidLicense} title="Invalid License" hideNavBar/>
            			<Scene duration={1} key="scanner" component={Scanner} title="Scanner" hideNavBar/>
            		</Router>
                </StyleProvider>
            </Provider>
        )
    }
}

export default Container
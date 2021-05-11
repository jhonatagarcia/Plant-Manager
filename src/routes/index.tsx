import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRouters from './stack.routes'

const Router = () => (
    <NavigationContainer>
        <StackRouters/>
    </NavigationContainer>
)

export default Router;
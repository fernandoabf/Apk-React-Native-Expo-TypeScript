import React from 'react';
import { GestureHandlerRootView, RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';


import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
}

export function Button({ title, ...rest } : Props){
    return(
    <GestureHandlerRootView>
        <RectButton style={styles.container} {...rest} >

            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    </GestureHandlerRootView>
    );
}
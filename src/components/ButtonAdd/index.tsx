import React from 'react'
import { GestureHandlerRootView, RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'

type Props = RectButtonProps & {
    title: string;
}
export function ButtonAdd({...rest}: RectButtonProps){
    return(
        <GestureHandlerRootView>
            <RectButton
                style={styles.container}
                {...rest}
                >
                
                <MaterialCommunityIcons 
                name="plus" 
                size={24} 
                color={theme.colors.heading}
                />

            </RectButton>
       </GestureHandlerRootView>
    )
}
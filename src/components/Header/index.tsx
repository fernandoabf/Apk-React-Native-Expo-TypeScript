import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { View, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


type Props = {
    title: string,
    action?: ReactNode
}
export function Header( {title, action}: Props ){
    
    const {secondary100, secondary40, heading} = theme.colors;
    
    const navigation = useNavigation();
    
    function handleGoBack(){
        navigation.goBack()
    }


    return(
        <LinearGradient 
        style={styles.container}
        colors={[secondary100,secondary40]}
        >
            <GestureHandlerRootView>
                <BorderlessButton onPress={handleGoBack}>
                    <Feather
                    name='arrow-left'
                    size={24}
                    color={heading}
                    
                    />
                </BorderlessButton>
            </GestureHandlerRootView>
            
            <Text style={styles.title}>
                { title }
            </Text>
            {
                action ?
                <View>
                    {action}
                </View>
                :
                <View style = {{width: 24}} />
            }
        
        
        </LinearGradient>
    )

}
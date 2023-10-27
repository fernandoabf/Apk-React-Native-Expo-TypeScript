import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView, RectButton, RectButtonProps } from 'react-native-gesture-handler';

import PlayerSvg from '../../assets/player.svg';
import CalenderSvg from '../../assets/calendar.svg'
import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';
import { GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';



export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}


type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({data, ...rest}: Props){

    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on, secondary50, secondary70 } = theme.colors;

    return(
        <GestureHandlerRootView>
            <RectButton 
            {...rest}
            >
                <View style={styles.container}>
                    <LinearGradient
                    style = {styles.guildIconContainer}
                    colors={[secondary50, secondary70]}
                    >
                        <GuildIcon/>
                    </LinearGradient>

                    <View style={styles.content}>
                        <View style = {styles.header}>
                            <Text style = {styles.title}>
                                {data.guild.name}
                            </Text>

                            <Text style = {styles.category}>
                                { category.title }
                            </Text>
                        </View>

                        <View style= {styles.footer}> 
                            <View style = {styles.dateInfo}>
                                <CalenderSvg />

                                <Text style={styles.date}>
                                    { data.date }
                                </Text>
                            </View>
                        
                    
                            <View style = {styles.playerInfo}>
                                <PlayerSvg fill = {owner ? primary : on}/>

                                <Text 
                                style = {[styles.player, {color: owner ? primary : on}]}
                                >
                                    {owner ? 'Anfitrião' : 'Visitante'}
                                </Text>
                            </View>
                        </View>
                    
                    </View>
                </View>
            </RectButton>
        </GestureHandlerRootView>
    )

}
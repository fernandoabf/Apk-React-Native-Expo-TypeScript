import React from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './styles'

import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider/indes'

type Props= {
    handleGuildSelect: (guild: GuildProps) => void;
}
export function Guilds({handleGuildSelect}: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true

        },
        {
            id: '2',
            name: 'Teste',
            icon: 'image.png',
            owner: true

        }
    
    ]
    return(
        <View style={styles.container}>
            <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Guild 
                data={item}
                onPress={() => handleGuildSelect(item)}
                />
            )}
            showsVerticalScrollIndicator ={false}
            contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            ListHeaderComponent={() => <ListDivider isCentered/>}
            style={styles.guilds}
            />
            
        </View>
    )

}
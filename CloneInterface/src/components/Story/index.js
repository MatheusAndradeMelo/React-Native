import React from 'react';

import { Container, ContainerHeader, GroupLabel ,Label, ContainerScrollStory, ContainerItemStory, ContainerPhoto, Photo, Name } from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';

import photo from '../../../assets/agostinho.png'

import storys from './storys.json'
const Story = () => {

    return(
        <Container>
            <ContainerHeader>
                <Label>Story</Label>
                <GroupLabel>
                    <Icon name="caret-right" size={20} />
                    <Label>Watch all</Label>
                </GroupLabel>
            </ContainerHeader>

            <ContainerScrollStory>
                { storys && storys.map((story, index) => (

                <ContainerItemStory key={index}>
                    <ContainerPhoto>
                        <Photo source={{ uri: story.photo }}/>
                    </ContainerPhoto>
                    <Name>{story.name}</Name>
                </ContainerItemStory>

                )) }

                
            </ContainerScrollStory>
        </Container>
    )
};

export default Story
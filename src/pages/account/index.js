import {
    Container,
    Content,
    Button,
    ListItem,
    Text,
    Icon,
    Left,
    Body,
} from 'native-base';
import React from 'react';

function index() {
    return (
        <Container>
            <Content>
                <ListItem icon>
                    <Left>
                        <Button>
                            <Icon active type="FontAwesome5" name="id-card" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>PROFILE</Text>
                    </Body>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button>
                            <Icon active type="FontAwesome5" name="info" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>ABOUT</Text>
                    </Body>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button>
                            <Icon
                                active
                                type="FontAwesome5"
                                name="sign-out-alt"
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Keluar</Text>
                    </Body>
                </ListItem>
            </Content>
        </Container>
    );
}

export default index;

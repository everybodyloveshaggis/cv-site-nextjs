import React from 'react'

import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    senderMessage: string;
    senderEmail: string;
};

export default function ContactFormEmail({ senderMessage, senderEmail }: ContactFormEmailProps) {
    console.log(<Heading as='h2'>
                            You received the following message from the contact form
                        </Heading>);
    console.log(<Text>{senderMessage}</Text>);
    return (<Html lang='en'>
        <Head />
        <Preview>New Message From Your Portfolio</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading as='h2'>
                            You received the following message from the contact form
                        </Heading>
                        <Text>{senderMessage}</Text>
                        <Hr />
                        <Text>The sender's email is {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
    )
}

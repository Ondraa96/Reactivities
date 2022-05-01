import React from 'react';
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

interface Props {
    inverted?: boolean;
    content?: string;
}

export default function Loader({ content = 'Loading...', inverted = true }: Props) {
    return (
        <Dimmer active={true} inverted={inverted} >
            <SemanticLoader content={content} />
        </Dimmer>
    );
}
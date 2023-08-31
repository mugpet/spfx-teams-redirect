import * as React from 'react';
import { ISpfxTeamsRedirectProps } from './ISpfxTeamsRedirectProps';

const SpfxTeamsRedirect: React.FC<ISpfxTeamsRedirectProps> = (props) => {

    React.useEffect(() => {
        window.location.href = "https://google.com";
    }, []);

    return (
        <div>
            Redirecting...
        </div>
    );
}

export default SpfxTeamsRedirect;

import React from 'react';
import EditMeme from '../components/EditMeme';
import CustomBreadcrumb from '../components/layout/CustomBreadcrumb';


function MemeEditPage(props) {
    const meme = props.location.state;
    return (meme !== undefined ? (
        <div>
            <CustomBreadcrumb memeName={meme.meme.name} />
            <EditMeme meme={meme.meme} />
        </div>
        ) : ( <div>
            <CustomBreadcrumb memeName={meme.meme.name} />
            <EditMeme meme={meme.meme} />
        </div>)
    )
}

export default MemeEditPage;

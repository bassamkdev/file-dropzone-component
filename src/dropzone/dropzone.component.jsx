import React from 'react';

import {
    DropzoneContainer,
    IconContainer,
    FileInput
} from './dropzone.styles'

const Dropzone = ({onFilesRecieved}) => {

    const fileInputRef = React.createRef();

    const [dropzoneStatus, setDropzoneStatus] = React.useState({disabled: false});

    const {disabled} = dropzoneStatus

    const openFileDialog = () => {
        if (disabled) return;
        fileInputRef.current.click()
    }

    const onFilesAdded = event => {
        if (disabled) return;
        const files = event.target.files;
        const filesArray = fileListToArray(files);
        onFilesRecieved(filesArray);
    }

    const fileListToArray = list => {
        return Object.keys(list).map(key => list[key])
    }

    return(
        <DropzoneContainer>
            <IconContainer alt='upload' src='/cloud-upload.svg' disabled={disabled}
                onClick={openFileDialog}
            />
            <FileInput 
                ref={fileInputRef}
                type='file'
                multiple
                onChange={onFilesAdded}
            />
            <span>Upload Files</span>
        </DropzoneContainer>
    )
}

export default Dropzone;
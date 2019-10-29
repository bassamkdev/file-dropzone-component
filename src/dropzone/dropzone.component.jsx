import React from 'react';

import {
    DropzoneContainer,
    IconContainer,
    FileInput
} from './dropzone.styles'

const Dropzone = ({onFilesRecieved, disabled}) => {

    const fileInputRef = React.createRef();

    const [dropzoneStatus, setDropzoneStatus] = React.useState({
        highlight: false
    });

    const {highlight} = dropzoneStatus

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

    const onDragOver = (event) => {
        event.preventDefault();
        if (disabled) return
        setDropzoneStatus({...dropzoneStatus, highlight: true})
    }

    const onDragLeave = () => {
        setDropzoneStatus({...dropzoneStatus, highlight: false})
    }

    const onDrop = (event) => {
        event.preventDefault();
        if (disabled) return;
        const files = event.dataTransfer.files;
        const filesArray = fileListToArray(files);
        onFilesRecieved(filesArray);
        setDropzoneStatus({...dropzoneStatus, highlight: false})
    }

    return(
        <DropzoneContainer
            onClick={openFileDialog}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            disabled={disabled}
            highlight={highlight}
        >
            <FileInput 
                ref={fileInputRef}
                type='file'
                multiple
                onChange={onFilesAdded}
            />
            <IconContainer alt='upload' src='/cloud-upload.svg' highlight={highlight} />
            <span>Upload Files</span>
        </DropzoneContainer>
    )
}

export default Dropzone;
import {useEffect, useRef} from 'react'; 

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widegetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;

        widegetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'denmhkyxq',
            uploadPreset: 'xxxgbh6u'
        }, function(error, result) {
            console.log(result)
        })
    }, [])

    return (
        <button onClick={() => widegetRef.current.open()}>
            Upload
        </button>
    )

}

export default UploadWidget;
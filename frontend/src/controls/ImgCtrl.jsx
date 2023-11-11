import React, { useEffect, useState } from 'react';
import { onDownloadImage } from '../api';
import { getCache, saveCache } from '../utils';

export default function ImgCtrl({ url, imgData, imgWidth}) {


    const [imgSrc, setImgSrc] = useState();

    //  const [imgHight, setImgHeight] = useState(imgRef.current.naturalHeight);

    function getImage() {
        onDownloadImage(url).then(data => {
            var imageData = window.URL.createObjectURL(data);
            setImgSrc(imageData);

        })

    }

    useEffect(() => {

        if (url) {
            getImage();
        }
        
    }, []);




    return (

        <img src={url ? imgSrc : imgData}

            width={imgWidth}


        />

    )
}




import { onDownloadImage } from "../api";
import ImgCtrl from "./ImgCtrl"


export default function Diagnosis({ url}) {


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

        <ImgCtrl url={url}
        imgData={null}
        imgWidth={getImageWidth(500)}
        ></ImgCtrl>

    )
}





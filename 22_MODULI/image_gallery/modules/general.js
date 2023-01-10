let generateImage = src => {
    let img = document.createElement("img");
    img.src = src;
    img.alt = "Image cannot be loaded";
    return img;
} 

export default generateImage;
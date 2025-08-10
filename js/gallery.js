const images = document.querySelectorAll(".tile");
const imagesArray = Array.from(images);
const rotations = [];
const buttons = document.querySelectorAll("button");
const params = {
    translateZ: "400px"
}

imagesArray.forEach((image, index, imagesArray) => {
    rotations.push(index*360/imagesArray.length)
    image.style.transform= "rotateY("+rotations[index]+"deg) translateZ("+params.translateZ+")";
    image.style.opacity = setOpacity(rotations[index]);
});

function updateRotations(imagesArray, rotationsArray, amt) {
    imagesArray.forEach((image, index) => {
        rotationsArray[index] += amt;
        image.style.transform= "rotateY("+rotationsArray[index]+"deg) translateZ("+params.translateZ+")";
        image.style.opacity = setOpacity(rotationsArray[index]);
    });
}

function setOpacity(rotation) {
    let equivalentRot = rotation;
    if (rotation%360 < 0) {
        equivalentRot = rotation%360+360;
    }
    else {
        equivalentRot = rotation%360;
    }
    if (equivalentRot>90 && equivalentRot<270) {
        return 0.5;
    }
    else {
        return 1.0;
    }
}

function seePrev() {
    updateRotations(imagesArray, rotations, 360/imagesArray.length);
}

function seeNext() {
    updateRotations(imagesArray, rotations, -360/imagesArray.length);
}

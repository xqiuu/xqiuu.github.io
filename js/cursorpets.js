//initialize pet state
let pet = document.querySelector(".stationarypet");
let isClicked = false;
pet.addEventListener("click", () => {petSwitch();});
gsap.set(pet, {xPercent: -50, yPercent: -50});

//get dimensions
let dimensions = document.querySelector(".box").getBoundingClientRect();
let petDimensions = pet.getBoundingClientRect();

//pet follows cursor
function follow(event) {
    
    /*let xTo = gsap.pipe(
        gsap.utils.clamp(
            (dimensions.left+petDimensions.width/2),
            (dimensions.right - petDimensions.width/2),
        ),
        quickTo(pet, "x", {duration: 0.6, ease: "power3"})
    );
    let yTo = gsap.pipe(
        gsap.utils.clamp(
            (dimensions.top+petDimensions.height/2),
            (dimensions.bottom - petDimensions.height/2),
        ),
        quickTo(pet, "y", {duration: 0.6, ease: "power3"})
    );*/
    let xTo = quickTo(pet, "x", {duration: 0.6, ease: "power3"}),
        yTo = quickTo(pet, "y", {duration: 0.6, ease: "power3"});
    xTo(event.clientX); 
    yTo(event.clientY);
}

//switch pet from stationary to moving
function petSwitch() {
    if (!isClicked) {
        pet.classList.remove("stationarypet");
        pet.classList.add("pet");

        window.addEventListener("mousemove", follow);
        
        isClicked = true;    
    }
    else if (isClicked) {
        pet.classList.remove("pet");
        pet.classList.add("stationarypet");
        window.removeEventListener("mousemove", follow);
        isClicked = false;
    }
}
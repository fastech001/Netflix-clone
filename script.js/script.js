//navbar css property in scroll
window.addEventListener ("scroll", ()=>(
    'const',navbar= document.querySelector(".navbar"),
    if(window.scrollY>100)(
        navbar.classlist.add("scrolled")
    )
     else(
        navbar.classlist.remove("scrolled")
)));

//profile secton redirecting
const profileicon=document.querySelector(".profile-icon")
profileicon.addEventListener("click",()=>(
    window .location .href="profile.html"
));
//content-card
const moviecard = document.querySelectorAll(".movie-card");
moviecard.forEach("card")=''>(
    card.addEventListener("mouseenter",(
        card.style.transform ="scale(1.05)"
    ))
);
 card.addEventListener("mouseleave",(
        card.style.transform ="scale(1)"));
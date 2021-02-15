const darkModeButton = document.getElementById("dark");
const header = document.getElementById("header");
const link = document.getElementById("link")
const logotext = document.getElementById("logotext")
const about = document.getElementById("about")
const abouthead = document.getElementById("abouthead")
const team = document.getElementById("team")
const teamhead = document.getElementById("teamhead")
const teamcontainer = document.getElementById("teamcontainer1")
const teamcontainer2 = document.getElementById("teamcontainer2")
const teamcontainer3 = document.getElementById("teamcontainer3")
const python = document.getElementById("python")
const footer = document.getElementById("footer")
const footertext = document.getElementById("footertext")
const footercopy = document.getElementById("footercopy")

if(darkModeButton){
    darkModeButton.addEventListener('click', swapper, false);
  }


function swapper(){
    if (header.classList.contains("dark-mode")){
        darkModeButton.innerHTML = "Light Mode"
        header.classList.remove("dark-mode");
        link.classList.remove("dark-mode");
        logotext.classList.remove("dark-mode");
        document.querySelector(".svgClass").getSVGDocument().getElementById("path").setAttribute("fill", "red")
        document.querySelector(".github").getSVGDocument().getElementById("path").setAttribute("fill", "#9CA3AF")
        about.classList.remove("dark-mode-odd")
        abouthead.style.color = "white"
        team.classList.remove("dark-mode");
        teamhead.style.color = "white"

        teamcontainer.style.backgroundColor = "transparent"
        teamcontainer2.style.backgroundColor = "transparent"
        teamcontainer3.style.backgroundColor = "transparent"

        python.style.filter = "drop-shadow(0px 0px 0px)"
        python.style.transform = "scale(1)"
        footer.classList.remove("dark-mode-odd")

        footertext.style.color = "white"
    }else{
        darkModeButton.innerHTML = "Dark Mode"
        header.classList.add("dark-mode");
        logotext.classList.add("dark-mode");
        document.querySelector(".svgClass").getSVGDocument().getElementById("path").setAttribute("fill", "black")
        document.querySelector(".github").getSVGDocument().getElementById("path").setAttribute("fill", "black")
        about.classList.add("dark-mode-odd")
        abouthead.style.color = "black"
        team.classList.add("dark-mode");
        teamhead.style.color = "black";

        teamcontainer.style.backgroundColor = "#1F2937"
        teamcontainer.style.borderRadius = "10px"
        teamcontainer.style.padding = "5px"
        teamcontainer2.style.backgroundColor = "#1F2937"
        teamcontainer2.style.borderRadius = "10px"
        teamcontainer3.style.backgroundColor = "#1F2937"
        teamcontainer3.style.borderRadius = "10px"

        python.style.transform = "scale(1.05)"
        python.style.filter = "drop-shadow(0px 0px 50px)"
        footer.classList.add("dark-mode-odd")
        document.querySelector("#footer").getElementsByTagName("span").style.color = "black"
        
        footertext.style.color = "black"
        
        link.classList.add("dark-mode");
    }

    
}

//this function is going to be replaced by the user class
function isUserLogedIn() {
    return (true);
}


class navigationHandler {
    constructor() {
        this.anchors = document.querySelectorAll("a");

        this.initiate();
    }

    isDashboardSection(sectionId) {
        let chosenSection = document.querySelector(`.section[data-section="${sectionId}"]`);
    
        if (chosenSection)
            return (chosenSection.parentElement.id == "dash-sections");
    
        return (false);
    }

    showSection(sectionId) {
        const sections = document.querySelectorAll(".section");
        const navbar = document.querySelectorAll("nav li");
        let parentSection = document.getElementById("auth-sections");
        let sectionToShow = document.getElementById(sectionId);

        navbar.forEach(nav => nav.classList.remove("nav-active"));
        sections.forEach(section => section.classList.add("hidden"));
    
        if (this.isDashboardSection(sectionId))
        {
            parentSection = document.getElementById("dash-sections");
            document.querySelector(`nav li[data-section="${sectionId}"]`).classList.toggle("nav-active");
        }
        
        if (sectionToShow) {
            parentSection.classList.toggle("hidden");
            sectionToShow.classList.toggle("hidden");
        }
    }

    addBrowserHistory(target) {
        if (location.pathname != target)
            window.history.pushState({}, "", target);
    }

    eventHandler(event) {
        const targetAnchor = event.target.closest("a");
        const targetHref = targetAnchor.getAttribute("href");

        event.preventDefault();
        this.redirect(targetHref);
    }

    redirect(target) {
        let sectionId = target.substr(1);
        let loginStatus = isUserLogedIn();

        if (!sectionId.length || (!loginStatus && this.isDashboardSection(sectionId))) {
            sectionId = "login";
            target = "/login";
        }
        if (loginStatus && !this.isDashboardSection(sectionId)) {
            sectionId = "home";
            target = "/home"
        }

        this.showSection(sectionId);
        this.addBrowserHistory(target);
    }

    initiate() {
        this.anchors.forEach(anchor => {
            anchor.addEventListener("click", this.eventHandler.bind(this));
            window.addEventListener("popstate", _ => this.redirect(location.pathname));
            document.addEventListener("DOMContentLoaded", _ => this.redirect(location.pathname));
        })
    }
}



const navigation = new navigationHandler();

// Add event listener for logout
document.getElementById('logout-link').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Clear any authentication data from localStorage
    localStorage.removeItem('userAuthenticated');
    // Add any other data that needs to be cleared
    
    // Redirect to login page
    window.location.href = '/www/login.html';
});
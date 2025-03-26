//this function is going to be replaced by the user class
function isUserLogedIn() {
    return (true);
}


class navigationHandler {
    constructor() {
        this.anchors = document.querySelectorAll("a");
        this.messageButtons = document.querySelectorAll('.action-btn[title="Message"]');

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

    initMessageButtons() {
        this.messageButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Navigate to chat section
                this.redirect("/chat");
            });
        });
    }

    initiate() {
        this.anchors.forEach(anchor => {
            anchor.addEventListener("click", this.eventHandler.bind(this));
        });
        
        // Move these event listeners outside the forEach loop
        window.addEventListener("popstate", _ => this.redirect(location.pathname));
        document.addEventListener("DOMContentLoaded", _ => this.redirect(location.pathname));
        
        // Initialize message buttons
        this.initMessageButtons();
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

document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';

    const extendedMenu = document.createElement('div');
    extendedMenu.className = 'mobile-extended-menu';
    extendedMenu.innerHTML = `
        <div class="menu-section games-section">
            <h3>Games</h3>
            <ul>
                <li data-section="pong">
                    <a href="#" data-href="/pong"><i class="fa-solid fa-table-tennis-paddle-ball"></i>Ping Pong</a>
                </li>
                <li data-section="tictac">
                    <a href="#" data-href="/tictac"><i class="fa-solid fa-xmark"></i>Tic Tac Toe</a>
                </li>
            </ul>
        </div>
        <div class="menu-section settings-section">
            <h3>Settings</h3>
            <ul>
                <li data-section="profile">
                    <a href="#" data-href="/profile"><i class="fa-solid fa-circle-info"></i>Profile</a>
                </li>
                <li data-section="about">
                    <a href="#" data-href="/about"><i class="fa-solid fa-circle-info"></i>About Us</a>
                </li>
                <li data-section="settings">
                    <a href="#" data-href="/settings"><i class="fa-solid fa-gear"></i>Settings</a>
                </li>
                <li data-section="logout">
                    <a href="#" id="mobile-logout-link"><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
                </li>
            </ul>
        </div>
    `;

    // Add elements to the body
    document.body.appendChild(mobileMenuButton);
    document.body.appendChild(overlay);
    document.body.appendChild(extendedMenu);

    // Toggle menu functionality
    mobileMenuButton.addEventListener('click', function() {
        overlay.classList.add('active');
        extendedMenu.classList.add('active');
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        overlay.classList.remove('active');
        extendedMenu.classList.remove('active');
    });

    // Handle mobile menu navigation
    extendedMenu.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.dataset.href) {
            e.preventDefault();
            navigation.redirect(link.dataset.href);
            // Close the menu after navigation
            overlay.classList.remove('active');
            extendedMenu.classList.remove('active');
        }
    });

    // Handle mobile logout
    document.getElementById('mobile-logout-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('userAuthenticated');
        window.location.href = '/www/login.html';
    });
});

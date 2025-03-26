//----------------------------------fetch data----------------------------------
const gamesPlayedValue = 0;
const winsValue = 0;
const lossesValue = 0;
const totalFriendsValue = 0;
const onlineNowValue = 0;
const currentlyPlayingValue = 0;
const pendingRequestsValue = 0;
const usernameValue = "Hamza";
const userIdValue = "431258";
const contactNameValue = "Player11";
const newActivity = [
    {
        player1: 'nouri',
        player2: 'riyaho',
        game: 'Ping Pong',
        time: '2 hours ago',
        icon: 'fa-solid fa-trophy'
    },
    {
        player1: 'hmida',
        player2: 'stayka',
        game: 'Ping Pong',
        time: '12 hours ago',
        icon: 'fa-solid fa-trophy'
    },
    {
        player1: 'mol lbala',
        player2: 'traktour',
        game: 'Ping Pong',
        time: '2 hours ago',
        icon: 'fa-solid fa-trophy'
    }
];


//----------------------------------Home Page----------------------------------
// Select all the stat elements
const lossesCard = document.querySelector('.card-value[data-losses]');
const winsCard = document.querySelector('.card-value[data-wins]');
const gamesCard = document.querySelector('.card-value[data-games]');

// Update losses
lossesCard.textContent = lossesValue; 
lossesCard.setAttribute('data-losses', lossesValue);

// Update wins
winsCard.textContent = winsValue; 
winsCard.setAttribute('data-wins', winsValue);

// Update total games
gamesCard.textContent = gamesPlayedValue; 
gamesCard.setAttribute('data-games', gamesPlayedValue);

function createActivityItemHome(data) {
    // Create the list item
    const li = document.createElement('li');
    
    // Create the trophy icon
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-trophy';
    
    // Create the paragraph with the activity info
    const p = document.createElement('p');
    p.innerHTML = `<strong>${data.player1}</strong> won against <strong>${data.player2}</strong> in <strong>${data.game}</strong>.`;
    
    // Create the time span
    const timeSpan = document.createElement('span');
    timeSpan.className = 'activity-time';
    timeSpan.textContent = data.time;
    
    // Append all elements to the list item
    li.appendChild(icon);
    li.appendChild(p);
    li.appendChild(timeSpan);
    
    return li;
}

// Example usage:
const activityList = document.querySelector('.activity-list');


// Add activities to the list
newActivity.forEach(activity => {
    activityList.prepend(createActivityItemHome(activity));
});
//----------------------------------Friends Page----------------------------------

// Select all stat values
const totalFriends = document.querySelector('.stat-card:has(.fa-users) .stat-value');
const onlineNow = document.querySelector('.stat-card:has(.fa-circle-dot) .stat-value');
const currentlyPlaying = document.querySelector('.stat-card:has(.fa-gamepad) .stat-value');
const pendingRequests = document.querySelector('.stat-card:has(.fa-user-plus) .stat-value');

// Update the values
totalFriends.textContent = totalFriendsValue; 
onlineNow.textContent = onlineNowValue;    
currentlyPlaying.textContent = currentlyPlayingValue; 
pendingRequests.textContent = pendingRequestsValue;   

//----------------------------------Profile Page----------------------------------

// Select the profile elements

const followButton = document.querySelector('.profile-buttons .btn:first-child');
const contactButton = document.querySelector('.profile-buttons .btn:last-child');
const profileUsername = document.getElementById('mini-profile-username');
const mainProfileUsername = document.getElementById('main-profile-username');

profileUsername.innerHTML = `${usernameValue}<span data-mini-profile-id> id: ${userIdValue}</span>`;
mainProfileUsername.innerHTML = `${usernameValue}<span data-main-profile-id> id: ${userIdValue}</span>`;

// Add event listeners to buttons
followButton.addEventListener('click', () => {
    // Add your follow logic here
    console.log('Follow button clicked');
    followButton.textContent = followButton.textContent === 'follow' ? 'unfollow' : 'follow';
});

contactButton.addEventListener('click', () => {
    // Add your contact logic here
    console.log('Get in touch button clicked');
    // For example, redirect to chat or message section
});

const userGames = document.querySelector('.card-value[data-user-games]');
const userWins = document.querySelector('.card-value[data-user-wins]');
const userLosses = document.querySelector('.card-value[data-user-losses]');

// Update the stats
userGames.textContent = gamesPlayedValue;    
userGames.setAttribute('data-user-games', gamesPlayedValue);

userWins.textContent = winsValue;     
userWins.setAttribute('data-user-wins', winsValue);

userLosses.textContent = lossesValue;   
userLosses.setAttribute('data-user-losses', lossesValue);

// Profile Activity List
const profileActivityList = document.getElementById('activity-list-profile');
if (profileActivityList) {
    const activities = newActivity;
 

    activities.forEach(activity => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid ${activity.icon}"></i>
            <p>won a game of <strong>${activity.game}</strong> against <strong>${activity.player2}</strong>.</p><span class="activity-time">${activity.time}</span>`;
        profileActivityList.appendChild(li);
    });
}

//----------------------------------Games Page----------------------------------

// Select the game elements
const gameList = document.querySelector('.game-list');
const gameCards = document.querySelectorAll('.game-card');

// Update the game cards
gameCards.forEach(card => {
    card.querySelector('.game-name').textContent = 'Ping Pong';
    card.querySelector('.game-icon').classList.add('fa-solid', 'fa-table-tennis-paddle-ball');
});

//----------------------------------Chat Page----------------------------------
// Chat functionality
const chatContainer = document.querySelector('.chat-container');
if (chatContainer) {
    // Sample chat data
    const chatData = {
        currentUser: {
            name: usernameValue,
            avatar: './assets/imgs/dog-and-hitler.jpg'
        },
        contacts: [
            {
                name: contactNameValue,
                status: 'Online',
                avatar: './assets/imgs/dog-and-hitler.jpg',
                messages: [
                    { text: 'hen a khona', time: '10:30 AM', sent: false },
                    { text: 't9eser chi ta7 nedrebha lik ? 🏓', time: '10:31 AM', sent: true },
                    { text: 'gad room o aji nchofo chkn ghadi idrebha l lakhor', time: '10:31 AM', sent: false }
                ]
            }
        ]
    };

    // Select chat elements
    const messageList = chatContainer.querySelector('.chat-messages');
    const messageInput = chatContainer.querySelector('.message-input');
    const sendButton = chatContainer.querySelector('.send-button');
    const contactName = chatContainer.querySelector('.contact-name');
    const contactAvatar = chatContainer.querySelector('.contact-avatar img');

    // Update contact name and avatar
    contactName.textContent = contactNameValue;
    contactAvatar.src = chatData.contacts[0].avatar;

    // Function to create a message element
    function createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sent ? 'sent' : 'received'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message.text;
        
        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = message.time;
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        
        return messageDiv;
    }

    // Display existing messages
    chatData.contacts[0].messages.forEach(message => {
        messageList.appendChild(createMessageElement(message));
    });

    // Handle sending new messages
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const newMessage = {
                text: messageText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sent: true
            };
            
            messageList.appendChild(createMessageElement(newMessage));
            messageInput.value = '';
            messageList.scrollTop = messageList.scrollHeight;
        }
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}
//----------------------------------Settings Page----------------------------------
// Settings functionality
const settingsSection = document.querySelector('#settings');
if (settingsSection) {
    // Profile Settings Form
    const profileSettingsForm = document.getElementById('profile-settings-form');
    const settingsUsername = document.getElementById('settings-username');
    const settingsEmail = document.getElementById('settings-Email');
    const settings2FA = document.getElementById('settings-2fa');
    const settingsPicture = document.getElementById('settings-picture');
    const profileImg = document.querySelector('[data-profile-img]');

    // Set initial values
    settingsUsername.value = usernameValue;
    settingsEmail.value = `${usernameValue.toLowerCase()}@gmail.com`;

    // Handle profile picture change
    settingsPicture.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImg.src = e.target.result;
                // Update all profile images on the page
                document.querySelectorAll('[data-profile-img]').forEach(img => {
                    img.src = e.target.result;
                });
            };
            reader.readAsDataURL(file);
        }
    });

    // Username input validation
    settingsUsername.addEventListener('input', (e) => {
        const username = e.target.value;
        if (username.length < 5) {
            e.target.setCustomValidity('Username must be at least 5 characters long');
        } else if (username.length > 15) {
            e.target.setCustomValidity('Username must be less than 15 characters');
        } else {
            e.target.setCustomValidity('');
        }
    });

    // Email input validation
    settingsEmail.addEventListener('input', (e) => {
        const email = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.target.setCustomValidity('Please enter a valid email address');
        } else {
            e.target.setCustomValidity('');
        }
    });

    // 2FA toggle listener
    settings2FA.addEventListener('change', (e) => {
        if (e.target.checked) {
            alert('Two-factor authentication will be enabled. You will need to set up your 2FA method.');
        } else {
            alert('Two-factor authentication will be disabled. Your account will be less secure.');
        }
    });

    // Handle profile settings form submission
    profileSettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (profileSettingsForm.checkValidity()) {
            console.log('Profile settings updated:', {
                username: settingsUsername.value,
                email: settingsEmail.value,
                twoFA: settings2FA.checked
            });
            alert('Profile settings updated successfully!');
        }
    });

    // Privacy Settings Form
    const privacySettingsForm = document.getElementById('privacy-settings-form');
    const currentPassword = document.getElementById('current-password');
    const newPassword = document.getElementById('new-password');
    const profileVisibility = document.getElementById('profile-visibility');
    const activityVisibility = document.getElementById('activity-visibility');

    // Password validation
    newPassword.addEventListener('input', (e) => {
        const password = e.target.value;
        if (password.length < 8) {
            e.target.setCustomValidity('Password must be at least 8 characters long');
        } 
        else if (password.length > 15) {
            e.target.setCustomValidity('Password must be less than 15 characters');
        }
        else {
            e.target.setCustomValidity('');
        }
    });

    // Current password validation
    currentPassword.addEventListener('input', (e) => {
        if (currentPassword.value != 'password') {
            e.target.setCustomValidity('Password is incorrect');
        }
        else if (newPassword.value && !e.target.value) {
            e.target.setCustomValidity('Please enter your current password');
        } 
        else {
            e.target.setCustomValidity('');
        }
    });

    // Visibility change listeners
    profileVisibility.addEventListener('change', (e) => {
        console.log('Profile visibility changed to:', e.target.value);
    });

    activityVisibility.addEventListener('change', (e) => {
        console.log('Activity visibility changed to:', e.target.value);
    });

    // Handle privacy settings form submission
    privacySettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (privacySettingsForm.checkValidity()) {
            console.log('Privacy settings updated:', {
                profileVisibility: profileVisibility.value,
                activityVisibility: activityVisibility.value
            });
            alert('Privacy settings updated successfully!');
        }
    });

    // Danger Zone Actions
    const deleteAccountBtn = document.getElementById('delete-account-btn');
    const deleteHistoryBtn = document.getElementById('delete-history-btn');

    // Handle account deletion
    deleteAccountBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            console.log('Account deletion requested');
            alert('Account deletion request submitted. Please check your email for confirmation.');
        }
    });

    // Handle history deletion
    deleteHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete your history? This action cannot be undone.')) {
            console.log('History deletion requested');
            alert('History deletion request submitted. Please check your email for confirmation.');
        }
    });
}

//----------------------------------Leaderboard Page----------------------------------
const leaderboardSection = document.querySelector('#leaderboard');
if (leaderboardSection) {
    // Sample player data with timestamps
    const players = [
        {
            id: 1,
            name: "Player1",
            avatar: "./assets/imgs/dog-and-hitler.jpg",
            points: 2500,
            wins: 150,
            losses: 30,
            status: "Online",
            lastActive: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000), // 50 days ago
            trend: { direction: "up", value: 2 }
        },
        {
            id: 2,
            name: "Player2",
            avatar: "./assets/imgs/dog-and-hitler.jpg",
            points: 2350,
            wins: 140,
            losses: 35,
            status: "Offline",
            lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
            trend: { direction: "down", value: 1 }
        },
        {
            id: 3,
            name: "Player3",
            avatar: "./assets/imgs/dog-and-hitler.jpg",
            points: 2200,
            wins: 130,
            losses: 40,
            status: "Online",
            lastActive: new Date(),
            trend: { direction: "up", value: 3 }
        },
        {
            id: 4,
            name: "Player4",
            avatar: "./assets/imgs/dog-and-hitler.jpg",
            points: 2100,
            wins: 125,
            losses: 38,
            status: "Online",
            lastActive: new Date(),
            trend: { direction: "up", value: 1 }
        },
        {
            id: 5,
            name: "Player5",
            avatar: "./assets/imgs/dog-and-hitler.jpg",
            points: 2000,
            wins: 120,
            losses: 36,
            status: "Offline",
            lastActive: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000), // 50 days ago
            trend: { direction: "down", value: 2 }
        }
    ];

    // Select DOM elements
    const filterButtons = leaderboardSection.querySelectorAll('.filter-button');
    const leaderboardTable = leaderboardSection.querySelector('.leaderboard-table tbody');
    const statCards = leaderboardSection.querySelectorAll('.stat-card');

    // Time filter functions
    const timeFilters = {
        alltime: () => true,
        thismonth: player => {
            const now = new Date();
            const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
            return player.lastActive >= monthAgo;
        },
        thisweek: player => {
            const now = new Date();
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            return player.lastActive >= weekAgo;
        },
        today: player => {
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            return player.lastActive >= today;
        }
    };

    // Create player row in leaderboard
    function createPlayerRow(player, rank) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="rank">#${rank}</td>
            <td>
                <div class="player-cell">
                    <div class="player-avatar">
                        <img src="${player.avatar}" alt="${player.name}'s avatar">
                    </div>
                    <div class="player-info">
                        <span class="player-name">${player.name}</span>
                        <span class="player-status ${player.status.toLowerCase()}">${player.status}</span>
                    </div>
                </div>
            </td>
            <td>${player.points}</td>
            <td>${player.wins}</td>
            <td>${player.losses}</td>
            <td>${((player.wins / (player.wins + player.losses)) * 100).toFixed(1)}%</td>
            <td>
                <div class="trend trend-${player.trend.direction}">
                    <i class="fas fa-arrow-${player.trend.direction}"></i>
                    <span>${player.trend.value}</span>
                </div>
            </td>
        `;
        return row;
    }

    // Update leaderboard based on time filter
    function updateLeaderboard(timeFrame) {
        // Clear current leaderboard
        leaderboardTable.innerHTML = '';

        // Filter and sort players
        const filteredPlayers = players
            .filter(timeFilters[timeFrame])
            .sort((a, b) => b.points - a.points);

        // Add players to leaderboard
        filteredPlayers.forEach((player, index) => {
            leaderboardTable.appendChild(createPlayerRow(player, index + 1));
        });

        // Update stats
        updateStats(filteredPlayers);
    }

    // Update statistics
    function updateStats(filteredPlayers) {
        // Fixed base values for different time periods
        const timeFrameStats = {
            alltime: {
                totalGames: 15789,
                activePlayers: 1234,
                highestScore: 9999
            },
            thismonth: {
                totalGames: 5432,
                activePlayers: 789,
                highestScore: 8500
            },
            thisweek: {
                totalGames: 1234,
                activePlayers: 456,
                highestScore: 7800
            },
            today: {
                totalGames: 234,
                activePlayers: 123,
                highestScore: 6500
            }
        };

        // Get current time frame from active button
        const currentTimeFrame = document.querySelector('.filter-button.active')
            .textContent.toLowerCase().replace(' ', '');

        // Get stats for current time frame
        const currentStats = timeFrameStats[currentTimeFrame];

        // Calculate tournaments based on total games (1 tournament per 50 games)
        const tournamentsCompleted = Math.floor(currentStats.totalGames / 50);

        // Update stat cards with fixed values
        statCards[0].querySelector('.stat-value').textContent = currentStats.totalGames.toLocaleString();
        statCards[1].querySelector('.stat-value').textContent = currentStats.activePlayers.toLocaleString();
        statCards[2].querySelector('.stat-value').textContent = tournamentsCompleted;
        statCards[3].querySelector('.stat-value').textContent = currentStats.highestScore.toLocaleString();
    }

    // Add click handlers to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update leaderboard
            const timeFrame = button.textContent.toLowerCase().replace(' ', '');
            updateLeaderboard(timeFrame);
        });
    });

    // Initialize with "All Time" data
    updateLeaderboard('alltime');
}

//----------------------------------Tournament Page----------------------------------
const tournamentSection = document.querySelector('#tournament');
if (tournamentSection) {
    // Sample tournament data
    let tournaments = [
        {
            id: 1,
            name: "Ping Pong Championship",
            status: "Registration Open",
            currentPlayers: 12,
            maxPlayers: 16,
            startsIn: "2 hours",
            gameType: "pong",
            startDate: "2024-03-20",
            startTime: "14:00"
        },
        {
            id: 2,
            name: "Tic Tac Toe League",
            status: "In Progress",
            currentPlayers: 8,
            maxPlayers: 8,
            round: "Quarter Finals",
            gameType: "tictac",
            startDate: "2024-03-19",
            startTime: "10:00"
        },
        {
            id: 3,
            name: "Chess Master",
            status: "Registration Open",
            currentPlayers: 10,
            maxPlayers: 12,
            startsIn: "4 hours",
            gameType: "chess",
            startDate: "2024-03-18",
            startTime: "12:00"
        },
    ];

    // Select DOM elements
    const cardsContainer = tournamentSection.querySelector('.cards-container');
    const createTournamentForm = tournamentSection.querySelector('.admin-form');
    const tournamentNameInput = document.getElementById('tournamentName');
    const startDateInput = document.getElementById('startDate');
    const startTimeInput = document.getElementById('startTime');
    const maxPlayersSelect = document.getElementById('maxPlayers');
    const gameTypeSelect = document.getElementById('gameType');

    // Set minimum date for tournament creation (today)
    const today = new Date().toISOString().split('T')[0];
    startDateInput.min = today;

    // Function to create tournament card
    function createTournamentCard(tournament) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const button = tournament.currentPlayers >= tournament.maxPlayers ? 
            `<button class="btn" disabled>Tournament Full</button>` :
            `<button class="btn join-tournament" data-tournament-id="${tournament.id}">Join Tournament</button>`;

        const status = tournament.status === "In Progress" ?
            `<p>Round: ${tournament.round}</p>` :
            `<p>Starts in: ${tournament.startsIn}</p>`;

        card.innerHTML = `
            <h3 class="card-title">${tournament.name}</h3>
            <p>Status: ${tournament.status}</p>
            <p>Players: ${tournament.currentPlayers}/${tournament.maxPlayers}</p>
            ${status}
            ${button}
        `;

        return card;
    }

    // Function to update tournaments display
    function updateTournamentsDisplay() {
        cardsContainer.innerHTML = '';
        tournaments.forEach(tournament => {
            cardsContainer.appendChild(createTournamentCard(tournament));
        });

        // Add event listeners to join buttons
        const joinButtons = cardsContainer.querySelectorAll('.join-tournament');
        joinButtons.forEach(button => {
            button.addEventListener('click', handleJoinTournament);
        });
    }

    // Handle joining tournament
    function handleJoinTournament(e) {
        const tournamentId = parseInt(e.target.dataset.tournamentId);
        const tournament = tournaments.find(t => t.id === tournamentId);
        
        if (tournament && tournament.currentPlayers < tournament.maxPlayers) {
            if (confirm(`Do you want to join ${tournament.name}?`)) {
                tournament.currentPlayers++;
                if (tournament.currentPlayers === tournament.maxPlayers) {
                    tournament.status = "Full";
                }
                updateTournamentsDisplay();
                alert('Successfully joined the tournament!');
            }
        }
    }

    // Handle tournament creation
    createTournamentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        if (!tournamentNameInput.value) {
            alert('Please enter a tournament name');
            return;
        }

        // Calculate starts in time
        const startDateTime = new Date(`${startDateInput.value} ${startTimeInput.value}`);
        const now = new Date();
        const diffHours = Math.round((startDateTime - now) / (1000 * 60 * 60));
        const startsIn = diffHours <= 24 ? 
            `${diffHours} hours` : 
            `${Math.round(diffHours/24)} days`;

        // Create new tournament
        const newTournament = {
            id: tournaments.length + 1,
            name: tournamentNameInput.value,
            status: "Registration Open",
            currentPlayers: 0,
            maxPlayers: parseInt(maxPlayersSelect.value),
            startsIn: startsIn,
            gameType: gameTypeSelect.value,
            startDate: startDateInput.value,
            startTime: startTimeInput.value
        };

        // Add to tournaments array
        tournaments.push(newTournament);

        // Update display
        updateTournamentsDisplay();

        // Reset form
        createTournamentForm.reset();

        // Show success message
        alert('Tournament created successfully!');
    });

    // Initialize tournaments display
    updateTournamentsDisplay();

    // Auto-update "starts in" time every minute
    setInterval(() => {
        tournaments.forEach(tournament => {
            if (tournament.status === "Registration Open") {
                const startDateTime = new Date(`${tournament.startDate} ${tournament.startTime}`);
                const now = new Date();
                const diffHours = Math.round((startDateTime - now) / (1000 * 60 * 60));
                
                if (diffHours <= 0) {
                    tournament.status = "In Progress";
                    tournament.round = "Round 1";
                } else {
                    tournament.startsIn = diffHours <= 24 ? 
                        `${diffHours} hours` : 
                        `${Math.round(diffHours/24)} days`;
                }
            }
        });
        updateTournamentsDisplay();
    }, 60000); // Update every minute
}

//----------------------------------About Page----------------------------------
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    // Team member data
    const teamMembers = [
        {
            name: "moubi9a",
            role: "F Developer",
            image: "./assets/imgs/GLovOmnXMAAlhjQ.jpg",
            social: {
                github: "moubi9a",
                linkedin: "hamza-el-moueddane-7296b591"
            }
        },
        {
            name: "Hamza Ait Ouazghour",
            role: "Game Developer",
            image: "./assets/imgs/GLovOmnXMAAlhjQ.jpg",
            social: {
                github: "hamzaao",
                linkedin: "hamzaao"
            }
        },
        {
            name: "Yassine Ait Ouazghour",
            role: "UI/UX Designer",
            image: "./assets/imgs/GLovOmnXMAAlhjQ.jpg",
            social: {
                github: "yassineao",
                linkedin: "yassineao"
            }
        },
        {
            name: "Ayoub Ait Ouazghour",
            role: "Backend Developer",
            image: "./assets/imgs/GLovOmnXMAAlhjQ.jpg",
            social: {
                github: "ayoubao",
                linkedin: "ayoubao"
            }
        }
    ];

    // Update team cards with member data
    const teamCards = aboutSection.querySelectorAll('.cards-container .card');
    teamCards.forEach((card, index) => {
        const member = teamMembers[index];
        
        // Update image, name and role
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" style="width: 100%; height: auto; border-radius: 8px;">
            <h3 class="card-title">${member.name}</h3>
            <p>${member.role}</p>
            <div class="social-links">
                <a class="social-link github-link">
                    <i class="fab fa-github"></i>
                </a>
                <a class="social-link linkedin-link">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="social-link twitter-link">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        `;

        // Add click handlers for social buttons
        const githubLink = card.querySelector('.github-link');
        const linkedinLink = card.querySelector('.linkedin-link');
        const twitterLink = card.querySelector('.twitter-link');

        githubLink.addEventListener('click', () => {
            window.open(`https://github.com/${member.social.github}`, '_blank');
        });

        linkedinLink.addEventListener('click', () => {
            window.open(`https://linkedin.com/in/${member.social.linkedin}`, '_blank');
        });

        twitterLink.addEventListener('click', () => {
            window.open(`https://twitter.com/${member.social.github}`, '_blank');
        });

        // Add hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // Add CSS for social links
    const style = document.createElement('style');
    style.textContent = `
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 15px;
        }

        .social-link {
            color: #666;
            font-size: 1.2em;
            transition: color 0.3s ease;
            cursor: pointer;
        }

        .social-link:hover {
            color: #007bff;
        }

        .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card .card-title {
            margin: 10px 0;
            color: #333;
        }

        .card p {
            color: #666;
            margin-bottom: 10px;
        }

        @media (max-width: 768px) {
            .social-links {
                margin-top: 10px;
                gap: 10px;
            }

            .social-link {
                font-size: 1em;
            }
        }
    `;
    document.head.appendChild(style);

    // Handle contact card clicks
    const contactCards = aboutSection.querySelectorAll('.dashboard-container:last-child .card');
    contactCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });

        card.addEventListener('click', () => {
            const type = card.querySelector('.card-title').textContent.toLowerCase();
            
            switch(type) {
                case 'email':
                    window.location.href = 'mailto:contact@gamepad.com';
                    break;
                case 'twitter':
                    window.open('https://twitter.com/GamePadOfficial', '_blank');
                    break;
                case 'discord':
                    window.open('https://discord.gg/gamepad', '_blank');
                    break;
            }
        });
    });
}
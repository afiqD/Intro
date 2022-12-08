
// ? variable declaration
// dark mode variables
darkModeInput = document.getElementById('darkMode')
darkModeIcon = document.getElementById('darkModeIcon')

titleColor = document.querySelectorAll('.color-title')
bodyColor = document.querySelectorAll('.color-body')
elementLogo = document.querySelectorAll('.element-logo')
darkBorder = document.querySelectorAll('.dark-border')

nextSlidesIcon = document.querySelectorAll('.carousel-control-next-icon')
prevSlidesIcon = document.querySelectorAll('.carousel-control-prev-icon')
slideIndicator = document.querySelectorAll('.carousel-indicators [data-bs-target]')

// sidenav variable
sidenavBar = document.querySelector('.sidenav')
sidenavStatus = false

// portfolio content
html = '<i class="fab fa-html5"></i>'
css = '<i class="fab fa-css3"></i>'
js = '<i class="fab fa-js-square"></i>'
database = '<i class="fas fa-database"></i>'
api = '<i class="fas fa-cogs"></i>'

portfolioContent = [
    {
        // mysite
        backgroundImage : 'assets/CodeDaily/mysite.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js]
    },
    {
        // catphotoapp
        backgroundImage : 'assets/CodeDaily/catphotoapp.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js]
    },
    {
        // cafe
        backgroundImage : 'assets/CodeDaily/cafe.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js]
    },
    {
        // markers
        backgroundImage : 'assets/CodeDaily/markers.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js]
    },
    {
        // site
        backgroundImage : 'assets/CodeDaily/site.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js]
    },
    {
        // bacon
        backgroundImage : 'assets/CodeDaily/bacon.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js, database]
    },
    {
        // runcloud
        backgroundImage : 'assets/CodeDaily/runcloud.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js, api]
    },
    {
        // tindog
        backgroundImage : 'assets/CodeDaily/tindog.gif',
        // githubLink : 'https://github.com/AfiqD/',
        // webLink : 'https://afiqD.github.io/',
        technology: [html, css, js]
    },
]
portfolioHolder = document.querySelector('.portfolio-holder')


// ? dark mode function
// onload keep the web on darkmode
window.onload = (evt) => {
    darkModeInput.checked = true
    // html body color
    document.querySelector('body').style.backgroundColor = '#101826'
    // text title color
    for (let i = 0; i < titleColor.length; i++) {
        titleColor[i].style.color = '#e0efff'
    }
    // text body color
    for (let i = 0; i < bodyColor.length; i++) {
        bodyColor[i].style.color = '#959595'
    }
    // dark mode icon
    darkModeIcon.innerHTML = '<i class="bi bi-moon"></i>'
    // png elements color
    for (let i = 0; i < elementLogo.length; i++) {
        elementLogo[i].style.filter = 'initial'
    }
    // dark mode border
    for (let i = 0; i < darkBorder.length; i++) {
        darkBorder[i].style.backgroundColor = '#101826'
    }
}
// dark mode upon switch onchange
function darkMode() {
    switch (darkModeInput.checked) {
        case true:
            // html body color
            document.querySelector('body').style.backgroundColor = '#101826'
            // text title color
            for (let i = 0; i < titleColor.length; i++) {
                titleColor[i].style.color = 'white'
            }
            // text body color
            for (let i = 0; i < bodyColor.length; i++) {
                bodyColor[i].style.color = '#959595'
            }
            // dark mode icon
            darkModeIcon.innerHTML = '<i class="bi bi-moon"></i>'
            // png elements color
            for (let i = 0; i < elementLogo.length; i++) {
                elementLogo[i].style.filter = 'initial'
            }
            // dark mode border
            for (let i = 0; i < darkBorder.length; i++) {
                darkBorder[i].style.backgroundColor = '#101826'
            }
            // bootstrap next and prev icon
            for (let i = 0; i < nextSlidesIcon.length; i++) {
                nextSlidesIcon[i].style.filter = 'initial'
            }
            for (let i = 0; i < prevSlidesIcon.length; i++) {
                prevSlidesIcon[i].style.filter = 'initial'
            }
            // bootstrap slides indicator
            for (let i = 0; i < slideIndicator.length; i++) {
                slideIndicator[i].style.backgroundColor = 'white'

            }

            break;


        case false:
            // html body color
            document.querySelector('body').style.backgroundColor = '#e0efff'
            // text title color
            for (let i = 0; i < titleColor.length; i++) {
                titleColor[i].style.color = '#3B4250'
            }
            // text body color
            for (let i = 0; i < bodyColor.length; i++) {
                bodyColor[i].style.color = '#8C92A3'
            }
            // dark mode icon
            darkModeIcon.innerHTML = '<i class="bi bi-sun"></i>'
            // png elements color
            for (let i = 0; i < elementLogo.length; i++) {
                elementLogo[i].style.filter = 'invert(76%) sepia(23%) saturate(396%) hue-rotate(181deg) brightness(97%) contrast(94%)'
            }
            // dark mode border
            for (let i = 0; i < darkBorder.length; i++) {
                darkBorder[i].style.backgroundColor = 'white'
            }
            // bootstrap next and prev icon
            for (let i = 0; i < nextSlidesIcon.length; i++) {
                nextSlidesIcon[i].style.filter = 'invert(60%) sepia(14%) saturate(540%) hue-rotate(191deg) brightness(99%) contrast(91%)'
            }
            for (let i = 0; i < prevSlidesIcon.length; i++) {
                prevSlidesIcon[i].style.filter = 'invert(60%) sepia(14%) saturate(540%) hue-rotate(191deg) brightness(99%) contrast(91%)'
            }
            // bootstrap slides indicator
            for (let i = 0; i < slideIndicator.length; i++) {
                slideIndicator[i].style.backgroundColor = '#b7b7b7'

            }
            break;
    }
}


function clickButton(link) {
    window.open(link, "_blank");
}


// ? sidenav display functionality

function sidenavOpen () {
    sidenavBar.style.transform = 'translateX(0%)'
    sidenavStatus = true
}
function sidenavClose () {
    sidenavBar.style.transform = 'translateX(-100%)'
    sidenavStatus = false
}

function displaySidenav() {
    switch (sidenavStatus) {
        case false:
            sidenavOpen()
            break;
        case true:
            sidenavClose()
            break;
    }
}

window.addEventListener('resize', reportWindowSize)
function reportWindowSize(e) {
    if (window.innerWidth >= 700){
        sidenavOpen()
    }
    else if (window.innerWidth <= 700){
        sidenavClose()
    }
}

function touchSidenav() {
    if (window.innerWidth <= 700) {
        sidenavClose()
    }
}



// ? portfolio display

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffle(portfolioContent)

for (let i = 0; i < portfolioContent.length; i++) {

    newPortfolioList = document.createElement('div')
    newPortfolioList.classList.add('portfolio-list', 'dark-border')

    newPortfolioGif = document.createElement('div')
    newPortfolioGif.classList.add('portfolio-gif')
    newPortfolioGif.style.backgroundImage = `url(${portfolioContent[i].backgroundImage})`

    newPortfolioCover = document.createElement('div')
    newPortfolioCover.classList.add('porfolio-cover')

    newGithubLink = document.createElement('a')
    newGithubLink.setAttribute('href', portfolioContent[i].githubLink)
    newGithubLink.setAttribute('target', 'blank')

    newGithubBtn = document.createElement('button')
    newGithubBtn.classList.add('my-btn')

    newGithubIcon = document.createElement('i')
    newGithubIcon.classList.add('bi', 'bi-github')

    newGithubText = document.createElement('p')
    newGithubText.innerHTML = 'Code repo'

    newWebLink = document.createElement('a')
    newWebLink.setAttribute('href', portfolioContent[i].webLink)
    newWebLink.setAttribute('target', 'blank')

    newWebBtn = document.createElement('button')
    newWebBtn.classList.add('my-btn')
    newWebBtn.innerHTML = 'view project'

    newTech = document.createElement('div')
    newTech.classList.add('technology')
    for (let j = 0; j < portfolioContent[i].technology.length; j++) {
        newTech.innerHTML += portfolioContent[i].technology[j]
    }


    newGithubLink.append(newGithubBtn)
    newGithubBtn.append(newGithubIcon, newGithubText)

    newWebLink.append(newWebBtn)

    newPortfolioCover.append(newGithubLink, newWebLink, newTech)
    newPortfolioList.append(newPortfolioGif, newPortfolioCover)
    portfolioHolder.append(newPortfolioList)

}

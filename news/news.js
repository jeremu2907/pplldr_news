const newsListDiv = document.getElementById('news-list');

const newsListInfo = [
    {
        date: "January 18th, 2023",
        title: "Transitioning to civilian life:",
        titleExt: "Things to keep in mind during your military to corporate move",
        url: "jan182024.html",
    },
    {
        date: "January 11th, 2023",
        title: "Navigating the Corporate Landscape:",
        titleExt: "Overcoming Challenges in Military-to-Civilian Transition",
        url: "jan112024.html",
    },
    {
        date: "January 2nd, 2023",
        title: "Revolutionizing How Top Talent Finds their Quality People Leader",
        url: "jan22024.html",
    },
];

for (const newsInfo of newsListInfo) {
    const newsItemDiv = document.createElement('div');

    const anchorElement = document.createElement('a');
    anchorElement.href = newsInfo.url;

    const headingElement = document.createElement('h4');
    headingElement.textContent = newsInfo.title;
    anchorElement.appendChild(headingElement);

    const headingExtElement = document.createElement('h5');
    if (newsInfo.titleExt) {
        headingExtElement.textContent = newsInfo.titleExt;
    }

    const dateParagraph = document.createElement('p');
    dateParagraph.textContent = newsInfo.date;

    newsItemDiv.appendChild(anchorElement);
    if (newsInfo.titleExt) {
        newsItemDiv.appendChild(headingExtElement);
    }
    newsItemDiv.appendChild(dateParagraph);
    newsListDiv.appendChild(newsItemDiv);
}

// News Management Script

// Sample data
const newsArticles = [
    { id: 1, title: 'Article 1', category: 'Technology', content: 'Content of Article 1.', date: '2026-03-06T12:00:00Z' },
    { id: 2, title: 'Article 2', category: 'Health', content: 'Content of Article 2.', date: '2026-03-06T12:01:00Z' },
    { id: 3, title: 'Article 3', category: 'Technology', content: 'Content of Article 3.', date: '2026-03-06T12:02:00Z' }
];

// Function to render news cards
function renderNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p><small>${new Date(article.date).toLocaleString()}</small>`;
        newsContainer.appendChild(card);
    });
}

// Function to filter news by category
function filterNews(category) {
    const filteredArticles = newsArticles.filter(article => article.category === category);
    renderNews(filteredArticles);
}

// Function to save articles to local storage
function saveArticlesToLocal() {
    localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
}

// Function to load articles from local storage
function loadArticlesFromLocal() {
    const articles = localStorage.getItem('newsArticles');
    if (articles) {
        return JSON.parse(articles);
    }
    return [];
}

// Initialize the application
renderNews(newsArticles);
saveArticlesToLocal();
export class ArticlesModel {
    async getAllArticles() {
        const response = await fetch("https://volleyball-mvc-server-2.onrender.com/api/articles");
        const articles = await response.json();
        return articles;
    }

    async getArticlesByAuthor(author) {
        const allArticles = await this.getAllArticles();
        return allArticles.filter(a => a.author === author);
    }
}

export class ArticlesModel {
    constructor() {
        
        this.articles = [
            { id: 1, title: "Вступ до MVC", author: "Бірюк Аліна", year: 2025 },
            { id: 2, title: "Основи JavaScript", author: "Петренко Ігор", year: 2024 },
            { id: 3, title: "Frontend у 2025 році", author: "Бірюк Аліна", year: 2025 }
        ];
    }

    // Метод повертає всі статті
    getAllArticles() {
        return this.articles;
    }

    // Метод повертає лише статті Бірюк
    getArticlesByAuthor(author) {
        return this.articles.filter(a => a.author === author);
    }
}

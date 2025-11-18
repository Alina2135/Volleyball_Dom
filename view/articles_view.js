export class ArticlesView {
    renderArticlesList(container, articles) {
        container.innerHTML = "<h2>Список статей</h2>";

        articles.forEach(article => {
            const item = document.createElement("div");
            item.className = "article-card";
            item.innerHTML = `
                <h3>${article.title}</h3>
                <p>Автор: <strong>${article.author}</strong></p>
                <p>Рік: ${article.year}</p>
                <hr>
            `;
            container.appendChild(item);
        });
    }
}

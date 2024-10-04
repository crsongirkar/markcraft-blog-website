import express from 'express';
import articlesRouter from './routes/articles.js';
import connection from './db/connection.js';
import ArticleModel from './models/article.js';
import methodOverride from 'method-override';

const app = express();

connection();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


//routes
app.use('/articles', articlesRouter);

app.get('/', async (req, res) => {
    const articles = await ArticleModel.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
}
);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);
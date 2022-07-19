const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const error=require('./controllers/404.js')
const app=express();
app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes.routes);
app.use(shopRoutes);
app.use(error.error);

app.listen(3000);
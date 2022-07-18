const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const adminData=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const expressHbs=require('express-handlebars');
const app=express();
app.engine('hbs',expressHbs());
app.set('view engine', 'hbs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.render('404',{pageTitle:'page not found'});
})

app.listen(3000);
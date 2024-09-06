import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
        res.send('Hi, my student.');
});

// http://localhost:3000/api/myProfile
app.get('/api/myProfile', (req, res) => {
    let myHtml = '<h1> my Profile </h1>';
    myHtml+='<p>Name: Teerawat Barnvimol';
    myHtml+='<p>Email: Teerawatbarnvimol@gmail.com</p>';
    res.set('Content-Type', 'text/html');
    res.end(myHtml);
});

// http://localhost:3000/api/getProfile/u100/o200
// http://localhost:3000/api/getProfile/u100
app.get('/api/getProfile/:userId/:orderId', (req, res) => {
    let { userId, OrderId} = req.params ;
    res.send(req.params);
});

app.get('/api/getProfiles', (req, res ) => {
      let myProf = {
         '_id' : 1000,
         'fname' : 'duanghathai',
         'lname' : 'yarangpai',
         'maJor' : 'Information Technology',
         'eMail' : 'duanghathai.yar@rmutto.ac.th',
         'imPro' : '/images/1.jpg'
      };
      res.jsonp(myProf);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});


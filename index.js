import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});
app.get('/task2A', (req, res) => {
  const sum = (Number(req.query.a)||0) + (Number(req.query.b)||0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  var regexp = /^[a-zA-Zа-яёА-ЯЁ]/gi;
  var surname;
  var name;
  var lastname;
console.log(req.query.fullname);
  const fullname = (req.query.fullname )||res.send("Invalid fullname");
  if(decodeURIComponent(fullname).match(/[0-9_/]/)){res.send("Invalid fullname");}
  var temp = new Array();
  temp = decodeURIComponent(fullname).replace(/\s{2,}/g,' ').trim().split(' ');
  var length = temp.length;

   if(length==1) {
  res.send(temp[0]);
    }

 else if(length==2) {
  surname = temp[1];
  name = temp[0];
  res.send(surname + " " + name.match(regexp)[0] + ".");
  }
  else if(length==3){
  surname = temp[2];
  name = temp[0];
  lastname = temp[1];
  res.send(capitaliseFirstLetter(surname.toLowerCase()) + " " + name.match(regexp).toString().toUpperCase() + "." + " " + lastname.match(regexp).toString().toUpperCase() + ".");
  }
  else res.send("Invalid fullname");

});

function capitaliseFirstLetter(string)

{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

// IMPORTS
//Module importieren
import express from 'express';
import ngrok from 'ngrok';


//express app erstellen
const app = express();
const PORT = 3000;

//zufriff erlauben auf public ordner
app.use(express.static(__dirname + '/../..'));


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

(async function() {
    
    const url = await ngrok.connect({
      authtoken: '2sw3v9KUgzYZRJxfnmxj9gQbHbj_7Jp99JMNNjYyBNw2N8YzP',
      addr: PORT
    });
    console.log('******** ngrok Tunnel offen ********');
    console.log(url);
    console.log('');
  })();













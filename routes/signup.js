const reg = require('express').Router();
const bodyParser=require('body-parser');
reg.use(bodyParser.urlencoded({ extended: false }));
reg.post('/accesso',(req,res)=>{
    console.log('RICHIESTA RICEVUTA');
    console.log(req.body);
    console.log(req.body.nome);
    console.log(req.body.email);
    console.log(req.body.cognome);
    console.log(req.body.password);
    console.log(req.body.telefono);
    console.log(req.body.nazione);
    const oracledb = require('oracledb');

async function run() {

    let connection;

        try{
            connection = await oracledb.getConnection({ user: "c##admin", password: "admin", connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=192.168.56.1)(PORT=1521)))" 
            });
            console.log("Successfully connected to Oracle Database");
            let result3=await connection.execute('select * from CLIENTE');
            let result =await connection.execute('SELECT EMAIL FROM CLIENTE WHERE EMAIL =:email  ',[req.body.email]);
            
            console.log('la tabella cliente e:',result3);
            console.log('SONO RESULT',result);
            console.log('SONO rows',result.rows[[0]]);
            
                if(!result.rows[[0]]){
                    connection.execute('INSERT INTO CLIENTE(EMAIL,NOME,COGNOME,TELEFONO,PASSWORD,NAZIONE) VALUES (:EMAIL,:NOME,:COGNOME,:TELEFONO,:PASSWORD,:NAZIONE)',[req.body.email,req.body.nome,req.body.cognome,req.body.telefono,req.body.password,req.body.nazione]);
                    res.redirect('/');
                }
            
                else{
                    console.log('nome utente o password errata');
                    res.sendFile('Portami_home.html',{root: __dirname});
                }
            
            
            
        }
        catch{
            console.log('CONNESSIONE NON RIUSCITA');
        }
}

run();
})


module.exports=reg;
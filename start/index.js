// module natif
    const fs = require('fs');
    // fonction native de node qui copie colle d'un fichier à un autre
    fs.copyFile('html/src.html', 'html/dest.html', (error)=>{
        if(error) throw error;
        console.log("Copie réalisée avec succès !!");
    });


// module personnel
    const libHello = require('./module/lib-hello');
    libHello.helloWithName("Alexis");

// module externe - site npm node_modules"
    const randomWords = require('random-words');
    console.log(randomWords(80));
const fs = require('fs');

const fileName = 'Json-File/priceKrapao.json';

fs.readFile(fileName, 'utf8', (err, jsonString) => {
    if(err){
        console.log("Error reading file");
        return;
    }
    try {

        const oldData = JSON.parse(jsonString);

        const newData = {
           menu_item: oldData.menu_item,
           data: oldData.data.map(item => ({
                ...item,
                store: item.store.map(s => {
                    let cleanUrl = s.location;
                    if(s.location && s.location.includes('http')){
                        const match = s.location.match(/src=['"]([^'"]+)['"]/);
                        cleanUrl = match ? match[1] : s.location;
                    }
                    return{
                        ...s,
                        location: cleanUrl
                    };
                })
           }))
        };

        const newFileName = 'priceKrapao_clean.json';
        fs.writeFile(newFileName, JSON.stringify(newData, null, 2), (err) => {
            if(err){
                console.log("ERROR: writing file", err);
            }
            else{
                console.log(`SUSCESS: writing file: ${newFileName}`);
            }
        })


    } catch (error) {
        console.log("ERROR parsing JSON string");
    }
})



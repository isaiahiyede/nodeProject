const { readFile, writeFile } = require('fs');
const path = require('path')

const first = readFile(
    path.join('content','first.txt'),
    'utf8',
    (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const first = result;
        readFile(
            path.resolve(__dirname, 'content', 'second.txt'),
            'utf8',
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }
                const second = result;
                writeFile(
                    path.resolve(__dirname, 'content', 'new_file_async'),
                    `Here is the text:\n${first}\n${second}`,
                    { flag: 'a'},
                    (err,result)=>{
                        if(err){
                            console.log(err)
                        }
                        console.log(result);
                    }
                )
            }
        )
    }
)



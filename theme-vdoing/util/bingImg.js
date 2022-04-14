const https = require('https')

const options = {
    host: 'cn.bing.com',
    port: 443,
    path: '/HPImageArchive.aspx?format=js&idx=0&n=1',
    method: 'GET'
}

let body = ''

export function getImg() {
   
    const req = https.request( async (options,res) => {
        console.log(`状态码: ${res.statusCode}`)
    
        if (res.statusCode == 200) {
    
            body = ''
            res.setEncoding('utf8')
            await res.on('data', d => {
                body += d
            })
    
            await res.on('end', () =>{
                console.log(body)
            })
            
        }
       
    })
    
    req.on('error', error => {
        console.error(error)
      })
    req.end()
    console.log("body"+body)
 
}

// function getImgUrl(img) {
//     return img.imges[0].url
// }

async function get() {
   

}





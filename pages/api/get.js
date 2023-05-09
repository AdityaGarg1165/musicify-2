import { YouTube } from "youtube-sr";


export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    YouTube.search(body.val,{limit:1}).then(e=>{
      // console.log(e)
      res.status(200).json(JSON.stringify({url:`https://www.youtube.com/watch?v=${e[0].id}`}))
    })
    
   

    }
    
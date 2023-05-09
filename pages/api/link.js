
// const Youtube = require('youtube-node')
import * as fs from 'fs'
const downloader = require('ytdl-core')

export default async function handler(req, res) {
    const body = JSON.parse(req.body)

    let info = await downloader.getInfo(body.val)
    let formats = downloader.chooseFormat(info.formats,{quality:"highestaudio"})
        // console.log(info)
        res.status(200).json({url:formats.url})
    // })

    // const srch = await yt.search('no reason')


}
  
import axios from 'axios'
import fs from 'fs'

export default async function tiktok({ sock, from, args }) {
    if (!args[0]) {
        return sock.sendMessage(from, { text: '❌ Please provide a TikTok video link!' })
    }

    const url = args[0]

    try {
        // TikTok download API (free one)
        const apiUrl = `https://api.tikmate.app/api/lookup?url=${encodeURIComponent(url)}`
        const res = await axios.get(apiUrl)
        const videoUrl = res.data.video.url

        const videoRes = await axios.get(videoUrl, { responseType: 'arraybuffer' })
        const fileName = `tiktok-${Date.now()}.mp4`
        fs.writeFileSync(fileName, videoRes.data)

        await sock.sendMessage(from, {
            video: { url: fileName },
            fileName: fileName,
            mimetype: 'video/mp4'
        })

        fs.unlinkSync(fileName)
    } catch (err) {
        console.error(err)
        await sock.sendMessage(from, { text: '⚠️ Failed to download TikTok video.' })
    }
                                    }

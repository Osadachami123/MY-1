import { exec } from 'child_process'
import fs from 'fs'

cmd({
    pattern: "tiktok",
    desc: "Download Tiktok video",
    category: "download",
    filename: __filename
},

export default async function tiktok({ sock, from, args }) {
    if (!args[0]) return sock.sendMessage(from, { text: '❌ Please provide a TikTok video link!' })
    const url = args[0]
    const fileName = `tiktok-${Date.now()}.mp4`

    try {
        exec(`yt-dlp -o "${fileName}" ${url}`, async (error, stdout, stderr) => {
            if (error) {
                console.error(`yt-dlp error: ${error.message}`)
                return sock.sendMessage(from, { text: '⚠️ Failed to download TikTok video.' })
            }

            if (!fs.existsSync(fileName)) {
                return sock.sendMessage(from, { text: '⚠️ File not found after download.' })
            }

            await sock.sendMessage(from, {
                video: { url: fileName },
                fileName,
                mimetype: 'video/mp4'
            })

            fs.unlinkSync(fileName)
        })
    } catch (err) {
        console.error(err)
        await sock.sendMessage(from, { text: '⚠️ Something went wrong while downloading.' })
    }
                        }

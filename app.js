const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yunsueng</title>
</head>
<body>
    <h1>UBUNTU !!!!</h1>
    <ul>
        <li><a href="youtu.be">YouTube</a></li>
        <li><a href="twitch.tv">Twitch</a></li>
        <li><a href="www.naver.com">Naver</a></li>
    </ul>
    

</body>
</html>`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
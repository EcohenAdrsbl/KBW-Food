/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'


const app = new Frog({
  basePath: '/api',
  // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
  browserLocation: '/',
  imageOptions: {
    fonts: [
      {
        name: 'JetBrains Mono',
        source: 'google',
      },
    ],
  },
  title: 'KBW-Insights',
})


// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: 'https://i.ibb.co/yh3Xfjs/Team-Picks.png',
    intents: [
      <Button.Link href = 'https://meetings.hubspot.com/asaf-nadler/meet-addressable-at-kbw?uuid=ff52f339-334d-4de4-88e2-985aeae4dace'>Grab Lunch With Us!</Button.Link>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

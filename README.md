# Send Telegram Message Application

Using telegram api, express and node.js

## Prerequisites

Need to have nodejs, npm and able to get node server running.
Get a telegram api key from [Bot Father](https://telegram.me/botfather).

## Setup and run application

Clone or download the files
Rename .env.example to .env, edit .env enter the information required.

```
$ npm install
$ node ./bin/www
```

### Send Message

\$ curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"message":"Call me at 000-0000000"}

### Screenshots

![Screenshot#1](https://raw.githubusercontent.com/clchangnet/telegram/faacc6c752f7b43e7fb8200ba346e585066ad200/telegram_2019-06-03-16-13-20.png)
![Screenshot#2](https://raw.githubusercontent.com/clchangnet/telegram/faacc6c752f7b43e7fb8200ba346e585066ad200/telegram_2019-06-03-16-22-19.png)
![Screenshot#3](https://raw.githubusercontent.com/clchangnet/telegram/faacc6c752f7b43e7fb8200ba346e585066ad200/telegram_2019-06-03-16-30-42.jpg)

### To see a working demo site, goto [Send Telegram to Full Stack Developer!](https://clchang.net/about)

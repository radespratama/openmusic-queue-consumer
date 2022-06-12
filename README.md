<div align="center">
  <a href="https://github.com/radespratama/openmusic-queue-consumer">
    <img src="https://github.com/radespratama/openmusic-queue-consumer/blob/main/public/openmusic-logo.png?raw=true" alt="Logo">
  </a>

  <h3 align="center">OpenMusic API Queue Consumer</h3>

  <a align="center" href="https://github.com/radespratama/openmusic-queue-consumer"><strong>Explore the docs »</strong></a>
</div>

# 🚀 Quickstart

### Run the website locally

```
git clone https://github.com/radespratama/openmusic-queue-consumer.git openmusic-queue-consumer
```

## Setting up the project

```bash
cd openmusic-queue-consumer

# Install deps
yarn || npm install
```

## Setup Environment

```bash
# Input your PostgreSQL
PGUSER=
PGHOST=
PGPASSWORD=
PGDATABASE=
PGPORT=

# Input your SMTP Server
MAIL_HOST=
MAIL_PORT=
MAIL_ADDRESS=
MAIL_PASSWORD=

# Input your RabbitMQ Server
RABBITMQ_SERVER=
```

## Starting consumer

```bash
yarn start || npm run start
```

<br/>

##  Built With ⚡

![Javascript](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)
![Node Mailer](https://img.shields.io/badge/NodeMailer-1F2937?style=for-the-badge&logo=nodemailer&logoColor=white)
![Ampqlib](https://img.shields.io/badge/ampqlib-1f2937?style=for-the-badge&logo=ampqlib&logoColor=white)

<br/>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

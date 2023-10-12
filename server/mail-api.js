const axios = require('axios');
const nodemailer = require('nodemailer');

async function fetchData() {
  try {
    const response = await axios.get('https://api.monobank.ua/bank/currency');
    const data = response.data.slice(0, 2);
    console.log(data)
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных из API:', error);
    throw error;
  }
}

async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ukr.com',
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: 'gorban.ilyxa@ukr.net',
      pass: 'warcraft123',
    },
  });

  const mailOptions = {
    from: 'gorban.ilyxa@gmail.com',
    to: 'illia.horban@gmail.com', 
    subject: 'Данные из API Monobank',
    text: JSON.stringify(data, null, 2),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Письмо отправлено:', info.response);
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    throw error;
  }
}

async function doTask() {
    try {
        const data = await fetchData();
        await sendEmail(data);
    } catch (error) {
        console.error('Ошибка в doTask:', error);
    }
}
  
  doTask();
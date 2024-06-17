const Imap = require('imap');
const {simpleParser} = require('mailparser');


const imapConfig = {
  user: 'ekarahadi98@gmail.com',
  password: 'jsqapycknvabmvpu', //app-specific password
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: {
    rejectUnauthorized: false
  }
};

const getEmails = (startDate, endDate) => {
  const subjects = [];
  return new Promise((resolve, reject) => {
    try {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
        imap.openBox('INBOX', false, () => {
            // UNSEEN, ALL, NEW, etc
          // ['ALL',['FROM', 'BankBRI@bri.co.id'], ['SINCE', startDate.toISOString()]]
          imap.search(['ALL', ['SINCE', new Date(startDate).toISOString()],
          ['BEFORE', new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000).toISOString()]], // Adding one day to make the end date inclusive 
            (err, results) => {
              if (err || results.length === 0) {
                imap.end();
              }

              if (results.length !== 0) {
                const f = imap.fetch(results, {bodies: ''}); //error disini kalo gak ada email yg ketemu
                f.on('message', msg => {
                  msg.on('body', stream => {
                    simpleParser(stream, async (err, parsed) => {
                      const {from, subject, textAsHtml, text} = parsed;
                      subjects.push(subject);
                    });
                  });
                  msg.once('attributes', attrs => {
                    const {uid} = attrs;
                  });
                });
                f.once('error', ex => {
                  reject(ex);
                });
                f.once('end', () => {
                  console.log('Done fetching all messages!');
                  imap.end();
                });
              }
          });
        });
      });
  
      imap.once('error', err => {
        console.log(err);
        reject(err)
      });
  
      imap.once('end', () => {
        console.log('Connection ended');
        resolve(subjects);
      });
  
      imap.connect();
    } catch (ex) {
      console.log('an error occurred');
      reject(ex)
    }
  })
  };

  module.exports = {
    getEmails
  }
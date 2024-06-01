const Imap = require('imap');
const {simpleParser} = require('mailparser');


const imapConfig = {
  user: 'test@gmail.com',
  password: '', //app-specific password
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: {
    rejectUnauthorized: false
  }
};

const getEmails = () => {
    try {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
        imap.openBox('INBOX', false, () => {
            // UNSEEN, ALL, NEW, etc
          imap.search(['UNSEEN', ['BEFORE', new Date()]], (err, results) => {
            const f = imap.fetch(results, {bodies: ''});
            f.on('message', msg => {
              msg.on('body', stream => {
                simpleParser(stream, async (err, parsed) => {
                  // const {from, subject, textAsHtml, text} = parsed;
                  console.log(parsed);
                });
              });
              msg.once('attributes', attrs => {
                const {uid} = attrs;
              });
            });
            f.once('error', ex => {
              return Promise.reject(ex);
            });
            f.once('end', () => {
              console.log('Done fetching all messages!');
              imap.end();
            });
          });
        });
      });
  
      imap.once('error', err => {
        console.log(err);
      });
  
      imap.once('end', () => {
        console.log('Connection ended');
      });
  
      imap.connect();
    } catch (ex) {
      console.log('an error occurred');
    }
  };

  module.exports = {
    getEmails
  }
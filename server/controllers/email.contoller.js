const fs = require('fs/promises');
const usersPath = './config/emailDB.json';

async function _writeAllUsers(users) {
    await fs.writeFile(usersPath, JSON.stringify(users));
}

async function subscribeEmail(req, res) {
    try {
        let userId = 0;
        const { email } = req.body;
        const existingEmails = JSON.parse(await fs.readFile(usersPath, 'utf8')) || [];
        if (existingEmails.length === 0) {
            userId = 1;
        } else { userId = existingEmails.length + 1 };

        existingEmails.push({ id: userId, email: email });

        await _writeAllUsers(existingEmails);

        res.status(201).json({ message: 'User subscribed.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'User subscription failed.' });
    }
};


module.exports = {
    subscribeEmail
}
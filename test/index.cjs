const test = require('node:test');
const assert = require('node:assert/strict');
const { franc } = require('../dist/index.cjs');

const lang = () => {
    assert.equal(franc('Привет мир!', { whitelist: ['eng', 'rus'] }), 'rus');
    assert.equal(franc('Alle menslike wesens word vry'), 'afr');
    assert.equal(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট'), 'ben');
    assert.equal(franc('Hello my friend. Are you ready?', { whitelist: ['eng', 'rus'] }), 'eng');
};

test('franc-node', (t) => {
    t.test('Check lang', lang);
});

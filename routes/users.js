var express = require('express');
var http = require('http');
const request = require('request');
var router = express.Router();


const token = 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b';
const org_id = 649249007;

const options =

    /* GET users listing. */
    router.get('/', function(req, res, next) {

        const options = {
            url: 'https://books.zoho.com/api/v3/contacts?organization_id=649249007',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'my-reddit-client',
                'Authorization': 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b'
            }
        };

        request(options).pipe(res)

    });

module.exports = router;
const { buildSchema } = require('graphql');


let coursesData = [
    {
        url: 'https://google.com'
    },
    {
        url: 'https://twitter.com'
    },
    {
        url: 'https://facebook.com'
    },
];

let short = (args) => {
    let url = args.url;
    return coursesData.filter(course => {
        console.log(url);
        return  course
    })[0];   
};

let query = buildSchema(`
    type Query {
       shortenUrl(url: String!) : Url
    }

    type Url {
        url: String
    }
`);

module.exports = { query, short };

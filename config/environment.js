
const development = {
    name : 'development',
    asset_path : './assets',
    session_cookie_key : 'blahsomething',
    db : 'codeial-development',
    smtp : {
        service : 'gmail',
        host :'smtp.gmail.com',
        post : 587,
        secure : false,
        auth : {
            user : '',  //email id which send the mail
            pass : '', //password of the gmail
        }
    },
    Google_client_ID : '492562497322-0q3vfbu6h8nt2o254qfceldu21qlrabi.apps.googleusercontent.com',
    Google_client_Secret : '3bmxxgkOMFU7_gWV64B1pbmJ',
    Google_callback_URL : 'http://localhost:8000/users/auth/google/callback',
    Google_JWT_Secret : 'codeial',
    
}

const production = {
    name : 'production',
    asset_path : process.env.CODEIAL_ASSETS_PATH,
    session_cookie_key : process.env.CODEIAL_SESSION_COOKIE,
    db : process.env.CODEIAL_DB,
    smtp : {
        service : 'gmail',
        host :'smtp.gmail.com',
        post : 587,
        secure : false,
        auth : {
            user : '',  //email id which send the mail
            pass : '', //password of the gmail
        }
    },
    Google_client_ID : '492562497322-0q3vfbu6h8nt2o254qfceldu21qlrabi.apps.googleusercontent.com',
    Google_client_Secret : '3bmxxgkOMFU7_gWV64B1pbmJ',
    Google_callback_URL : 'http://localhost:8000/users/auth/google/callback',
    Google_JWT_Secret : process.env.CODEIAL_JWT_SECRET,
}

// module.exports = development;

// for production mode or a developement
module.exports = eval(production == undefined) ? development : eval(production);
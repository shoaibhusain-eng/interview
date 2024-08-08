// sudo apt install nginx -y

// cd /etc/nginx/sites-available

// sudo nano default
// edit default file add this new location after location


// location /api/ {
//     rewrite ^\/api\/(.*)$ /api/$1 break;
//     proxy_pass http://localhost:5000;
//     proxy_set_header Host $host;
//     proxy_set_header X-Real-IP $remote_addr;
//     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
// }


// sudo systemctl status nginx
// sudo systemctl start nginx
// sudo systemctl stop nginx
// sudo systemctl restrat nginx
// sudo systemctl reload nginx

// npm i -g pm2 
// pm2 start index.js --name=backendAPI
// pm2 restart backendAPI
// pm2 delete backendAPI
// pm2 list
// pm2 logs backendAPI
// pm2 monit

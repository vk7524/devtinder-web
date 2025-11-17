🚀 React Deployment on AWS EC2 (Short & Simple)

1. Setup EC2
    a) Sign up / Login to AWS
    b) Launch Ubuntu EC2 instance
    c) Download .pem file
    d) Set permission:
    c) chmod 400 your-key.pem
    d) Connect to instance:
    e) ssh -i "your-key.pem" ubuntu@<public-ip>

2. Install Requirements
    a) Install Node.js (v16 or LTS)
    b) Install Git:
    c) sudo apt install git

3. Clone Project
    a) git clone <your-repo-url>
    b) cd <project-folder>

4. Build React App
    a) npm install
    b) npm run build

5. Install & Setup Nginx
    a) sudo apt update
    b) sudo apt install nginx
    c) sudo systemctl start nginx
    d) sudo systemctl enable nginx

6. Deploy Build Files
    a) Copy React build files to Nginx root:
    b) sudo cp -r dist/* /var/www/html/
    (If build folder is build, then use build/*)

7. Done 🎉
    a) Open browser → http://<your-ec2-public-ip>
    b) Your React app is live!


Backend process
1. allowed ec2 instace public IP on mongodp server
2. npm install pm2 -g  (this help backend server run in background if terminal closed then also server will up)
3. pm2 start npm --name "devTinder-backend" -- start
4. pm2 logs
5. pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
6. config nginx- /etc/nginx/sites-available/default
7. restart nginx (sudo systemctl restart nginx)
8. Modifiy BASE_URL in frontend project  to "/api"

Frontend = http://34.237.124.144/
Backend = http://34.237.124.144:3000/

server_name 34.237.124.144

# Proxy all API calls to Node.js backend
    location /api/ {
        proxy_pass http://localhost:3000/;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
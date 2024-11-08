# user
test@example.com
secret
-
acollier@example.com
password

sudo service mysql stop
sudo service nginx stop

```bash
sudo kill -9 $(sudo lsof -t -i:8000)
```

sudo chown -R ${USER}:${USER} public/build
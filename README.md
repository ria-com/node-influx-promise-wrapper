# node-influx-promise-wrapper

This is promise-wrapper for [influx npm module](https://github.com/bencevans/node-influx)

## How to use?

Include in your `package.json` file:

```json
{
    "dependencies": {
        "influx-promise-wrapper": "git://github.com/ria-com/node-influx-promise-wrapper.git#master"
    }
}
```

Add to `config/default.js`:

```javascript
    module.exports = {
        "influx": {
            host: 'localhost',
            port: 8086, // optional, default 8086
            username: 'username',
            password: 'password',
            database: 'database'
        }
    };
```

Require module in code:

```javascript
var wrapper = require("influx-promise-wrapper");

wrapper.query("SELECT * FROM /.*/")
    .done(console.log, console.warn);

```
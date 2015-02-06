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

## List of wrapped methods

All methods return [promise](https://www.promisejs.org/).

- [query](https://github.com/bencevans/node-influx#user-content-query)
- [createDatabase](https://github.com/bencevans/node-influx#user-content-createdatabase)
- [deleteDatabase](https://github.com/bencevans/node-influx#user-content-deletedatabase)
- [getUsers](https://github.com/bencevans/node-influx#user-content-getusers)
- [getUser](https://github.com/bencevans/node-influx#user-content-getuser)
- [createUser](https://github.com/bencevans/node-influx#user-content-createuser)
- [updateUser](https://github.com/bencevans/node-influx#user-content-updateuser)
- [writePoint](https://github.com/bencevans/node-influx#user-content-writepoint)
- [writePoints](https://github.com/bencevans/node-influx#user-content-writepoints)
- [writeSeries](https://github.com/bencevans/node-influx#user-content-writeseries)
- [getContinuousQueries](https://github.com/bencevans/node-influx#user-content-getcontinuousqueries)
- [dropContinuousQuery](https://github.com/bencevans/node-influx#user-content-dropcontinuousquery)
- [getShardSpaces](https://github.com/bencevans/node-influx#user-content-getshardspaces)
- [createShardSpace](https://github.com/bencevans/node-influx#user-content-createshardspace)
- [updateShardSpace](https://github.com/bencevans/node-influx#user-content-updateshardspace)
- [deleteShardSpace](https://github.com/bencevans/node-influx#user-content-deleteshardspace)
- [dropSeries](https://github.com/bencevans/node-influx#user-content-dropseries)

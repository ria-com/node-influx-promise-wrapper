"use strict";

(function () {
    var config = require("config"),
        influx = require("influx"),
        Q = require("q"),
        client = influx(config.influx),
        methods = [
            "query", "createDatabase", "deleteDatabase", "getUsers",
            "getUser", "createUser", "updateUser", "writePoint",
            "writePoints", "writeSeries", "query", "getContinuousQueries",
            "dropContinuousQuery", "getShardSpaces", "createShardSpace",
            "updateShardSpace", "sdeleteShardSpace", "dropSeries"
        ];

    function wrap(oldFunction, _this) {
        return function (/* arguments */) {
            var args = [].slice.call(arguments),
                deferred = Q.defer();
            args.push(function (/* arguments */) {
                var _args = [].slice.call(arguments),
                    err = _args.splice(0, 1)[0];
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve.apply(deferred, _args);
                }
            });
            oldFunction.apply(_this, args);
            return deferred.promise;
        };
    }

    for (var paramName in client) {
        if (typeof client[paramName] === "function" && methods.indexOf(paramName) !== -1) {
            client[paramName] = wrap(client[paramName], client);
        }
    }

    module.exports = client;
}());
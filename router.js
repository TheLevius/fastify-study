const path = require('path')
const has = require('lodash/has')
const isObject = require('lodash/isObject')
const isFunction = require('lodash/isFunction')
const importDir = require('directory-import')

const schemas = importDir('./schemas', 'sync')

const routesDir = './routes'

importDir(routesDir, 'sync', (routeName, routePath, routeMethods) => {

    const isModule = path.extname(routePath) === '.js';
    if (!isModule) {
        return console.warn(`File ${routePath} is not route`)
    }
    if (!isObject(routeMethods)) {
        return console.warn(`Expected an object in the file ${routePath}`)
    }

    const cleanUpEdPath = routeName === 'index' ?
        routePath.slice(routesDir.length, routePath - 'index.js'.length) :
        routePath.slice(routesDir.length, routePath - '.js'.length)

    routeMethods.foreEach((methodArgs, methodName) => {
        const schema = has(schemas, `${routeName}.${methodName}`) ?
            schemas[schemas][methodName] : {};
    })
})

module.exports = {

}
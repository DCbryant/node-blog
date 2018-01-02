const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const moment = require('moment')
// 生成时间戳
const objectIdToTimestamp = require('objectid-to-timestamp')

const mongolass = new Mongolass()
mongolass.connect(config.mongodb)


exports.User = mongolass.model('User', {
    name: { type: 'string' },
    password: { type: 'string' },
    avatar: { type: 'string' },
    gender: { type: 'string', enum: ['m', 'f', 'x'] },
    bio: { type: 'string' }
})
exports.User.index({ name: 1 }, { unique: true }).exec()// 根据用户名找到用户，用户名全局唯一



// 根据 id 生成创建时间 created_at
mongolass.plugin('addCreatedAt', {
    afterFind: function(results) {
        results.forEach((item) => {
            item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm')
        })
        return results
    },
    afterFindOne: (result) => {
        if (result) {
            result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm')
        }
        return result
    }
})
import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../Models/User.js'

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "keykey321"
}

const fn = async (jwt_payload, next) => {
    try {
        const user = User.findOne({ email: jwt_payload.email })

        if (!user) {
            next(null, false)
        }
        next(null, user)

    } catch (error) {
        next( error, false)
    }

}

export default passport.use(new Strategy(options, fn))
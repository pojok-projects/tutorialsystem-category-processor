const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const apidbil = process.env.ENDPOINTAPI_DBIL
const apiuser = process.env.ENDPOINTAPI_USER

module.exports = {
    videocategory: async (req, res, next) => {
        try {
            const axiosReq = await axios.get(apidbil + 'content/metadata?limit=100')
            if (axiosReq.status === 200) {
                var picked = axiosReq.data.result.filter(o => o.category_id === req.params.categoryid);
                if (picked) {
                    res.send({ 
                        status: {
                            code: 200,
                            message: 'index list query has been performed, data has been found',
                            total: picked.length
                        },
                        result: picked
                     })
                } else {
                    throw new Error(axiosReq)
                }
            } else {
                throw new Error(axiosReq)
            }
        } catch (err) {
            next(err)
        }
    },

    recommend: async (req, res, next) => {
        try {
            const axiosReq = await axios.get(apiuser + 'user/historyvideo/' + req.params.userid)
            if (axiosReq.status === 200) {
                const getMetadata = await axios.get(apidbil + 'content/metadata/' + axiosReq.data.result[0].video_id)
                if (getMetadata.status === 200) {
                    const getVideo = await axios.get(apidbil + 'content/metadata?limit=100')
                    if (getVideo.status === 200) {
                        var picked = getVideo.data.result.filter(o => o.category_id === getMetadata.data.category_id);
                        if (picked) {
                            res.send({ 
                                status: {
                                    code: 200,
                                    message: 'index list query has been performed, data has been found',
                                    total: picked.length
                                },
                                result: picked
                            })
                        } else {
                            throw new Error(axiosReq)
                        }
                    } else {
                        throw new Error(axiosReq)
                    }
                } else {
                    throw new Error(axiosReq)
                }
            } else {
                throw new Error(axiosReq)
            }
        } catch (err) {
            next(err)
        }
    },
}
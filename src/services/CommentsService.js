import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class CommentsService {

    async getComments() {
        const res = await api.get('api/comments')
        logger.log(res.data)
        AppState.comments = res.data
    }


}


export const commentsService = new CommentsService()
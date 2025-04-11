import prisma from "../config/db.config.js";
class ChatGroupController {
    static async store(req, res) {
        try {
            const body = req.body;
            const user = req.user;
            await prisma.chatGroup.create({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                    user_id: user.id
                }
            });
            res.json({
                status: 201,
                message: "ChatGroup Created"
            });
            return;
        }
        catch (error) {
            res.json({
                status: 500,
                message: "Something went wrong backend chatgroupcontroller"
            });
            return;
        }
    }
}
export default ChatGroupController;

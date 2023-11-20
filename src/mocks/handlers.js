import {rest, setupWorker} from "msw";

const handlers = [
    rest.get("/", (req,res,ctx) => {
        console.log("success")
        return res(
            ctx.json({
                message : "it works!"
            })
        )
})
]
export default handlers;
export const worker = setupWorker(...handlers);

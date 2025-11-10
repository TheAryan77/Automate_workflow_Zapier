import {Router} from "express"
import {authMiddleware} from "../middleware/auth"

const router = Router();

router.post("/", authMiddleware, (req, res) => {
    console.log("create zap")
})

router.get("/", authMiddleware, (req, res) => { 
    console.log("zap handler")  
})

router.get("/:zapId", authMiddleware, (req, res) => { 
    console.log("particular zap")  
})

export const zaprouter = router
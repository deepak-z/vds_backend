import { Router } from "express"
const router = Router()

import { verifyGoogleToken, verifyUser } from "../utility/middleware.js"

import { LogIn, GetUserStatistics } from "../controller/userController.js"
import { GetUserKycInfo, SaveUserKycInfo, VerifyUserKycInfo, VerifyUserSelfie, GetKycStatistics} from "../controller/kycController.js";
import { AddContract, ApproveTransaction, EstimateAcceptContractGasPrice, EstimateAddContractGasPrice,GetContractAdminOverallData, GetContractAdminDateData, ChangeContractCreatePrice } from "../controller/contractController.js"
import { sendEmail } from "../controller/emailController.js"

// Service Routes
router.get("/", (req, res) => {
    res.status(200).json({'message' : "Welcome to DocuSmriti Backend. Up and Running"})
})

// Email Routes
router.post("/mail",verifyGoogleToken,verifyUser(true,true), sendEmail)

// User Routes
router.post("/logIn", verifyGoogleToken, LogIn)

// Kyc Routes
router.get("/kyc",verifyGoogleToken,verifyUser(true,false), GetUserKycInfo)
router.post("/kyc",verifyGoogleToken,verifyUser(true,false),SaveUserKycInfo)
router.post("/verify-kyc",verifyGoogleToken,verifyUser(true,false), VerifyUserKycInfo)
router.post("/selfie",verifyGoogleToken,verifyUser(true,false), VerifyUserSelfie)

// Contract Routes
router.post("/addContract", verifyGoogleToken, verifyUser(true, true), AddContract)
router.get("/addContract/getQuote", verifyGoogleToken, verifyUser(true, true), EstimateAddContractGasPrice)
router.post("/acceptContract", verifyGoogleToken, verifyUser(true, true), ApproveTransaction)
router.get("/acceptContract/getQuote", verifyGoogleToken, verifyUser(true, true), EstimateAcceptContractGasPrice)

router.get("/admin/kyc", verifyGoogleToken, GetKycStatistics)
router.get("/admin/user", verifyGoogleToken, GetUserStatistics)

router.get("/admin/contract/overall",verifyGoogleToken,GetContractAdminOverallData)
router.post("/admin/contract/date",verifyGoogleToken, GetContractAdminDateData)
router.post("/admin/contract-create-price",verifyGoogleToken,ChangeContractCreatePrice)
export default router
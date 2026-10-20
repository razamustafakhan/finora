import Loan from "../models/Loan.js";
import LoanAccount from "../models/LoanAccount.js";

// ========================================
// CREATE LOAN APPLICATION
// ========================================
export const createLoanApplication = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      fatherName,
      employment,
      income,
      amount,
      time,
      timeUnit,
      purpose,
      address,
    } = req.body;

    const loan = await Loan.create({
      userId: req.user._id,

      fullName,
      phone,
      email,
      fatherName,

      employment,
      income,

      amount,
      time,
      timeUnit,
      purpose,

      address,
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: loan,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// GET USER LOAN APPLICATIONS
// ========================================
export const getUserLoanList = async (req, res) => {
  try {
    const loans = await Loan.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: loans.length,
      data: loans,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// GET ALL LOAN APPLICATIONS - ADMIN
// ========================================
export const loanApplicationList = async (req, res) => {
  try {
    const loans = await Loan.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: loans.length,
      data: loans,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createLoanAccount = async (req, res) => {
  try {
    const {
      loanApplicationId,
      fatherName,
      aadhaarNumber,
      approvedAmount,
      interestRate,
      processingFee,
      loanDuration,
      durationUnit,
      installmentFrequency,
      firstInstallmentDate,
      remarks,
    } = req.body;

    // ========================================
    // 1. BASIC VALIDATION
    // ========================================

    if (!loanApplicationId) {
      return res.status(400).json({
        success: false,
        message: "Loan application ID is required",
      });
    }

    if (!approvedAmount) {
      return res.status(400).json({
        success: false,
        message: "Approved amount is required",
      });
    }

    if (!interestRate) {
      return res.status(400).json({
        success: false,
        message: "Interest rate is required",
      });
    }

    if (!loanDuration) {
      return res.status(400).json({
        success: false,
        message: "Loan duration is required",
      });
    }

    if (!durationUnit) {
      return res.status(400).json({
        success: false,
        message: "Duration unit is required",
      });
    }

    if (!installmentFrequency) {
      return res.status(400).json({
        success: false,
        message: "Installment frequency is required",
      });
    }

    if (!firstInstallmentDate) {
      return res.status(400).json({
        success: false,
        message: "First installment date is required",
      });
    }

    // ========================================
    // 2. FIND LOAN APPLICATION
    // ========================================

    const loan = await Loan.findById(loanApplicationId);

    if (!loan) {
      return res.status(404).json({
        success: false,
        message: "Loan application not found",
      });
    }

    // ========================================
    // 3. CHECK LOAN ACCOUNT ALREADY EXISTS
    // ========================================

    const existingLoanAccount = await LoanAccount.findOne({
      loanApplicationId: loan._id,
    });

    if (existingLoanAccount) {
      return res.status(400).json({
        success: false,
        message: "Loan account already exists for this application",
      });
    }

    // ========================================
    // 4. CONVERT FORM DATA VALUES
    // ========================================

    const approved = Number(approvedAmount);
    const rate = Number(interestRate);
    const fee = Number(processingFee) || 0;
    const duration = Number(loanDuration);

    if (!Number.isFinite(approved) || approved <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid approved amount",
      });
    }

    if (!Number.isFinite(rate) || rate < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid interest rate",
      });
    }

    if (!Number.isFinite(fee) || fee < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid processing fee",
      });
    }

    if (!Number.isFinite(duration) || duration <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid loan duration",
      });
    }

    // ========================================
    // 5. CALCULATE INTEREST
    // ========================================

    const interestAmount = (approved * rate) / 100;

    // ========================================
    // 6. CALCULATE TOTAL PAYABLE
    // ========================================

    const totalPayableAmount = approved + interestAmount + fee;

    // ========================================
    // 7. CONVERT DURATION INTO MONTHS
    // ========================================

    let totalMonths = duration;

    if (durationUnit === "years") {
      totalMonths = duration * 12;
    }

    // ========================================
    // 8. CALCULATE INSTALLMENT COUNT
    // ========================================

    let installmentCount;

    switch (installmentFrequency) {
      case "monthly":
        installmentCount = totalMonths;
        break;

      case "quarterly":
        installmentCount = totalMonths / 3;
        break;

      case "yearly":
        installmentCount = totalMonths / 12;
        break;

      case "weekly":
        installmentCount = Math.ceil(totalMonths * 4.345);
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Invalid installment frequency",
        });
    }

    // ========================================
    // 9. VALIDATE INSTALLMENT COUNT
    // ========================================

    if (!Number.isFinite(installmentCount) || installmentCount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid installment count",
      });
    }

    // ========================================
    // 10. MAKE INSTALLMENT COUNT INTEGER
    // ========================================

    installmentCount = Math.ceil(installmentCount);

    // ========================================
    // 11. CALCULATE INSTALLMENT AMOUNT
    // ========================================

    const installmentAmount = totalPayableAmount / installmentCount;

    // ========================================
    // 12. DOCUMENTS
    // ========================================

    const photoFile = req.files?.photo?.[0];

    const proof1File = req.files?.proofDocument1?.[0];

    const proof2File = req.files?.proofDocument2?.[0];

    const photo = photoFile
      ? {
          data: photoFile.buffer,
          imageType: photoFile.mimetype,
          imageName: photoFile.originalname,
        }
      : undefined;

    const proofDocument1 = proof1File
      ? {
          data: proof1File.buffer,
          imageType: proof1File.mimetype,
          imageName: proof1File.originalname,
        }
      : undefined;

    const proofDocument2 = proof2File
      ? {
          data: proof2File.buffer,
          imageType: proof2File.mimetype,
          imageName: proof2File.originalname,
        }
      : undefined;

    // ========================================
    // 13. CREATE LOAN ACCOUNT
    // ========================================

    const loanAccount = await LoanAccount.create({
      loanApplicationId: loan._id,

      userId: loan.userId,

      // Applicant information
      fatherName: fatherName || loan.fatherName,
      aadhaarNumber,

      // Documents
      photo,
      proofDocument1,
      proofDocument2,

      // Loan amount
      requestedAmount: loan.amount,
      approvedAmount: approved,

      // Financial calculation
      interestRate: rate,
      interestAmount,

      processingFee: fee,

      totalPayableAmount,

      // Loan duration
      loanDuration: duration,
      durationUnit,

      // Installment
      installmentCount,
      installmentAmount,
      installmentFrequency,
      firstInstallmentDate,

      // Payment summary
      totalPaidAmount: 0,
      outstandingAmount: totalPayableAmount,

      // Account status
      status: "active",

      approvedAt: new Date(),

      remarks,
    });

    // ========================================
    // 14. UPDATE ORIGINAL LOAN APPLICATION
    // ========================================

    loan.status = "approved";

    loan.approvedBy = req.user._id;

    loan.approvedAt = new Date();

    loan.verificationStatus = "verified";

    loan.verifiedBy = req.user._id;

    loan.verifiedAt = new Date();

    await loan.save();

    // ========================================
    // 15. RESPONSE
    // ========================================

    return res.status(201).json({
      success: true,
      message: "Loan account created successfully",
      data: loanAccount,
    });
  } catch (error) {
    console.error("Create Loan Account Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ========================================
// GET PHOTO
// Display photo in UI
// ========================================

export const getPhoto = async (req, res) => {
  console.log("photo is runnung");
  try {
    const loanAccount = await LoanAccount.findById(req.params.id).select(
      "photo",
    );
    console.log(loanAccount);

    if (!loanAccount) {
      return res.status(404).json({
        success: false,
        message: "Loan account not found",
      });
    }

    if (!loanAccount.photo?.data) {
      return res.status(404).json({
        success: false,
        message: "Photo not found",
      });
    }

    res.set("Content-Type", loanAccount.photo.imageType || "image/jpeg");

    // Browser displays the image
    // res.setHeader(
    //   "Content-Disposition",
    //   `inline; filename="${loanAccount.photo.imageName || "photo"}"`,
    // );

    return res.send(loanAccount.photo.data);
  } catch (error) {
    console.error("Get Photo Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get photo",
      error: error.message,
    });
  }
};

// ========================================
// GET PROOF 1
// Download proof document
// ========================================

export const getProof1 = async (req, res) => {
  try {
    const loanAccount = await LoanAccount.findById(req.params.id).select(
      "proofDocument1",
    );

    if (!loanAccount) {
      return res.status(404).json({
        success: false,
        message: "Loan account not found",
      });
    }

    if (!loanAccount.proofDocument1?.data) {
      return res.status(404).json({
        success: false,
        message: "Proof document 1 not found",
      });
    }

    res.setHeader(
      "Content-Type",
      loanAccount.proofDocument1.imageType || "application/octet-stream",
    );

    // Browser downloads the file
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${loanAccount.proofDocument1.imageName || "proof-1"}"`,
    );

    return res.send(loanAccount.proofDocument1.data);
  } catch (error) {
    console.error("Get Proof 1 Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get proof document 1",
      error: error.message,
    });
  }
};

// ========================================
// GET PROOF 2
// Download proof document
// ========================================

export const getProof2 = async (req, res) => {
  try {
    const loanAccount = await LoanAccount.findById(req.params.id).select(
      "proofDocument2",
    );

    if (!loanAccount) {
      return res.status(404).json({
        success: false,
        message: "Loan account not found",
      });
    }

    if (!loanAccount.proofDocument2?.data) {
      return res.status(404).json({
        success: false,
        message: "Proof document 2 not found",
      });
    }

    res.setHeader(
      "Content-Type",
      loanAccount.proofDocument2.imageType || "application/octet-stream",
    );

    // Browser downloads the file
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${loanAccount.proofDocument2.imageName || "proof-2"}"`,
    );

    return res.send(loanAccount.proofDocument2.data);
  } catch (error) {
    console.error("Get Proof 2 Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get proof document 2",
      error: error.message,
    });
  }
};

export const getLoanAccountList = async (req, res) => {
  try {
    const accounts = await LoanAccount.find()
      .populate({
        path: "loanApplicationId",
        select:
          "applicationNumber fullName phone email fatherName employment income amount time timeUnit purpose address status verificationStatus",
      })
      .select("-photo -proofDocument1 -proofDocument2")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: accounts.length,
      data: accounts,
    });
  } catch (error) {
    console.error("Get Loan Account List Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get loan account list",
      error: error.message,
    });
  }
};

// export const getProof1 = async (req, res) => {
//   const loan = await LoanAccount.findById(req.params.id).select(
//     "proofDocument1",
//   );

//   if (!loan?.proofDocument1) {
//     return res.status(404).json({ message: "Proof 1 not found" });
//   }

//   res.set("Content-Type", "image/jpeg");
//   return res.send(loan.proofDocument1.data);
// };

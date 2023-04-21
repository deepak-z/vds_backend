const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"stateMutability": "nonpayable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "ContractCreatePrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ContractCreatorMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "ContractsMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "Category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "StartDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "EndDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CreateDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "IPFSURI",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_st_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_end_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_createdate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_SHA256",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_IPFSURI",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_addresses",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "_emails",
				"type": "string[]"
			}
		],
		"name": "addContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_aadhaarNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_aadhaarFrontURL",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_aadhaarBackURL",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_selfieURL",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_createDate",
				"type": "string"
			}
		],
		"name": "addUserKycInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "addressesInvoledInContractMap",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_sha256",
				"type": "string"
			}
		],
		"name": "approveTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "emailsInvolvedInContractMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllInvitedContracts",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_SHA256",
				"type": "string"
			}
		],
		"name": "getContract",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Category",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Desc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "StartDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "EndDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CreateDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "IPFSURI",
						"type": "string"
					}
				],
				"internalType": "struct CreateContract.structContractInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_sha256",
				"type": "string"
			}
		],
		"name": "getContractInfo",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "bool[]",
				"name": "",
				"type": "bool[]"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractbyCreator",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "getContractsCount_address",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "getUserKycInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "FirstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "LastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "DOB",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "AadhaarNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "AadhaarFrontURL",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "AadhaarBackURL",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "SelfieURL",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CreateDate",
						"type": "string"
					}
				],
				"internalType": "struct CreateContract.userKycInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "isConfirmed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "signatureNeededMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export default abi
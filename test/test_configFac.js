const TokenFactory = artifacts.require('TokenFactory');

const bytes = "0x6080604052604051620017a6380380620017a6833981016040819052620000269162000291565b600462000034848262000392565b50600562000043838262000392565b5060038190556040516200005790620001be565b604051809103906000f08015801562000074573d6000803e3d6000fd5b50600680546001600160a01b0319166001600160a01b0392909216919091179055600354620000a5903390620000f1565b3415620000e8576006546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015620000e6573d6000803e3d6000fd5b505b50505062000486565b6001600160a01b0382166200014c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600360008282546200016091906200045e565b90915550506001600160a01b0382166000818152600160209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b6101b780620015ef83390190565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001f457600080fd5b81516001600160401b0380821115620002115762000211620001cc565b604051601f8301601f19908116603f011681019082821181831017156200023c576200023c620001cc565b816040528381526020925086838588010111156200025957600080fd5b600091505b838210156200027d57858201830151818301840152908201906200025e565b600093810190920192909252949350505050565b600080600060608486031215620002a757600080fd5b83516001600160401b0380821115620002bf57600080fd5b620002cd87838801620001e2565b94506020860151915080821115620002e457600080fd5b50620002f386828701620001e2565b925050604084015190509250925092565b600181811c908216806200031957607f821691505b6020821081036200033a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001b957600081815260208120601f850160051c81016020861015620003695750805b601f850160051c820191505b818110156200038a5782815560010162000375565b505050505050565b81516001600160401b03811115620003ae57620003ae620001cc565b620003c681620003bf845462000304565b8462000340565b602080601f831160018114620003fe5760008415620003e55750858301515b600019600386901b1c1916600185901b1785556200038a565b600085815260208120601f198616915b828110156200042f578886015182559484019460019091019084016200040e565b50858210156200044e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200048057634e487b7160e01b600052601160045260246000fd5b92915050565b61115980620004966000396000f3fe6080604052600436106101025760003560e01c8063313ce56711610095578063a9059cbb11610064578063a9059cbb146102b9578063aa6764dc146102d9578063dd62ed3e146102e1578063faa743e314610327578063fea9dbbf1461034757600080fd5b8063313ce5671461023f57806351c6590a1461025b57806370a082311461026e57806395d89b41146102a457600080fd5b8063095ea7b3116100d1578063095ea7b3146101ca57806311106ee2146101ea57806318160ddd1461020a57806323b872dd1461021f57600080fd5b806301ffc9a71461011657806304c0c4761461014b57806306fdde031461016f5780630902f1ac1461019157600080fd5b366101115761010f610366565b005b600080fd5b34801561012257600080fd5b50610136610131366004610eea565b6103e6565b60405190151581526020015b60405180910390f35b34801561015757600080fd5b5061016160005481565b604051908152602001610142565b34801561017b57600080fd5b5061018461041d565b6040516101429190610f1b565b34801561019d57600080fd5b506101b5306000908152600160205260409020544791565b60408051928352602083019190915201610142565b3480156101d657600080fd5b506101366101e5366004610f85565b6104af565b3480156101f657600080fd5b50610161610205366004610faf565b6104c7565b34801561021657600080fd5b50600354610161565b34801561022b57600080fd5b5061013661023a366004610fe4565b610528565b34801561024b57600080fd5b5060405160128152602001610142565b61010f610269366004611020565b61054c565b34801561027a57600080fd5b50610161610289366004611039565b6001600160a01b031660009081526001602052604090205490565b3480156102b057600080fd5b50610184610665565b3480156102c557600080fd5b506101366102d4366004610f85565b610674565b61010f6106a8565b3480156102ed57600080fd5b506101616102fc366004611054565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b34801561033357600080fd5b5061010f610342366004611020565b610769565b34801561035357600080fd5b506006546001600160a01b031631610161565b306000908152600160205260408120544790610382903461109d565b61038c91906110b4565b90506103993033836108fe565b604080513481526000602082018190528183015260608101839052905133917f49926bbebe8474393f434dfa4f78694c0923efa07d19f2284518bfabd06eb737919081900360800190a250565b60006001600160e01b031982166301ffc9a760e01b148061041757506001600160e01b03198216635b3db1e760e11b145b92915050565b60606004805461042c906110d6565b80601f0160208091040260200160405190810160405280929190818152602001828054610458906110d6565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b5050505050905090565b6000336104bd818585610aba565b5060019392505050565b60008060006104e3306000908152600160205260409020544791565b915091508315610514576104f78583611110565b610501828761109d565b61050b91906110b4565b92505050610417565b61051e8582611110565b610501838761109d565b600033610536858285610bd6565b6105418585856108fe565b506001949350505050565b600054156105a15760405162461bcd60e51b815260206004820152601760248201527f4c697175696469747920616c726561647920616464656400000000000000000060448201526064015b60405180910390fd5b600034116105df5760405162461bcd60e51b815260206004820152600b60248201526a139bc8115512081cd95b9d60aa1b6044820152606401610598565b8043106106255760405162461bcd60e51b8152602060048201526014602482015273426c6f636b206e756d62657220746f6f206c6f7760601b6044820152606401610598565b6000819055604080518281523460208201527fcb1652de9aeec38545fc281847b3dbfc89aab56dfa907b1ab68466f602c36fb4910160405180910390a150565b60606005805461042c906110d6565b6000306001600160a01b038416036106945761068f82610c68565b61069f565b61069f3384846108fe565b50600192915050565b600034116106f85760405162461bcd60e51b815260206004820152601960248201527f656e68616e63652076616c75652073686f756c642067742030000000000000006044820152606401610598565b6006546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610731573d6000803e3d6000fd5b5060405134815233907f8afa789178083b5e769bf1688be9b3cb5bb4051efbce39835efdc8b3e84dfc9c9060200160405180910390a2565b336000908152600160205260409020548111156107bf5760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b6044820152606401610598565b6000811161080f5760405162461bcd60e51b815260206004820152601c60248201527f726574726976652076616c75652073686f756c642062652067742030000000006044820152606401610598565b6000600354116108615760405162461bcd60e51b815260206004820152601b60248201527f546f74616c20737570706c792063616e6e6f74206265207a65726f00000000006044820152606401610598565b600354600654600091906108809084906001600160a01b03163161109d565b61088a91906110b4565b90506108963383610db6565b60065460405163055d478960e01b8152336004820152602481018390526001600160a01b039091169063055d478990604401600060405180830381600087803b1580156108e257600080fd5b505af11580156108f6573d6000803e3d6000fd5b505050505050565b336000908152600760205260409020544363ffffffff9091160361097e5760405162461bcd60e51b815260206004820152603160248201527f596f752063616e2774206d616b652074776f207472616e73616374696f6e7320604482015270696e207468652073616d6520626c6f636b60781b6064820152608401610598565b336000908152600760209081526040808320805463ffffffff19164363ffffffff161790556001600160a01b03861683526001909152902054811115610a155760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610598565b6001600160a01b038084166000908152600160205260409020805483900390558216610a4957600380548290039055610a68565b6001600160a01b03821660009081526001602052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610aad91815260200190565b60405180910390a3505050565b6001600160a01b038316610b1c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610598565b6001600160a01b038216610b7d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610598565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259101610aad565b6001600160a01b038381166000908152600260209081526040808320938616835292905220546000198114610c625781811015610c555760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610598565b610c628484848403610aba565b50505050565b30600090815260016020526040812054610c83908390611110565b610c8d478461109d565b610c9791906110b4565b905060008111610cdf5760405162461bcd60e51b815260206004820152601360248201527253656c6c20616d6f756e7420746f6f206c6f7760681b6044820152606401610598565b80471015610d2f5760405162461bcd60e51b815260206004820152601c60248201527f496e73756666696369656e742045544820696e207265736572766573000000006044820152606401610598565b610d3a3330846108fe565b604051339082156108fc029083906000818181858888f19350505050158015610d67573d6000803e3d6000fd5b50604080516000808252602082018590528183018490526060820152905133917f49926bbebe8474393f434dfa4f78694c0923efa07d19f2284518bfabd06eb737919081900360800190a25050565b6001600160a01b038216610e165760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610598565b6001600160a01b03821660009081526001602052604090205481811015610e8a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610598565b6001600160a01b03831660008181526001602090815260408083208686039055600380548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b600060208284031215610efc57600080fd5b81356001600160e01b031981168114610f1457600080fd5b9392505050565b600060208083528351808285015260005b81811015610f4857858101830151858201604001528201610f2c565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610f8057600080fd5b919050565b60008060408385031215610f9857600080fd5b610fa183610f69565b946020939093013593505050565b60008060408385031215610fc257600080fd5b8235915060208301358015158114610fd957600080fd5b809150509250929050565b600080600060608486031215610ff957600080fd5b61100284610f69565b925061101060208501610f69565b9150604084013590509250925092565b60006020828403121561103257600080fd5b5035919050565b60006020828403121561104b57600080fd5b610f1482610f69565b6000806040838503121561106757600080fd5b61107083610f69565b915061107e60208401610f69565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761041757610417611087565b6000826110d157634e487b7160e01b600052601260045260246000fd5b500490565b600181811c908216806110ea57607f821691505b60208210810361110a57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156104175761041761108756fea264697066735822122079c3caa48a36ad6001b6689f1d2aabb5720a30c55f81609c5039e8fb09a0c83864736f6c634300081400336080604052600080546001600160a01b03191633179055610192806100256000396000f3fe6080604052600436106100225760003560e01c8063055d47891461002e57600080fd5b3661002957005b600080fd5b34801561003a57600080fd5b5061004e610049366004610124565b610050565b005b6000546001600160a01b031633146100a25760405162461bcd60e51b815260206004820152601060248201526f1ad9595c195c8818d85b88191bc81a5d60821b60448201526064015b60405180910390fd5b804710156100e95760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b6044820152606401610099565b6040516001600160a01b0383169082156108fc029083906000818181858888f1935050505015801561011f573d6000803e3d6000fd5b505050565b6000806040838503121561013757600080fd5b82356001600160a01b038116811461014e57600080fd5b94602093909301359350505056fea26469706673582212204da463089ed15e6caefd00813128076295ea7a2de206b27c01d7daeb5c93de8f64736f6c63430008140033";

contract('Config TokenFactory', (accounts) => {
    describe("config", function() {

        it(`should return Name:`, async () => {
            let factoryInstance = await TokenFactory.at('0x11eF021B9f9EC8281E648B1A79A023bEf1F06cA2')
            
            const codeHash = web3.utils.keccak256(bytes)
            console.log('codeHash ', codeHash);

            console.log('setting new code hash...')
            const setresult = await factoryInstance.configCode(codeHash, true)
            console.log('set result:', setresult)

            
            const existTpls = await factoryInstance.getTpls()
            console.log(existTpls)

            const readResult = await factoryInstance.securityCodes(codeHash)
            console.log(readResult)

            // 0xd459f38453570b16c156ca82f8814e8bcfc3a8e882646d8a7f744a683549e0c4



            // const owner = await novaProxyInstance.owner();
            // const impl = await novaProxyInstance.getImplementation()
            // const novaLogicInstanceAtProxyAddress = new web3.eth.Contract(NovaRouter.abi, novaProxyInstance.address);

            // await novaLogicInstanceAtProxyAddress.methods.initialize().send({ from: accounts[0], gasPrice:8000000000, gas:5000000 });
            // const selltax = await novaLogicInstanceAtProxyAddress.methods.sellTax().call()
            // console.log('owner', owner)
            // console.log('impl', impl)
            // console.log('sell tax', selltax)
            // console.log('accounts', accounts)

            // const result = await novaLogicInstanceAtProxyAddress.methods.adjustTax(20, 20).send({ from: accounts[0], gasPrice:8000000000, gas:5000000 });
            // console.log('adjust tax result', result)
            
            // const result = await novaLogicInstanceAtProxyAddress.methods.reinitialize(500000).send({ from: accounts[0], gasPrice:8000000000, gas:5000000 });
            // console.log('adjust reinitialize result', result)
            // novaLogicInstanceAtProxyAddress.methods.
        });
    })
  
});

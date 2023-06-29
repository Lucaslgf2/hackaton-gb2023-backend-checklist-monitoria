const onGenerateStart = require("./onGenerateStart");
const { default: axios } = require('axios')

jest.mock('axios')

describe('Get Domain Info', function() {

  const contex =  {
    parameters: {
      domain: "test"
    }
  }

  afterEach(() => {
    jest.clearAllMocks()
    delete contex.parameters.domainInfo
  })



  test("should get domain infos correctly", async () => {
    axios.get.mockImplementation(() => Promise.resolve({
      data: {
        "aws":{
          "dev":{
             "security-groups": ""
          },
          "hml":{
             "security-groups": ""
          },
          "prd":{
             "security-groups": ""
          }
       }
      }
   }))

    await onGenerateStart(contex)

    expect(contex.parameters.domainInfo).toBeTruthy()
  });

  test("should throw an error if status code is 404", async () => {
   axios.get.mockImplementation(() => Promise.reject({
      response: {
        status: 404
      }
   }))

    await expect(onGenerateStart(contex)).rejects.toThrow('Could not load domain info for test')
  });

  test("should throw an error if code is ECONNABORTED", async () => {
    axios.get.mockImplementation(() => Promise.reject({
      code: 'ECONNABORTED'
    }))

    await expect(onGenerateStart(contex)).rejects.toThrow('Could not load domain info for test. Be sure to be connect on VPN before use this template.')
   });

   test("should throw an error if any of before conditions", async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error()))

    await expect(onGenerateStart(contex)).rejects.toThrow(Error)
   });

})


describe('Format Vpc', function() {
  test("if enableVpc is not defined the parameter has to receive true", async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: {}}))

    const contex =  {
      parameters: {
        domain: "test"
      }
    }

    await onGenerateStart(contex)

    expect(contex.parameters.enableVpc).toBeTruthy()
  })

  test("if enableVpc is already defined, nothing gonna happen", async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: {}}))

    const contex =  {
      parameters: {
        domain: "test",
        enableVpc: false
      }
    }

    await onGenerateStart(contex)

    expect(contex.parameters.enableVpc).toBeFalsy()
  })
})

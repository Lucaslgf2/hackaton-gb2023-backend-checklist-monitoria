const handler = require('../src/defaultFunction')

test("Should get 'Welcome to PDD' value", async () => {
  const resultRequest = await handler.handler(null)

  expect(resultRequest).not.toBeNull()
  expect(resultRequest).toHaveProperty('body')

  const bodyContent = JSON.parse(resultRequest.body)
  expect(bodyContent).not.toBeNull()
  expect(bodyContent).toHaveProperty('message')
  expect(bodyContent).toHaveProperty('message', 'Welcome to PDD!')
})

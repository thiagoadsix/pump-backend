export const dateMock = (): void => {
  const mockDate = new Date(1640995200000)
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
}

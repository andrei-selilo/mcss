class Service {
  /**
   * Restores stubs if possible
   *
   * @params stubsObject stubs storage object
   * @params stubsKeys
   */
  restoreStubs(stubsObject, stubsKeys) {
    stubsKeys = stubsKeys || Object.keys(stubsObject)
    stubsKeys.forEach((stubKey) => {
      try {
        stubsObject[stubKey].restore()
      } catch (e) {
        console.log(e)
      }
    })
  }
}

export const UtilsService = new Service()
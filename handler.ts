"use strict"

module.exports.hello = async (event) => {
  console.log("test", process.env.myStage)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully dev",
      },
      null,
      2
    ),
  }
}

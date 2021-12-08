// eslint-disable-next-line import/no-extraneous-dependencies
import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const updateSingle: AzureFunction = async (
  context: Context,
  req: HttpRequest
): Promise<void> => {
  context.log("Typescript HTTP trigger function processed a request.")

  if (req.query.name || req.body?.name) {
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: `Hello ${req.query.name || req.body.name}`,
    }
  } else {
    context.res = {
      status: 400,
      body: "Please pass a name on the query string or in the request body",
    }
  }
}

export default updateSingle

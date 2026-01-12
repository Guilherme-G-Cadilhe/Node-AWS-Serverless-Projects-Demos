import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../ddbClient.js";

export const params = {
  TableName: "product",
  Key: {
    id: { N: "1" } // Primary key of the item to update
  },
  UpdateExpression: "SET productName = :newval",
  ExpressionAttributeValues: {
    ":newval": { S: "updated iphone name" }
  },
  ReturnValues: "ALL_NEW" // Returns the new values of the updated attributes
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new UpdateItemCommand(params));
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}
run();
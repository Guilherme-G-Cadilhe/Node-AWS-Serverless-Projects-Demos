import { UnsubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "../snsClient.js";

const params = {
  SubscriptionArn: "arn:aws:sns:us-east-1:640493677212:new-topic"
};

export const run = async () => {
  try {
    const data = await snsClient.send(new UnsubscribeCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();
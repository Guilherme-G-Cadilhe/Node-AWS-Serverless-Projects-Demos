import { SubscribeCommand } from "@aws-sdk/client-sns";
import { snsClient } from "../snsClient.js";

const params = {
  Protocol: "email",
  TopicArn: "arn:aws:sns:us-east-1:640493677212:new-topic",
  Endpoint: "pejoka1518@ixospace.com"
};

export const run = async () => {
  try {
    const data = await snsClient.send(new SubscribeCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();
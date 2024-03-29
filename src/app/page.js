"use client";
import { Ach, ApplePay, CreditCard, GooglePay, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "./actions/actions";

export default function Home() {
  // Replace with your application ID and location ID
  // it should be in environment variable 
  const appId = "sandbox-sq0idb-__hdW1VQJ2qsvAOlvqlGGA";
  const locationId = "LDFRP782QA4Y9";

  return (
    <PaymentForm
    createPaymentRequest={() => ({
      countryCode: "US",
      currencyCode: "USD",
      total: {
        amount: "100.00",
        label: "Total",
      },
    })}
      applicationId={appId}
      locationId={locationId}
      cardTokenizeResponseReceived={async (token) => {
        const result = await submitPayment(token.token);
        console.log(result);
        if(result.payment.status === "COMPLETED")
        alert("Successfully Paid");
      else
      alert("Something Went Wrong Try Again");
      }}
    >
      <CreditCard />
      <GooglePay />
      <Ach 
      accountHolderName="Saad khan"
      />
      {/* <ApplePay />    */}
    </PaymentForm>
  );
}

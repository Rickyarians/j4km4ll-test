import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import Col from "../../component/base/Col";
import Row from "../../component/base/Row";
import Box from "../../component/box/Box";
import Button from "../../component/button/Button";
import Input from "../../component/form/Input";
import { Heading1, Heading2 } from "../../component/heading/heading";
import SummaryCard from "../../component/summary/SummaryCard";
import SummaryItem from "../../component/summary/SummeryItem";
import { createOrderId, getEstimation, getFee, getLabel, getPaymentLabel } from "../../helper";

// COMPONENT //
const StepTwo = (props : any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      shipment: "gosend",
      payment: "e-wallet",
      orderId: createOrderId(),
    },
  });

  const shipmentValue = useWatch({ control, name: "shipment" });
  const paymentValue = useWatch({ control, name: "payment" });

  const onSubmit = (data: any, e : any) => {
    e.preventDefault();
    props.setSummary((s : any) => ({
      ...s,
      shipment: {
        label: (
          <>
            <b>{getLabel(shipmentValue)}</b> shipment
          </>
        ),
        value: getFee(shipmentValue),
      },
    }));
    props.continueForm(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "4rem" }}>
        <Row>
          <Col size="9">
            <Row gap>
              <Col size="12">
                <Heading1>Shipment</Heading1>
                <Input
                  type="radio"
                  name="shipment"
                  control={control}
                  errors={errors}
                  options={[
                    {
                      label: "GO-SEND",
                      fee: 15000,
                      value: "gosend",
                    },
                    {
                      label: "JNE",
                      fee: 9000,
                      value: "jne",
                    },
                    {
                      label: "Personal Courier",
                      fee: 29000,
                      value: "personal-courier",
                    },
                  ]}
                />
              </Col>
            </Row>

            <Row gap>
              <Col size="12">
                <Heading1>Payment</Heading1>
                <Input
                  type="radio"
                  name="payment"
                  control={control}
                  errors={errors}
                  options={[
                    {
                      label: "e-Wallet",
                      balance: 1500000,
                      value: "e-wallet",
                    },
                    {
                      label: "Bank Transfer",
                      value: "bank",
                    },
                    {
                      label: "Virtual Account",
                      value: "virtual-account",
                    },
                  ]}
                />
              </Col>
            </Row>
          </Col>

          <Col size="3">
            <SummaryCard>
              <div>
                <Heading2>Summary</Heading2>
                <p>{props.summary.totalItems.value} Items Purchased</p>
                <SummaryItem
                  label="Delivery Estimation"
                  value={`${getEstimation(shipmentValue)} by ${getLabel(
                    shipmentValue
                  )}`}
                />
              </div>
              <div>
                {Object.keys(props.summary).map((summary) =>
                  summary !== "totalItems" ? (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      key={summary + "-summary-items"}
                    >
                      <p>{props.summary[summary].label}</p>
                      <div className="font-weight-600">
                        {props.summary[summary].value.toLocaleString("en-US")}
                      </div>
                    </Box>
                  ) : (
                    ""
                  )
                )}

                <Box display="flex" justifyContent="space-between">
                  <p>
                    <b>{getLabel(shipmentValue)}</b> shipment
                  </p>
                  <div className="font-weight-600">
                    {getFee(shipmentValue).toLocaleString("en-US")}
                  </div>
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Heading2>Total</Heading2>
                  <Heading2>
                    {(
                      Object.values(props.summary)
                        .map((summary: any) => summary.value)
                        .reduce((a, b) => a + b) -
                      props.summary.totalItems.value
                    ).toLocaleString("en-US")}
                  </Heading2>
                </Box>

                <Button type="submit">
                  Pay With {getPaymentLabel(paymentValue)}
                </Button>
              </div>
            </SummaryCard>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default StepTwo;

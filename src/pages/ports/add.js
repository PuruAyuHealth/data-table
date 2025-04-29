import { createItem } from "@/pages/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PortForm from "../../../Component/Forms/PortFrom";
import FormWrapper from "../../../Component/FormWrapper";

function Add() {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { push } = useRouter();

  const handleSubmit = async (values) => {
    try {
      setIsSubmiting(true);
      await createItem({ ...values });
      push("/");
    } catch (err) {
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <FormWrapper title={"Add Port Data"}>
      <PortForm
        initialValues={{}}
        isSubmiting={isSubmiting}
        onSubmit={handleSubmit}
      />
    </FormWrapper>
  );
}

export default Add;

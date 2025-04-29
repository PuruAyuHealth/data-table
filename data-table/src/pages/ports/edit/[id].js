import { fetchItemsById, updateItem } from "@/pages/api";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PortForm from "../../../../Component/Forms/PortFrom";
import FormWrapper from "../../../../Component/FormWrapper";

function Edit() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { query: { id } = {}, push } = useRouter();

  const handleSubmit = async (values) => {
    try {
      setIsSubmiting(true);
      await updateItem(id, { ...data, ...values });
      push("/");
    } catch (err) {
    } finally {
      setIsSubmiting(false);
    }
  };

  const getPortDataById = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetchItemsById(id);
      setData(res);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      getPortDataById(id);
    }
  }, [id]);

  if (!id) return;

  return (
    <FormWrapper title={`Edit Port Data for id - ${id}`}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <PortForm
          initialValues={data}
          isSubmiting={isSubmiting}
          onSubmit={handleSubmit}
        />
      )}
    </FormWrapper>
  );
}

export default Edit;

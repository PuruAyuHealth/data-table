import { Form, Input, Button, Row, Col } from "antd";

export default function PortForm({
  initialValues = {},
  onSubmit,
  isSubmiting,
}) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const { longitude, latitude, ...rest } = values;
    const finalData = {
      ...rest,
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
    };
    if (onSubmit) {
      onSubmit(finalData);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        ...initialValues,
        longitude: initialValues.coordinates?.[0],
        latitude: initialValues.coordinates?.[1],
      }}
      onFinish={handleFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input the port name!" }]}
      >
        <Input placeholder="Enter port name" />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please input the city!" }]}
      >
        <Input placeholder="Enter city" />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: "Please input the country!" }]}
      >
        <Input placeholder="Enter country" />
      </Form.Item>

      <Form.Item
        label="Province"
        name="province"
        rules={[{ required: true, message: "Please input the province!" }]}
      >
        <Input placeholder="Enter province" />
      </Form.Item>

      <Form.Item
        label="Timezone"
        name="timezone"
        rules={[{ required: true, message: "Please input the timezone!" }]}
      >
        <Input placeholder="Enter timezone" />
      </Form.Item>

      <Form.Item
        label="Code"
        name="code"
        rules={[{ required: true, message: "Please input the port code!" }]}
      >
        <Input placeholder="Enter port code" />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Longitude"
            name="longitude"
            rules={[{ required: true, message: "Please input longitude!" }]}
          >
            <Input placeholder="Enter longitude" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Latitude"
            name="latitude"
            rules={[{ required: true, message: "Please input latitude!" }]}
          >
            <Input placeholder="Enter latitude" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: 300,
          }}
          loading={isSubmiting}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

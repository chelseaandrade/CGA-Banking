import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Button, Image, Input, Form, Row, Col, message, Spin, Card,
} from 'antd';
import LoginWithGoogle from '../../components/googleLogin/GoogleLogin';
import { Login } from '../../services/auth';

function Index() {
  const router = useRouter();

  const { mutate, isLoading } = useMutation((data) => Login(data), {
    onSuccess: (res) => {
      localStorage.setItem('finance-management', JSON.stringify(res));
      router.push('/deposit');
    },
    onError: (err) => {
      console.log(err)
      message.error(err?.response?.data?.message);
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem('finance-banking');
    if (isAuth) {
      router.push('/deposit');
    }
    return () => {};
  }, [router]);

  return (
    <Row className="flex !text-gray-500 font-bold w-full h-[100vh]  overflow-hidden">
      <Col span={24} className="h-[100vh] relative">
        <div className="tablet:hidden mx-auto w-full h-[100vh]">
          <div className="absolute h-full w-full bg-[rgba(0,0,0,0.35)] -z-10 " />
          <Image
            preview={false}
            className="object-cover absolute -z-20  blur-[2px]"
            width="100%"
            height="100%"
            src="/assets/images/coins.png"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="w-full h-[100vh] flex justify-center items-center">
            <Card className="max-w-[500px] w-full">
              <Spin
                spinning={isLoading}
                className="flex justify-center items-center w-full h-full"
              >
                <h1 className="text-center py-6">CGA Banking Login</h1>
                <Form
                  name="basic"
                  onFinish={onFinish}
                  layout="vertical"
                  className="flex justify-center items-center flex-col w-full px-[20px]"
                  autoComplete="new-password"
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    className="w-full max-w-[310px] custom-label login_input"
                    rules={[
                      { required: true, message: 'Please enter your email!' },
                    ]}
                  >
                    <Input
                      type="email"
                      className="w-full !text-gray-500 border-hidden shadow-sm"
                      placeholder="Enter email"
                      autoComplete="new-password"
                    />
                  </Form.Item>

                  <Form.Item
                    className="w-full max-w-[310px] custom-label login_input text-center"
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: 'Please enter your password!' },
                    ]}
                  >
                    <Input.Password
                      className="w-full !text-gray-500 border-hidden shadow-sm"
                      placeholder="Enter password"
                      autoComplete="new-password"
                    />
                  </Form.Item>

                  <Form.Item className="w-full form_alignment text-center">
                    <Button
                      className="bg-purple-600 !text-white max-w-[310px] w-full font-bold hover:!bg-purple-600 hover:!text-white"
                      htmlType="submit"
                      type="text"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      {isLoading ? 'Login...' : 'Login'}
                    </Button>
                  </Form.Item>
                  <LoginWithGoogle />
                </Form>
                <div className="text-center mt-6"><Link href="/signup">Create a new account</Link></div>
              </Spin>
            </Card>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Index;

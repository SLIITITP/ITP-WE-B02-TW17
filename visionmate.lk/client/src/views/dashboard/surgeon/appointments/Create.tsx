import TextArea from "antd/lib/input/TextArea";
import React, {useEffect, useState} from 'react';
import {Form, Row, Col, Button, Input} from 'antd';
import {FormLayout} from '../../../../components/forms/Form';
import {Main} from '../../../../components/styled-components/styled-containers';
import {PageHeader} from '../../../../components/breadcrumbs/DashboardBreadcrumb';
import {HouseDoor} from "react-bootstrap-icons";
import IAppointment from "../../../../models/Appointment";
import Spectacle from "../../../../models/Spectacle";
import {useParams} from "react-router-dom";


function AppointmentCreate({enableEdit}: { enableEdit: boolean }) {
    const {spectacle: spectacle_id} = useParams();
    const [appointment, setAppointment] = useState<IAppointment | null>(null);
    const onFinish = (values: Spectacle) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        console.log(appointment)
        // get spectacle
    }, [appointment, spectacle_id])

    const items = [
        {
            title: <div className="d-flex align-items-center"><HouseDoor/> &nbsp; Home</div>,
            href: '/surgeon',
        },
        {
            title: 'Appointments Create',
        },
    ];

    return (
        <>
            <PageHeader className="ninjadash-page-header-main" title="Create Appointment" routes={items}/>
            <Main>
                <Row gutter={25}>
                    <Col md={6} lg={12} xs={24}>
                        <FormLayout title="Enter Appointment Information" initialValues={appointment} onSubmit={onFinish} onFinishFailed={onFinishFailed}>
                            <Form.Item className="mb-2" name="title" label="Title" rules={[{required: true, message: 'Please input title!'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item className="mb-2" name="description" label="Description" rules={[{required: true, message: 'Please input description!'}]}>
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item className="mb-2" name="tags" label="Tags" rules={[{required: true, message: 'Please input tags!'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item className="mb-2" name="reference" label="Reference" rules={[{required: true, message: 'Please input reference!'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item className="mb-2" name="notes" label="Notes" rules={[{required: true, message: 'Please input notes!'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item className="mb-2" name="appointmentDate" label="Appointment Date" rules={[{required: true, message: 'Please input appointment date!'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item className="mb-2" name="duration" label="Duration" rules={[{required: true, message: 'Please input duration!'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item className="ninjadash-form-action">
                                <Button className="btn-signin" type="primary" htmlType="submit" size="large">
                                    Save
                                </Button>
                            </Form.Item>
                        </FormLayout>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default AppointmentCreate;

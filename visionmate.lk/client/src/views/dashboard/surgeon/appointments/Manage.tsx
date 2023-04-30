import React, { ReactNode, useEffect, useState } from 'react';
import {Button, Col, Row, Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {PageHeader} from "../../../../components/breadcrumbs/DashboardBreadcrumb";
import {HouseDoor, Pencil, Plus, Trash2} from "react-bootstrap-icons";
import {BorderLessHeading, Main} from "../../../../components/styled-components/styled-containers";
import {Cards} from "../../../../components/cards/frame/CardFrame";
import DataTable from "../../../../components/tables/DataTable";
import {Link} from "react-router-dom";
import IAppointment from "../../../../models/Appointment";
import { AppointmentService } from "../../../../services/AppointmentService";

interface DataType {
    key: React.Key;
    title: string;
    description: string;
    tags: string;
    reference: string;
    notes: string;
    status: string;
    patientId: string;
    doctorId: string;
    appointmentDate: string;
    duration: string;
    invoiceId: string;
    action: ReactNode;
}

const dataTableColumn: ColumnsType<DataType> = [
    {
        title: 'title',
        width: 100,
        dataIndex: 'title',
        key: 'title',
        // sorter: (a, b) => a.title - b.title,
    },
    {
        title: 'description',
        width: 100,
        dataIndex: 'description',
        key: 'description',
    },
    {title: 'tags', dataIndex: 'address', key: '1'},
    {title: 'reference', dataIndex: 'address', key: '2'},
    {title: 'notes', dataIndex: 'address', key: '3'},
    {title: 'status', dataIndex: 'address', key: '4'},
    {title: 'patientId', dataIndex: 'address', key: '5'},
    {title: 'doctorId', dataIndex: 'address', key: '6'},
    {title: 'appointmentDate', dataIndex: 'address', key: '7'},
    {title: 'duration', dataIndex: 'address', key: '8'},
    {title: 'invoiceId', dataIndex: 'address', key: '9'},
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'operation',
        width: 100,
    },
];

const tableDataSource: DataType[] = [
    {
        key: '1',
        title: 'title',
        description: 'description',
        tags: 'tags',
        reference: 'reference',
        notes: 'notes',
        status: 'status',
        patientId: 'patientId',
        doctorId: 'doctorId',
        appointmentDate: 'appointmentDate',
        duration: 'duration',
        invoiceId: 'invoiceId',
        action: (
            <div className="table-actions">
                <Link className="btn btn-sm btn-warning text-white me-1" to="/surgeon/appointments/644cc13e5bfb877d576f7b2e/edit">
                    <Pencil/>
                </Link>
                <Link className="btn btn-sm btn-danger text-white" to="#">
                    <Trash2/>
                </Link>
            </div>
        ),
    },
    {
        key: '2',
        title: 'title',
        description: 'description',
        tags: 'tags',
        reference: 'reference',
        notes: 'notes',
        status: 'status',
        patientId: 'patientId',
        doctorId: 'doctorId',
        appointmentDate: 'appointmentDate',
        duration: 'duration',
        invoiceId: 'invoiceId',
        action: (
            <div className="table-actions">
                <Link className="btn btn-sm btn-warning text-white me-1" to="/surgeon/appointments/644cc1905bfb877d576f7b31/edit">
                    <Pencil/>
                </Link>
                <Link className="btn btn-sm btn-danger text-white" to="#">
                    <Trash2/>
                </Link>
            </div>
        ),
    }
];


const BreadcrumbItem = [
    {
        title: <div className="d-flex align-items-center"><HouseDoor/> &nbsp; Home</div>,
        href: '/surgeon',
    },
    {
        title: 'Manage Appointments',
    },
];

const ManageAppointments: React.FC = () => {

    const [appointments, setAppointments] = useState<IAppointment[] | null>(null);

    // useEffect(() => {
    //     if (!enableEdit) {
    //         setAppointment(null);
    //     }
    // }, [enableEdit]);

    useEffect(() => {
        async function loadAppointments() {
            try {
                const res = await AppointmentService.getAllAppointments();
                setAppointments(res.data);
            } catch (error: any) {
                console.error(error.response.data);
            }
        }
    }, []);

    // const tableDataSource = appointments.map((item) => ({
    //     title: item.title,
    //     description: item.description,
    //     tags: item.tags, // split the tags string into an array of tags
    //     reference: item.reference,
    //     notes: item.notes,
    //     status: item.status,
    //     patientId: item.patientId,
    //     doctorId: item.doctorId,
    //     appointmentDate: item.appointmentDate, // convert the appointmentDate string to a Date object
    //     duration: item.duration,
    //     invoiceId: item.invoiceId,
    //     action: (
    //         <div className="table-actions">
    //             <Link className="btn btn-sm btn-warning text-white me-1" to={`/surgeon/appointments/${item._id}/edit`}>
    //                 <Pencil/>
    //             </Link>
    //             <Link className="btn btn-sm btn-danger text-white" to="#">
    //                 <Trash2/>
    //             </Link>
    //         </div>
    //     ),
    // }));

    return (<>
            <PageHeader className="ninjadash-page-header-main" title="Manage Appointments" routes={BreadcrumbItem}/>
            <Main>
                <Row gutter={15}>
                    <Col xs={24}>
                        <BorderLessHeading>
                            <Cards isbutton={
                                <Link className="btn btn-primary h-auto" type="link" to="/surgeon/appointments/create">
                                   <Plus/> Add New
                                </Link>
                            }>
                                <Table columns={dataTableColumn} dataSource={tableDataSource}/>
                            </Cards>
                        </BorderLessHeading>
                    </Col>
                </Row>
            </Main>
        </>
    )
};

export default ManageAppointments;


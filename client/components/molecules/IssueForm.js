import React from 'react'
import { Form } from 'semantic-ui-react'
import UploadForm from 'molecules/UploadForm'

const IssueForm = (props) => (
    <Form className="issue-form">
        <Form.Input label='หัวข้อ' placeholder='หมายเลขคำสั่งซื้อ เช่น #1445 หรือหัวข้อปัญหาการใช้งาน' />
        <UploadForm fileLimit={3} />
        <Form.TextArea label='รายละเอียด' placeholder='รายละเอียดเพิ่มเติมปัญหาที่พบ' />
    </Form>
)

export default IssueForm
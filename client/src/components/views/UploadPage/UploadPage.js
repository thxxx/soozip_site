import React, {useState} from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { Form as AForm, Upload, Button as AButton, Col } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import axios from 'axios'

function UploadPage(props) {
    const [title, setTitle] = useState("")
    const [writer, setWriter] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const submitItem = () => {
        const cc = {
            "스니커즈":"sneakers",
            "기타":"etc",
            "피규어":"figure",
        }
        const categoryDB = cc[category]
        const body = {
            title: title,
            writer:writer,
            description:description,
            category:categoryDB,
        }
        console.log(body)
        axios.post('api/item/uploadItem', body)
        .then(response => {
            if(response.data.success) {
                console.log("성공")
                props.history.push(`/${categoryDB}`)
            }
            else{
                console.log("fail to upload item")
            }
        })
        .catch(err => {throw err;})

        console.log('제출!')
    }

    const normFile = (e) => {
        let formData = new FormData();
        const config = {
            header:{ 'content-type' : 'multipart/form-data' }
        }
        formData.append("file", e.file)
        console.log('Upload event:', e.file);

        axios.post('/api/image/uploadImage', formData, config)
        .then(response => {
            if(response.data.success) {
                console.log("성공")
            }
            else{
                console.log("fail to upload iMage")
            }
        })
        .catch(err => {throw err;})
      };

    const onImage = ( files ) => {
        let formData = new FormData();
        const config = {
            header:{ 'content-type' : 'multipart/form-data' }
        }
        formData.append("file", files[0])
    }

    const changeTitle = (e) => {
        setTitle(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    const changeWriter = (e) => {
        setWriter(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    const changeDescription = (e) => {
        setDescription(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    const changeCategory = (e) => {
        setCategory(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    

    return (
        <span style={{	display: 'flex', justifyContent: 'center', alignItems: 'center', width:'500px', marginTop:'50px', marginBottom:'100px'}}>
        

        <Form onSubmit={submitItem}>

            <AForm.Item
                name="upload"
                label="제일 잘 나온 사진을 한장 등록하세요."
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra=""
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </AForm.Item>
            <br />
            <Form.Group className="mb-3" controlId="formWriter" style={{width:'100%'}}>
                <Form.Label>작성자 닉네임</Form.Label>
                <Form.Control type="text" placeholder="작성자" value={writer} onChange={changeWriter} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTitle" style={{width:'50%'}}>
                <Form.Label>제목(아이템 이름) 작성</Form.Label>
                <Form.Control type="text" placeholder="title" value={title} onChange={changeTitle} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription" style={{width:'70%'}}>
                <Form.Label>아이템에 설명</Form.Label>
                <Form.Control as="textarea" placeholder="Description" value={description} onChange={changeDescription} style={{ height: '150px' }} />
                <Form.Text className="text-muted">
                    본인에게 담겨있는 소중한 의미나 아이템에 관한 설명을 작성하세요.
                </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>카테고리</Form.Label>
                <Form.Select defaultValue="선택" value={category} onChange={changeCategory}>
                    <option>선택</option>
                    <option>스니커즈</option>
                    <option>피규어</option>
                    <option>기타</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitItem}>
                Submit
            </Button>
        </Form>
        </span>
    )
}

export default UploadPage
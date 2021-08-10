import React, {useState} from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { Form as AForm, Upload, Button as AButton, Col, Input } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios'

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

function UploadPage(props) {
    const [title, setTitle] = useState("")
    const [writer, setWriter] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [hashtag, setHashtag] = useState([])
    let hashnum = 0;

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
    const changeHashtag = (e) => {
        setHashtag({...hashtag, hashnum : e.currentTarget.value}); 
        console.log(hashtag)
    }
    

    return (
        <span style={{	display: 'flex', justifyContent: 'center', alignItems: 'center', width:'500px', marginTop:'50px', marginBottom:'100px'}}>

        <AForm onSubmit={submitItem} name="dynamic_form_item" {...formItemLayoutWithOutLabel} >

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

            <AForm.List
                name="names"
                rules={[
                {
                    validator: async (_, names) => {
                    if (!names || names.length < 2) {
                        return Promise.reject(new Error('At least 2 passengers'));
                    }
                    },
                },
                ]}
            >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <AForm.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Passengers' : ''}
                required={false}
                key={field.key}
              >
                <AForm.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: " ",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="passenger name" style={{ width: '60%' }} onChange={changeHashtag}/>
                </AForm.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => {remove(field.name); hashnum += 1} }
                  />
                ) : null}
              </AForm.Item>
            ))}
            <AForm.Item>
              <Button
                type="dashed"
                onClick={() => {add()}}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                해시태그 추가하기
              </Button>
              <AForm.ErrorList errors={errors} />
            </AForm.Item>
          </>
        )}
      </AForm.List>
        <br/>
            <Button variant="primary" type="submit" onClick={submitItem}>
                Submit
            </Button>
        </AForm>
        </span>
    )
}

export default UploadPage
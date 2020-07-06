import React, {useState, useEffect} from "react";
import s from './Goodsform.module.css';
import {Form, Button, TextArea, Image} from "semantic-ui-react";
import {uploadImage} from "../../../api/goods";
import noimage from '../../../assets/images/noimage.png'

const Goodsforms = () => {

    const [image, setImage] = useState(noimage);
    const [uploadedFile, setUploadedFile] = useState(null);

    useEffect(() => {

    }, [])

    const Onsubmit = async () => {
        const data = new FormData();
        const requestOptions = {
            headers: {
                "Content-Type": `multipart / form - data;
        boundary =${data._boundary}`,
            },
            crossDomain: true,
        }
        data.append("avatarImage", uploadedFile, uploadedFile.name);
        const result = await uploadImage(data, requestOptions);
        console.log(result.data.imageUrl);

    }


    const isFileValid = (file) => {
        if (!file) return false;
        const validExtentions = ["image/jpg", "image/png", "image/jpeg"];
        if (!validExtentions.includes(file.type)) {
            return false;
        }
        const maxSize = 15728640;
        if (maxSize < file.size) {
            return false;
        }
        return true;
    }

    const onChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        const valid = isFileValid(file);
        if (!valid) return;
        reader.onloadend = () => {
            setUploadedFile(file);
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    }


    return (
        <div className={s.formwrapper}>
            <div className={s.formelement}>
                <Form>
                    <Form.Field>
                        <label>Назва товару</label>
                        <input placeholder='Назва товару'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Ціна</label>
                        <input placeholder='Ціна'/>
                    </Form.Field>
                    <Form.Field
                        control={TextArea}
                        label='Опис товару'
                        placeholder='Опис повинен не перевищувати довжину у 40 символів.'
                    />
                    <Button type='submit' onClick={() => Onsubmit()}>Зберегти</Button>
                </Form>
            </div>

            <div className={s.imgWrapper}>
                <Image size='medium' src={image}/>
                <label>
                    <div className={s.inputWrapper}>
                        <input className={s.fileLoader} type="file"
                               onChange={(e) => onChange(e)}/> Загрузити файл
                    </div>
                </label>
            </div>
        </div>


    )
}

export default Goodsforms;

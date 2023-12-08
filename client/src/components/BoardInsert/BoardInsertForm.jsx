import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import './BoardInsertForm.css'
import styles from './BoardInsertForm.module.css'

const BoardInsertForm = ({ onInsert }) => {

    // state 설정
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [content, setContent] = useState('')

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeWriter = (e) => {
        setWriter(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {
        onInsert(title, writer, content)
    }


    return (
        <div className='container'>
            <h1 className='title'>게시글 등록</h1>
            <table border={1} className={ styles.table }>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type="text" className={ styles['form-input'] } value={title} onChange={handleChangeTitle} />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input type="text" className={ styles['form-input'] } value={writer} onChange={handleChangeWriter} />
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <textarea cols="40" rows="5"
                                      className={ styles['form-input'] }
                                      value={content}
                                      onChange={handleChangeContent}
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='btn-box'>
                <Link to="/boards" className='btn'>목록</Link>
                <button className='btn' onClick={ onSubmit }>등록</button>
            </div>

        </div>
    )
}

export default BoardInsertForm
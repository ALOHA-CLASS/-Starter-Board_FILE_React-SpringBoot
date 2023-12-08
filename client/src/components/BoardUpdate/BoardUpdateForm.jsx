import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import './BoardUpdateForm.css'
import styles from './BoardUpdateForm.module.css'
import * as format from '../../apis/format'

const BoardUpdateForm = ({ no, board, onUpdate, onDelete }) => {

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
        onUpdate(no, title, writer, content)
    }


    useEffect( () => {
        if( board ) {
            setTitle(board.title);
            setWriter(board.writer)
            setContent(board.content)
        }
    }, [board])



    return (
        <div className='container'>
            <h1 className='title'>게시글 수정</h1>
            <h3>번호 : {no}</h3>
            <hr/>
            <table border={1} className={ styles.table }>
                <tbody>
                    <tr>
                        <td>번호</td>
                        <td>
                            <input type="text" className={ styles['form-input'] } value={board.no} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>등록일자</td>
                        <td>
                            <input type="text" className={ styles['form-input'] } value={ format.formatDate( board.regDate ) } readOnly />
                        </td>
                    </tr>
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
                                      onChange={handleChangeContent}></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <div className="btn-box">
                <div className="item">
                    <Link to="/boards" className='btn'>목록</Link>
                </div>                
                <div className="item">
                    <button className='btn' onClick={ () => onDelete(no) }>삭제</button>
                    <button className='btn' onClick={ onSubmit }>수정</button>
                </div>                
            </div>
        </div>
    )

}

export default BoardUpdateForm
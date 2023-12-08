import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import './BoardRead.css'
import styles from './BoardRead.module.css'
import * as format from '../../apis/format'

const BoardRead = ({ no, board }) => {

    return (
        <div className='container'>
            <h1 className='title'>게시글 조회</h1>
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
                            <input type="text" className={ styles['form-input'] } value={board.title} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input type="text" className={ styles['form-input'] } value={board.writer} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <textarea className={ styles['form-input'] } cols="40" rows="5" value={board.content} readOnly></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <div className="btn-box">
                <Link to="/boards" className='btn'>목록</Link>
                <Link to={`/boards/update/${no}`} className='btn'>수정</Link>
            </div>
        </div>
    )
}

export default BoardRead
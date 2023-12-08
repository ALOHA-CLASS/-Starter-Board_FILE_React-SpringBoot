import React from 'react'
import { Link } from 'react-router-dom'
// import './BoardList.css'
import styles from './BoardList.module.css'
import * as format from '../../apis/format'

const BoardList = ({ boardList }) => {

    return (
        <div className='container'>
            <h1 className='title'>게시글 목록</h1>
            <Link to="/boards/insert" className='btn'>글쓰기</Link>
            <table border={1} className={ styles.table }>
                <thead>
                    <tr>
                        <th align='100'>번호</th>
                        <th align='100'>제목</th>
                        <th align='100'>작성자</th>
                        <th align='100'>등록일자</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => (
                        <tr key={board.no}>
                            <td align='center'>{board.no}</td>
                            <td align='left'>
                                <Link to={`/boards/${board.no}`}>{board.title}</Link>
                            </td>
                            <td align='center'>{board.writer}</td>
                            <td align='center'>{ format.formatDate( board.regDate ) }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BoardList